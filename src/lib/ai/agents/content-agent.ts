import openai from '../openai';
import { BaseAgent } from '../agents';

export class ContentAgent extends BaseAgent {
  constructor(websiteId: string, agentId: string) {
    super(websiteId, agentId, 'content');
  }

  async run(input: { topic: string, targetLength?: number }) {
    await this.logActivity('Content Generation Started', 'in-progress', { topic: input.topic });
    
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          { role: "system", content: "You are a professional content writer. Write an article based on the topic." },
          { role: "user", content: `Topic: ${input.topic}. Target length: ${input.targetLength || 500} words.` }
        ],
      });

      const result = response.choices[0].message.content;
      await this.logActivity('Content Generation Completed', 'success', { result });
      return result;
    } catch (error: any) {
      await this.logActivity('Content Generation Failed', 'failed', { error: error.message });
      throw error;
    }
  }
}
