import { INlpHandler } from '@application/protocols/nlp-handler';
import { NLP_MANAGER } from './nlp-constants';
import { inject, injectable } from 'inversify';
import { NlpManager } from 'node-nlp';

@injectable()
export class NlpHandlerAdapter implements INlpHandler {
  constructor(@inject(NLP_MANAGER) private readonly nlpManager: NlpManager) {}

  async getAnswer(message: string): Promise<string> {
    const response = await this.nlpManager.process('en', message, {});
    return response.answer;
  }
}
