const express = require('express');

const app = express();

const http = require('http');

const cors = require('cors');

const { Server } = require('socket.io');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // localhost:3000 because react runs on that port
    methods: ['GET', 'POST'],
  },
});

// when someone connect's calling this callback function
io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // when emmiting an event to join a room
  socket.on('join_room', (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  // when someone sends a message
  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data);
  });

  // when someone wants to get disconnected
  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id);
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});
