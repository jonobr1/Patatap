var handler = require('./handler.js');

// register serialosc event callbacks, currently supported:
//   deviceFound -> (device) : called when a device is found
//   deviceLost -> (device) : called when a device is lost
exports.on = handler.on;

// start bonjour browser and find sum monomes
exports.discover = handler.discover;

// supported options:
//   listenHost: '127.0.0.1'
exports.config = handler.config;

// exported for tests, shouldn't be used directly
exports.discoverDevice = handler.discoverDevice;
exports.createDevice = handler.createDevice;
