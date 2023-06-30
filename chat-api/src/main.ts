import 'reflect-metadata';
import { SetupSocketServer } from '@infra/web-socket';
import { setupInjectionContainer } from '@infra/di';
import { SetupNlp } from '@infra/nlp';

async function main() {
  await SetupNlp.loadModel(process.env.NLP_MODEL_PATH || 'nlp-model/model.nlp');
  await setupInjectionContainer();
  await SetupSocketServer(parseInt(process.env.PORT || '3000'));
}

main();
