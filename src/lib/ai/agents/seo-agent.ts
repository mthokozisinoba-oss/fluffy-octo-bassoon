import openai from '../openai';
import { BaseAgent } from '../agents';

export class SEOAgent extends BaseAgent {
  constructor(websiteId: string, agentId: string) {
    super(websiteId, agentId, 'seo');
  }

  async run(input: { url: string }) {
    await this.logActivity('SEO Analysis Started', 'in-progress', { url: input.url });
    
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          { role: "system", content: "You are an expert SEO agent. Analyze the given URL and provide recommendations." },
          { role: "user", content: `Analyze this URL: ${input.url}` }
        ],
      });

      const result = response.choices[0].message.content;
      await this.logActivity('SEO Analysis Completed', 'success', { result });
      return result;
    } catch (error: any) {
      await this.logActivity('SEO Analysis Failed', 'failed', { error: error.message });
      throw error;
    }
  }
}
