import { Container } from 'inversify';
import { setupDependencies } from './inject-dependencies';

export let container: Container;

export const setupInjectionContainer = () => {
  if (!container) {
    container = new Container();
    setupDependencies(container);
  }
  return container;
};
