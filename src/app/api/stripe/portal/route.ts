import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function GET(req: Request) {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });

  const stripe = new Stripe(stripeKey, { apiVersion: '2025-02-24.acacia' as any });
  const portal = await stripe.billingPortal.sessions.create({
    customer: session.user.email || '',
    return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
  });
  return NextResponse.json({ url: portal.url });
}
