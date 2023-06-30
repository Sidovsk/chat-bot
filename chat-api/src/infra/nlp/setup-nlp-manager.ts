import { NlpManager } from 'node-nlp';

let nlpManager: NlpManager;

export const SetupNlp = {
  loadModel(modelPath): void {
    nlpManager = new NlpManager({ languages: ['en'], forceNER: true });
    nlpManager.load(modelPath);
  },

  getManager(): NlpManager {
    if (!nlpManager) {
      throw new Error('NLP Manager not initialized');
    }
    return nlpManager;
  },
};
