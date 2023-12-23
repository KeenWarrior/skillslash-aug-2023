const { set } = require('mongoose');
const sockioclient = require('socket.io-client');

const socket = sockioclient('http://localhost:8000');

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on("time", (data) => {
    console.log(data);
});

setInterval(() => {
    socket.emit("hello", "Hello from client");
}, 1000)    