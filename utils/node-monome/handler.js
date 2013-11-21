var osc = require('node-osc');
var events = require('events');
var mdns = require('mdns');

var options = {
  // host to bind to for messages from serialosc
  listenHost: '127.0.0.1'
};

// mdns browser
var browser = null;

// devices that have been discovered
var devices = {};

// if a service is bound to multiple interfaces it will show
// up as multiple distinct devices.  keep track of which have
// been seen.
var seenServices = {};

// TODO: keep numeric ids mapped to service names
var serviceIdMap = {};

// osc clients for ports that have been sent on
var oscClients = {};

// osc servers for ports that are being listened on
var oscServers = {};

// register serialosc event callbacks, currently supported:
//   deviceFound -> (device) : called when a device is found
//   deviceLost -> (device) : called when a device is lost
var eventsEmitter = new events.EventEmitter();
function on(event, callback) {
  eventsEmitter.on(event, callback);
};
exports.on = on;

// emits deviceFound(device) and deviceLost(device)
function discover() {
  if (browser !== null) return;
  browser = mdns.createBrowser(mdns.udp('monome-osc'));
  browser.on('serviceUp', function serviceUp(service) {
    if (seenServices[service.name]) {
      return;
    }
    seenServices[service.name] = true;
    device = discoverDevice(service);
    eventsEmitter.emit('deviceFound', device);
    addDevice(device);
  });
  browser.on('serviceDown', function serviceDown(service) {
    var device = getDevice(service);
    if (device) {
      disableDevice(device);
      delete devices[service.name];
      delete seenServices[service.name];
      eventsEmitter.emit('deviceLost', device);
    }
  });
  browser.start();
}
exports.discover = discover;

// supported options:
//   listenHost: '127.0.0.1'
function config(opts) {
  for (var key in opts) {
    options[key] = opts[key];
  }
}
exports.config = config;

// send an osc message to the host/port
// generally used for setting led state in serialosc
function oscOut(host, port, args) {
  var key = host + ':' + port;
  if (!oscClients[key]) {
    oscClients[key] = new osc.Client(host, port);
  }
  oscClients[key].send.apply(oscClients[key], args);
}

// start an osc server
// callback will receive the msg as its first argument
// serialosc talks to us on these servers
function oscServer(port, callback) {
  if (oscServers[port]) {
    oscServers[port].removeAllListeners('message');
  } else {
    oscServers[port] = new osc.Server(port);
  }
  oscServers[port].on('message', function message(msg, rinfo) {
    callback(msg);
  });
}

// create a device that represents one monome
var nextId = 1;
function createDevice() {
  var device = {
    id: nextId,
    socket: null,
    listenPort: 1024 + Math.floor(Math.random() * 60000),
    listenHost: options.listenHost,
    type: 'grid',
    sizeX: -1,
    sizeY: -1,
    encoders: 0,
    prefix: 'unknown',
    serialoscId: 'unknown',
    rotation: -1,
    focused: false,
    gridState: [],
    serialoscReplies: {
      '/sys/size': false,
      '/sys/id': false,
      '/sys/rotation': false,
      '/sys/prefix': false
    },
    eventsEmitter: new events.EventEmitter(),
    focusCallback: null,
    unfocusCallback: null,

    // register device event callbacks, currently supported:
    //   press -> (x, y, s) : called when a press event occurs
    //   oscOut -> (arguments) : called when osc message is sent to serialosc
    //   oscIn -> (arguments) : called when osc message is received from serialosc
    on: function(event, callback) {
      device.eventsEmitter.on(event, callback);
    },

    // grab focus of this device -- listen on an osc port and tell serialosc
    // also get info about this device (sizeX/sizeY)
    focus: function(focusCallback) {
      device.focusCallback = focusCallback;
      oscServer(device.listenPort, function message(msg) {
        device.oscIn(msg);
      });
      device.oscOut('/sys/port', device.listenPort);
      device.oscOut('/sys/host', device.listenHost);
      device.oscOut('/sys/info');
    },

    unfocus: function(unfocusCallback) {
      device.unfocusCallback = unfocusCallback;
      disableDevice(device);
    },

    // send osc message for this device to serialosc
    oscOut: function() {
      // automatically prepend prefix if not /sys message
      if (!arguments[0].match(/^\/sys/)) {
        arguments[0] = device.prefix + arguments[0];
      }
      device.eventsEmitter.emit('oscOut', arguments);
      oscOut(device.service.addresses[0], device.service.port, arguments);
    },

    // receive osc message from serialosc
    oscIn: function(msg) {
      device.eventsEmitter.emit('oscIn', msg);
      var addr = msg.shift();
      switch(addr) {

        case '/sys/size':
          device.sizeX = msg[0];
          device.sizeY = msg[1];
          device.serialoscReplies[addr] = true;
          break;

        case '/sys/id':
          device.serialoscId = msg[0];
          device.serialoscReplies[addr] = true;
          break;

        case '/sys/rotation':
          device.rotation = msg[0];
          device.serialoscReplies[addr] = true;
          break;

        case '/sys/prefix':
          device.prefix = msg[0];
          device.serialoscReplies[addr] = true;
          break;

        case device.prefix + '/grid/key':
          device.eventsEmitter.emit('press', msg[0], msg[1], msg[2]);
          return device;

        case device.prefix + '/enc/delta':
          device.eventsEmitter.emit('delta', msg[0], msg[1]);
          return device;

        case device.prefix + '/enc/key':
          device.eventsEmitter.emit('key', msg[0], msg[1]);
      }

      for (var key in device.serialoscReplies) {
        if (!device.serialoscReplies[key]) return device;
      }
      device.focused = true;
      if (typeof device.focusCallback == "function") {
        device.focusCallback();
        device.focusCallback = null;
      }
    }
  };
  nextId++;
  return device;
}
exports.createDevice = createDevice;

// create a new device based on a discovered service
function discoverDevice(service) {
  var device = createDevice();
  device.service = service;

  // detect arc, is there a better way?
  var matches = service.name.match(/arc (\d+)/);
  if (matches) {
    device.type = 'arc';
    device.encoders = parseInt(matches[1], 10);
  }
  return device;
}
exports.discoverDevice = discoverDevice;

// check if we know about this device based on its service name
function hasDevice(device) {
  if (devices[device.service.name] !== undefined) {
    return true;
  }
  return false;
}

// add a device to devices
function addDevice(device) {
  // replace the device if we already have one
  if (hasDevice(device)) {
    delete devices[device.service.name];
  }
  devices[device.service.name] = device;
}

// unbind listeners
function disableDevice(device) {
  if (hasDevice(device)) {
    device.eventsEmitter.removeAllListeners('press');
    device.eventsEmitter.removeAllListeners('oscIn');
    device.eventsEmitter.removeAllListeners('oscOut');
    if (device.oscServer) {
      device.oscServer.removeAllListeners('message');
    }
    device.focused = false;
    if (typeof device.unfocusCallback == "function") {
      device.unfocusCallback();
      device.unfocusCallback = null;
    }
  }
}

// get device by service name
function getDevice(service) {
  return devices[service.name];
}