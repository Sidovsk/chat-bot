import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { AuthorTypes } from '@common/types';
import { ChatMessage } from '@domain/entities';
import React from 'react';

const colorByAuthor = {
  [AuthorTypes.BOT]: '#A0A0A0',
  [AuthorTypes.YOU]: '#1f81f8',
};

type ChatMessageBoxProps = {
  chatMessage: ChatMessage;
};

export const ChatMessageBox: React.FC<ChatMessageBoxProps> = ({ chatMessage }) => {
  return (
    <Flex alignItems="center" h="50px">
      <Avatar bg={colorByAuthor[chatMessage.getAuthor()]} showBorder size="md" />
      <Box alignItems="flex-start" textAlign="start" display="flex" flexDirection="column" margin="5px">
        <Text fontSize="xs" fontWeight="bold">
          {chatMessage.getAuthor()}
        </Text>
        <Text fontSize="lg" textAlign="center">
          {chatMessage.getMessage()}
        </Text>
      </Box>
    </Flex>
  );
};
