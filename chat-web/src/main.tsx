import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SocketIoConnector } from './infra/web-sockets/socket.io';
import { Provider } from 'inversify-react';
import { setupInjectionContainer } from './infra/di/setup/container';
import { ChakraProvider } from '@chakra-ui/react';

SocketIoConnector.connect();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider container={setupInjectionContainer()}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
);
