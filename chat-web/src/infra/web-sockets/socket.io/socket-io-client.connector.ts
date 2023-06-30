import { io as Client } from 'socket.io-client';
import { ISocketClient } from '@common/contracts/socket-client';

let socket: ISocketClient;

export const SocketIoConnector = {
  connect: (): void => {
    socket = Client(import.meta.env.VITE_SOCKET_SERVER_URL, {
      path: '/chat',
    });
    socket.on('connect', () => console.log('Web socket connected'));
  },
  getConnection: (): ISocketClient => {
    if (!socket) {
      throw new Error('Socket not initialized');
    }
    return socket;
  },
  disconnect: (): void => {
    socket.disconnect();
  },
};
