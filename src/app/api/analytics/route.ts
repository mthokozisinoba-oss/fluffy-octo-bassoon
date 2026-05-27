import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Use a public client or admin client depending on if we want to allow unauthenticated tracking
  const supabase = await createClient();
  
  const body = await req.json();
  const { websiteId, eventType, path, metadata } = body;

  const { error } = await supabase.from('analytics_events').insert({
    website_id: websiteId,
    event_type: eventType,
    path,
    metadata,
    user_agent: req.headers.get('user-agent'),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function GET(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const websiteId = searchParams.get('websiteId');

  if (!websiteId) {
    return NextResponse.json({ error: 'websiteId query parameter required' }, { status: 400 });
  }

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

  const { data: events, error } = await supabase
    .from('analytics_events')
    .select('*')
    .eq('website_id', websiteId)
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(events);
}
