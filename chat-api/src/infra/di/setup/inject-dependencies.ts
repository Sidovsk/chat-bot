import { Container } from 'inversify';

import { setupInjectControllers } from './inject-controllers';
import { setupInjectUseCases } from './inject-use-cases';
import { INlpHandler } from '@application/protocols/nlp-handler';
import { NlpHandlerAdapter, NLP_MANAGER, SetupNlp } from '@infra/nlp';

export const setupDependencies = (container: Container): void => {
  /*
  Common
  */
  container.bind(Container).toConstantValue(container); // Inject self container
  container.bind(NLP_MANAGER).toConstantValue(SetupNlp.getManager());
  container.bind<INlpHandler>(NlpHandlerAdapter).toSelf();
  setupInjectUseCases(container);
  setupInjectControllers(container);
};
