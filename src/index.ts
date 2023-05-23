import express, { Express, Request, Response } from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';


const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send({ uptime: process.uptime() });
});

const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('A client connected');

  socket.on('message', (data) => {
    console.log('Received message:', data);
  });

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Running at localhost:3000');
});
