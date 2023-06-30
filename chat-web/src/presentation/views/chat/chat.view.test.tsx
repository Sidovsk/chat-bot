import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { ChatView } from './chat.view';
import { Container } from 'inversify';
import { ISocketClient } from '@common/contracts';
import { SOCKET_IO_CONNECTION } from '@infra/web-sockets/socket.io/socket-io.constants';
import { Provider } from 'inversify-react';

const socketMock = {
  on: jest.fn(),
  emit: jest.fn(),
  off: jest.fn(),
  disconnect: jest.fn(),
};

Element.prototype.scrollTo = jest.fn();

const renderChatView = (container: Container) =>
  render(
    <Provider container={container}>
      <ChatView />
    </Provider>,
  );

describe('ChatView', () => {
  let container: Container;
  beforeAll(() => {
    container = new Container();
    container.bind<ISocketClient>(SOCKET_IO_CONNECTION).toConstantValue(socketMock);
  });

  afterEach(cleanup);

  it('should render chat view', () => {
    const { getByText, getByRole } = renderChatView(container);
    expect(getByText('Welcome to the Chat!')).toBeTruthy();

    const input: HTMLInputElement = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(input.value).toBe('Hello');

    const button = getByRole('button');
    fireEvent.click(button);

    expect(socketMock.emit).toBeCalledTimes(1);
    expect(input.value).toBe('');
  });
});
