const socketio = require('socket.io');

exports.setupWebsocket = (server) => {
    console.log("Websocket setup");

    const io = socketio(server);

    io.on('connection', socket => {
    });
};