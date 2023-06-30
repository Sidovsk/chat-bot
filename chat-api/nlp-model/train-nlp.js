// eslint-disable-next-line @typescript-eslint/no-var-requires
const { NlpManager } = require('node-nlp');

const train = async () => {
  const manager = new NlpManager({ languages: ['en'], forceNER: true, modelFileName: 'nlp-model/model.nlp' });

  manager.addDocument('en', 'goodbye for now', 'greetings.bye');

  manager.addDocument('en', 'bye bye take care', 'greetings.bye');
  manager.addDocument('en', 'okay see you later', 'greetings.bye');
  manager.addDocument('en', 'bye for now', 'greetings.bye');
  manager.addDocument('en', 'i must go', 'greetings.bye');
  manager.addDocument('en', 'hello', 'greetings.hello');
  manager.addDocument('en', 'hi', 'greetings.hello');
  manager.addDocument('en', 'howdy', 'greetings.hello');

  manager.addDocument('en', 'how are you', 'greetings.how_are_you');
  manager.addDocument('en', 'how is your day', 'greetings.how_are_you');
  manager.addDocument('en', 'how are you doing', 'greetings.how_are_you');
  manager.addDocument('en', 'are you alright', 'greetings.how_are_you');

  manager.addDocument('en', 'what are you', 'question.what_are_you');
  manager.addDocument('en', 'are you a robot', 'question.what_are_you');
  manager.addDocument('en', 'who are you', 'question.what_are_you');
  manager.addDocument('en', 'tell me about you', 'question.what_are_you');
  manager.addDocument('en', 'talk about you?', 'question.what_are_you');
  manager.addDocument('en', 'are you a chat bot', 'question.what_are_you');
  manager.addDocument('en', 'are you a program', 'question.what_are_you');

  manager.addDocument('en', 'test', 'testing');
  manager.addDocument('en', 'testing', 'testing');
  manager.addDocument('en', 'doing a test', 'testing');

  manager.addAnswer('en', 'greetings.how_are_you', 'Feeling wonderful!');
  manager.addAnswer('en', 'greetings.how_are_you', 'Wonderful! Thanks for asking!');

  manager.addAnswer('en', 'greetings.bye', 'Till next time');
  manager.addAnswer('en', 'greetings.bye', 'see you soon!');
  manager.addAnswer('en', 'greetings.hello', 'Hey there!');
  manager.addAnswer('en', 'greetings.hello', 'Greetings!');
  manager.addAnswer(
    'en',
    'question.what_are_you',
    'I am a chat bot created by João Pedro',
  );

  manager.addAnswer('en', 'testing', 'Test is ok! I love tests!');
  manager.addAnswer('en', 'testing', '1... 2... 3... testing!');

  manager.addAnswer('en', 'None', "Sorry, I didn't understand what you said.");
  manager.addAnswer('en', 'None', "Sorry, I can't answer that question.");

  await manager.train();
};

train();
