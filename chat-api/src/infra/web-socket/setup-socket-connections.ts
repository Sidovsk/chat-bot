import { Server } from 'socket.io';
import { container } from '../di';
import { ReceiveMessageController } from '@presentation/controllers';

export const setupSocketConnections = async (socketServer: Server) => {
  const receiveMessageController = container.get(ReceiveMessageController);

  socketServer.on('connection', chatSocket => {
    chatSocket.on('chat-message', data => {
      receiveMessageController.handle({ data, emit: chatSocket.emit.bind(chatSocket) });
    });

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    chatSocket.on('disconnect', () => {});
  });
};
