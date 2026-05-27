import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Check for admin role
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();
    
  if (profile?.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // Get stats
  const { count: userCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true });
  const { count: websiteCount } = await supabase.from('websites').select('*', { count: 'exact', head: true });
  const { count: activeSubscriptions } = await supabase.from('subscriptions').select('*', { count: 'exact', head: true }).eq('status', 'active');

  return NextResponse.json({
    users: userCount,
    websites: websiteCount,
    subscriptions: activeSubscriptions,
  });
}
