import { inject, injectable } from 'inversify';
import { SocketEventHandler } from '@common/contracts/socket-event-handler';
import { IReceiveChatMessageUseCase } from '@domain/use-cases';
import { ReceiveChatMessageUseCase } from '@application/use-cases';

@injectable()
export class ReceiveMessageController {
  constructor(@inject(ReceiveChatMessageUseCase) private readonly useCase: IReceiveChatMessageUseCase) {}
  async handle(socket: SocketEventHandler) {
    const { message, createdAt } = socket.data;
    const answer = await this.useCase.handle({ message, createdAt });
    socket.emit('chat-message', answer);
  }
}
