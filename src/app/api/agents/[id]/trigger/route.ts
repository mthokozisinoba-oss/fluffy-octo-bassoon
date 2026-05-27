import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import {
  SEOAgent,
  ContentAgent,
  SupportAgent,
  DesignAgent,
  MarketingAgent,
  AnalyticsAgent
} from '@/lib/ai/agents';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: agentId } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { websiteId, input } = body;

  // Verify ownership
  const { data: website } = await supabase
    .from('websites')
    .select('id')
    .eq('id', websiteId)
    .eq('user_id', user.id)
    .single();

  if (!website) {
    return NextResponse.json({ error: 'Website not found or unauthorized' }, { status: 404 });
  }

  // Get agent type
  const { data: agent } = await supabase
    .from('ai_agents')
    .select('type')
    .eq('id', agentId)
    .single();

  if (!agent) {
    return NextResponse.json({ error: 'Agent not found' }, { status: 404 });
  }

  let result;
  try {
    let agentInstance;
    switch (agent.type) {
      case 'seo':
        agentInstance = new SEOAgent(websiteId, agentId);
        break;
      case 'content':
        agentInstance = new ContentAgent(websiteId, agentId);
        break;
      case 'support':
        agentInstance = new SupportAgent(websiteId, agentId);
        break;
      case 'design':
        agentInstance = new DesignAgent(websiteId, agentId);
        break;
      case 'marketing':
        agentInstance = new MarketingAgent(websiteId, agentId);
        break;
      case 'analytics':
        agentInstance = new AnalyticsAgent(websiteId, agentId);
        break;
      default:
        return NextResponse.json({ error: 'Agent type not supported' }, { status: 400 });
    }

    result = await agentInstance.run(input);
    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
