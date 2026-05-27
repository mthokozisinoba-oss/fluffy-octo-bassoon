import { getSupabaseAdmin } from '../supabase';

export type AgentType = 'seo' | 'content' | 'support' | 'design' | 'marketing' | 'analytics';

export abstract class BaseAgent {
  constructor(
    protected websiteId: string,
    protected agentId: string,
    protected type: AgentType
  ) {}

  protected async logActivity(action: string, status: 'success' | 'failed' | 'in-progress', details: any = {}) {
    const supabase = getSupabaseAdmin();
    await supabase.from('agent_activities').insert({
      agent_id: this.agentId,
      website_id: this.websiteId,
      action,
      status,
      details
    });
  }

  abstract run(input: any): Promise<any>;
}

export * from './agents/seo-agent';
export * from './agents/content-agent';
export * from './agents/support-agent';
export * from './agents/design-agent';
export * from './agents/marketing-agent';
export * from './agents/analytics-agent';
