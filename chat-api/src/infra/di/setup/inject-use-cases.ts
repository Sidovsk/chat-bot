import { Container } from 'inversify';
import { IReceiveChatMessageUseCase } from '@domain/use-cases';
import { ReceiveChatMessageUseCase } from '@application/use-cases/receive-chat-message.use-case';

export const setupInjectUseCases = (container: Container): void => {
  /*
  Use Cases
  */
  container.bind<IReceiveChatMessageUseCase>(ReceiveChatMessageUseCase).toSelf();
};
