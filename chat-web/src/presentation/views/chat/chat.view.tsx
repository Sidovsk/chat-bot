import React, { useEffect } from 'react';
import { useInjection } from 'inversify-react';
import { SOCKET_IO_CONNECTION } from '@infra/web-sockets/socket.io/socket-io.constants';
import { useChatViewModel } from './chat.view-model';
import { ISocketClient } from '@common/contracts/socket-client';
import { ChatMessage, ChatMessageProps } from '@domain/entities';
import { ChatMessagesContainer, ChatInput, ChatMessageBox } from './components';
import { Card, CardBody, CardFooter, CardHeader, Heading } from '@chakra-ui/react';
import { AuthorTypes } from '@common/types';

export const ChatView: React.FC = () => {
  const { chatMessages, addChatMessage } = useChatViewModel();

  const socket = useInjection<ISocketClient>(SOCKET_IO_CONNECTION);

  const newChatMessageEvent = (chatMessage: ChatMessageProps) => {
    if (!chatMessage?.message) {
      return;
    }
    const newChatMessage = new ChatMessage(chatMessage);
    addChatMessage(newChatMessage);
  };

  const sendChatMessage = (message: string) => {
    const chatMessage = new ChatMessage({ message, author: AuthorTypes.YOU });
    addChatMessage(chatMessage);
    socket.emit('chat-message', chatMessage.toObject());
  };

  useEffect(() => {
    socket.off('chat-message');
    socket.on('chat-message', newChatMessageEvent);
  }, []);

  return (
    <>
      <Card height="50em" backgroundColor="#f6f6f6">
        <CardHeader padding="1em" height="10%">
          <Heading as="h2">Welcome to the Chat!</Heading>
        </CardHeader>
        <CardBody maxHeight="80%" padding="0.5em">
          <ChatMessagesContainer>
            {chatMessages.map((chatMessage, idx) => (
              <ChatMessageBox key={idx} chatMessage={chatMessage} />
            ))}
          </ChatMessagesContainer>
        </CardBody>
        <CardFooter paddingX="1em" paddingY="0.5em" height="10%">
          <ChatInput sendChatMessage={sendChatMessage} />
        </CardFooter>
      </Card>
    </>
  );
};
