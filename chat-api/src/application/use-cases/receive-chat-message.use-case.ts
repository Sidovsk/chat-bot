import { inject, injectable } from 'inversify';
import { ChatMessageInputDTO, ChatMessageOutputDTO, IReceiveChatMessageUseCase } from '@domain/use-cases';
import { INlpHandler } from '../protocols/nlp-handler';
import { ChatMessage } from '@domain/entities/chat-message.entity';
import { NlpHandlerAdapter } from '@infra/nlp';
import { AuthorTypes } from '@common/types';

@injectable()
export class ReceiveChatMessageUseCase implements IReceiveChatMessageUseCase {
  constructor(@inject(NlpHandlerAdapter) private readonly nlpHandler: INlpHandler) {}
  async handle({ message, createdAt }: ChatMessageInputDTO): Promise<ChatMessageOutputDTO> {
    const answer = await this.nlpHandler.getAnswer(message);
    const responseMessage = new ChatMessage({ message: answer, author: AuthorTypes.BOT, createdAt });
    return responseMessage.toObject();
  }
}
