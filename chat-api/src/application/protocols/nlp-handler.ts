export interface INlpHandler {
  getAnswer(question: string): Promise<string>;
}
