import React, { useEffect, useRef } from 'react';
import { Card, StackDivider, VStack } from '@chakra-ui/react';

type ChatMessagesContainerProps = {
  children: React.ReactNode;
};

export const ChatMessagesContainer: React.FC<ChatMessagesContainerProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref?.current?.scrollTo({ top: ref.current?.scrollHeight });
  }, [children]);

  return (
    <Card ref={ref} minHeight="100%" maxHeight="100%" overflowY="auto" width="100%" padding="1em">
      <VStack padding="2" divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
        {children}
      </VStack>
    </Card>
  );
};
