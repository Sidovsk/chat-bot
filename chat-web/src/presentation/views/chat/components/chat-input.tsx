import React, { useState } from 'react';
import { Input, Button, Icon, InputRightElement, InputGroup } from '@chakra-ui/react';
import { IoSendSharp } from 'react-icons/io5';

type ChatInputProps = {
  sendChatMessage: (message: string) => void;
};

export const ChatInput: React.FC<ChatInputProps> = ({ sendChatMessage }) => {
  const [value, setValue] = useState('');

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendChatMessage(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmitForm} style={{ width: '100%' }}>
      <InputGroup>
        <Input
          placeholder="send your message..."
          size="md"
          value={value}
          onChange={e => setValue(e.currentTarget.value)}
          borderRadius={10}
          backgroundColor={'#ffffff'}
        />
        <InputRightElement>
          <Button
            border="1px solid"
            backgroundColor="white"
            borderColor="inherit"
            type="submit"
            size="md"
            borderRadius={10}
          >
            <Icon as={IoSendSharp} />
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};
