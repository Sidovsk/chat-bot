import { AuthorTypes } from '@common/types';
import { ChatMessage } from './chat-message.entity';

describe('Chat Entity Test', () => {
  it('should create a valid chat message', () => {
    const dateNow = new Date();
    const chatMessage = new ChatMessage({
      message: 'Hello World',
      author: AuthorTypes.YOU,
      createdAt: dateNow,
    });
    expect(chatMessage.getMessage()).toEqual('Hello World');
    expect(chatMessage.getAuthor()).toEqual(AuthorTypes.YOU);
    expect(chatMessage.getCreatedAt()).toEqual(dateNow);
  });

  it('should fail if provide an empty message', () => {
    expect(
      () =>
        new ChatMessage({
          author: AuthorTypes.BOT,
          message: '',
        }),
    ).toThrowError('Message is required');
  });

  it('should fail if provide an empty author', () => {
    expect(
      () =>
        new ChatMessage({
          author: '' as AuthorTypes,
          message: 'hello',
        }),
    ).toThrowError('Author is required');
  });
});
