var monome = require('./node-monome/monome.js');

monome.on('deviceFound', function(device) {
  console.log("found device " + device.service.name);
  device.focus(function() {
    console.log("focused device " + device.service.name);
    device.on('press', function(x, y, s) {
      console.log('press from ' + device.service.name + ' - x:' + x + ', y:' + y + ', s:' + s);
      device.oscOut("/grid/led/set", x, y, s);
    });
    device.on('delta', function(e, d) {
      console.log('delta from ' + device.service.name + ' - e:' + e + ', d:' + d);
    });
    device.on('key', function(e, s) {
      console.log('key from ' + device.service.name + ' - e:' + e + ', s:' + s);
    });
  });
});

monome.on('deviceLost', function(device) {
  console.log("lost device " + device.service.name);
});

// monome.config({
//  listenHost: '192.168.0.100'
// });

monome.discover();

var stdin = process.openStdin();