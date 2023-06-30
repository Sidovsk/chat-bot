import { AuthorTypes } from '@common/types';
import { ChatMessage } from './chat-message.entity';

describe('Chat Entity Test', () => {
  it('should create a valid chat message', () => {
    const dateNow = new Date();
    const props = {
      message: 'Hello World',
      author: AuthorTypes.BOT,
      createdAt: dateNow,
    };

    const chatMessage = new ChatMessage(props);
    expect(chatMessage.getMessage()).toEqual('Hello World');
    expect(chatMessage.getAuthor()).toEqual(AuthorTypes.BOT);
    expect(chatMessage.getCreatedAt()).toEqual(dateNow);
    expect(chatMessage.toObject()).toEqual(props);
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
