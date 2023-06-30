import { Server } from 'socket.io';
import { setupSocketConnections } from './setup-socket-connections';

export const SetupSocketServer = (port: number) => {
  const io = new Server({ path: '/chat', cors: { origin: '*' } });
  setupSocketConnections(io);
  io.listen(port);
  console.log(`Socket server listening on port ${port}`);
};
