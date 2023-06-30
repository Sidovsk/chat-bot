import { useState } from 'react';
import { ChatMessage } from '@domain/entities';

export const useChatViewModel = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const addChatMessage = (chatMessage: ChatMessage) => {
    setChatMessages(prevChatMessages => [...prevChatMessages, chatMessage]);
  };

  return {
    chatMessages,
    addChatMessage,
  };
};
