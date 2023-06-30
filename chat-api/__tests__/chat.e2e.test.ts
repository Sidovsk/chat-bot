import { io as Client } from 'socket.io-client';

describe('chat socket connection', () => {
  let clientSocket;
  beforeAll(done => {
    clientSocket = Client(`http://localhost:3000`, {
      path: '/chat',
    });
    clientSocket.on('connect', done);
  });

  afterAll(() => {
    clientSocket.close();
  });

  it('should receive a chat message', done => {
    clientSocket.emit('chat-message', { message: 'Hello World', author: 'bot', createdAt: new Date() });
    clientSocket.on('chat-message', data => {
      expect(typeof data.message).toBe('string');
      expect(typeof data.author).toBe('string');
      expect(typeof data.createdAt).toBe('string');
      done(false);
    });
  });
});
