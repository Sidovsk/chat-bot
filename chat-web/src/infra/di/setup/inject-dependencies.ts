import { Container } from 'inversify';
import { SOCKET_IO_CONNECTION, SocketIoConnector } from '@infra/web-sockets/socket.io';
import { ISocketClient } from '@common/contracts/socket-client';

export const setupDependencies = (container: Container) => {
  container.bind<ISocketClient>(SOCKET_IO_CONNECTION).toConstantValue(SocketIoConnector.getConnection());
};
