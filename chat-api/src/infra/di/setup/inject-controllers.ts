import { Container } from 'inversify';

import { ReceiveMessageController } from '@presentation/controllers';

export const setupInjectControllers = (container: Container): void => {
  /*
  Controllers
  */
  container.bind(ReceiveMessageController).toSelf();
};
