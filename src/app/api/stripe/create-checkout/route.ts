import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { planId } = await req.json();
  const plans: Record<string, string> = {
    starter: process.env.STRIPE_PRICE_STARTER || '',
    business: process.env.STRIPE_PRICE_BUSINESS || '',
    enterprise: process.env.STRIPE_PRICE_ENTERPRISE || '',
  };
  const priceId = plans[planId];
  if (!priceId) return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });

  const stripe = new Stripe(stripeKey, { apiVersion: '2025-02-24.acacia' as any });
  const checkout = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: session.user.email,
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
    metadata: { userId: session.user.id, planId },
  });
  return NextResponse.json({ url: checkout.url });
}
