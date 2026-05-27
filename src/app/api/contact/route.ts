import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const supabase = await createClient();
  
  const body = await req.json();
  const { websiteId, senderName, senderEmail, subject, body: messageBody } = body;

  const { error } = await supabase.from('messages').insert({
    website_id: websiteId,
    sender_name: senderName,
    sender_email: senderEmail,
    subject,
    body: messageBody,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
