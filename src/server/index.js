const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');
const router = require('./router');

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('We have a new connection!');

    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) {
            return callback(error);
        }

        socket.join(user.room);
    });

    socket.on('disconnect', () => {
        console.log('User left!');
    });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));