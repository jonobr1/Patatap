var http = require('http').createServer();
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var midi = require('midi');
var input = new midi.input();

input.getPortCount();

input.getPortName(0);

// On socket is ready
io.on('connection', function(socket){

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  input.on('message', function(deltaTime, message) {
    // The second parameter is the key!
    // var items = message.split(',');

    switch (message[0]) {

      case 144:
        console.log(message[1]);
        socket.emit('key', message[1]);
        break;

    }

    // console.log('a:', message[0], 'key:', message[1], '\n');

  });

});

// Open the first available input port. 
input.openPort(0);

/**
 * Listen to port
 */

http.listen(port, function(){
  console.log('App is running at PORT: %s', port);
});