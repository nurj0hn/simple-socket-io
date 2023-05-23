import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server');
  socket.emit('message', 'Hello, server!');
});

socket.on('response', (data) => {
  console.log('Server response:', data);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
