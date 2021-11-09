import openai from '../src/index';

describe('OpenAI library', () => {
  it('should be able to load the library', () => {
    expect(openai).toBeDefined();
  });
});
