const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const redis = require('redis');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const redisClient = redis.createClient({
    host: 'redis',
    port: 6379
});

redisClient.subscribe('chat-channel');

redisClient.on('message', (channel, message) => {
    io.emit(channel, message);
});

io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(6001, () => {
    console.log('Socket.IO server running on port 6001');
});

app.get('/', function(req, res) {
   res.send('Hello World');
})