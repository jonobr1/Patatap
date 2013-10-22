var connect = require('connect'),
  server = connect.createServer(
    connect.static(__dirname)
  ).listen(8080),
  io     = require('socket.io').listen(server),
  monome = require('./utils/node-monome/monome.js')
  sockets = [],
  devices = [];

io.sockets.on('connection', function (socket) {

  socket
    .on('start', function(resp) {
      console.log('start' + resp.x + ', ' + resp.y);
      eachDevice(function(device, i) {
        device.oscOut('/grid/led/set', resp.x, resp.y, 1);
      });
    })
    .on('end', function(resp) {
      console.log('end' + resp.x + ', ' + resp.y);
      eachDevice(function(device, i) {
        device.oscOut('/grid/led/set', resp.x, resp.y, 0);
      });
    });

  sockets.push(socket);

});

monome.on('deviceFound', function(device) {
  console.log("found device " + device.service.name);
  devices.push(device);
  device.focus(function() {
    console.log("focused device " + device.service.name);
    device.on('press', function(x, y, s) {
      // console.log('press from ' + device.service.name + ' - x:' + x + ', y:' + y + ', s:' + s);
      eachSocket(function(socket, i) {
        socket.emit('press', { x: x, y: y, s: s });
      });
    });
    device.on('delta', function(e, d) {
      // console.log('delta from ' + device.service.name + ' - e:' + e + ', d:' + d);
    });
    device.on('key', function(e, s) {
      // console.log('key from ' + device.service.name + ' - e:' + e + ', s:' + s);
    });
  });
});

monome.on('deviceLost', function(device) {
  console.log("lost device " + device.service.name);
  eachSocket(function(socket, i) {
    socket.emit('disconnected', device.service.name);
  });
});

// monome.config({
//  listenHost: '192.168.0.100'
// });

monome.discover();

var stdin = process.openStdin();

function eachDevice(func) {
  for (var i = 0; i < devices.length; i++) {
    var device = devices[i];
    func(device, i);
  }
}

function eachSocket(func) {
  for (var i = 0; i < sockets.length; i++) {
    var socket = sockets[i];
    func(socket, i);
  }
}