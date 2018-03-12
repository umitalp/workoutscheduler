var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);
server.listen(3030, () => console.log('listening on *:3030'));

// The event will be called when a client is connected.
websocket.on('connection', (socket) => {
    console.log('A client just joined on', socket.id);
    console.log('Sending', { name: 'Socket', workout: 'gym' });
    socket.emit('participantAdded', {name: 'Socket', workout: 'gym'} ); // emit an event to the socket
    socket.on('addParticipant', (data) => {
        console.log('Add participant', data);
    });
});

