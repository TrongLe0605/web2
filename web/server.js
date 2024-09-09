const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let fastestPlayer = null;

io.on('connection', (socket) => {
    console.log('Người chơi đã kết nối:', socket.id);

    // Khi người chơi nhấn nút
    socket.on('playerPressed', (playerNumber) => {
        if (!fastestPlayer) {
            fastestPlayer = playerNumber;
            io.emit('result', `Người chơi ${playerNumber} đã nhấn nhanh nhất!`);
        }
    });

    // Khi bắt đầu lại trò chơi
    socket.on('resetGame', () => {
        fastestPlayer = null;
        io.emit('reset');
    });

    socket.on('disconnect', () => {
        console.log('Người chơi đã ngắt kết nối:', socket.id);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
    console.log('Server đang chạy trên cổng 3000');
});
