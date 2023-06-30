import { ChatMessageInputDTO, ChatMessageOutputDTO } from './dtos/receive-chat-message.dto';

export interface IReceiveChatMessageUseCase {
  handle(input: ChatMessageInputDTO): Promise<ChatMessageOutputDTO>;
}
