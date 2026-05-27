export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  email: string;
  role: 'user' | 'admin';
  billing_address: any;
  payment_method: any;
  created_at: string;
  updated_at: string;
}

export interface Website {
  id: string;
  user_id: string;
  name: string;
  domain: string | null;
  subdomain: string | null;
  status: 'draft' | 'published' | 'archived';
  config: any;
  seo_settings: any;
  created_at: string;
  updated_at: string;
}

export interface WebsiteAsset {
  id: string;
  website_id: string;
  url: string;
  type: string;
  name: string | null;
  size: number | null;
  metadata: any;
  created_at: string;
}

export interface AIAgent {
  id: string;
  website_id: string;
  type: 'seo' | 'content' | 'support' | 'design' | 'marketing' | 'analytics';
  name: string;
  status: 'active' | 'inactive' | 'running';
  config: any;
  last_run: string | null;
  created_at: string;
}

export interface AgentActivity {
  id: string;
  agent_id: string;
  website_id: string;
  action: string;
  status: 'success' | 'failed' | 'in-progress';
  details: any;
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  stripe_subscription_id: string;
  plan_id: 'starter' | 'business' | 'enterprise';
  status: string;
  current_period_start: string;
  current_period_end: string;
  cancel_at_period_end: boolean;
  created_at: string;
  updated_at: string;
}

export interface Invoice {
  id: string;
  user_id: string;
  stripe_invoice_id: string;
  amount_paid: number;
  currency: string;
  status: string;
  pdf_url: string | null;
  created_at: string;
}

export interface AnalyticsEvent {
  id: string;
  website_id: string;
  event_type: string;
  path: string | null;
  referrer: string | null;
  user_agent: string | null;
  metadata: any;
  created_at: string;
}

export interface Message {
  id: string;
  website_id: string;
  sender_name: string | null;
  sender_email: string;
  subject: string | null;
  body: string;
  status: 'unread' | 'read' | 'archived';
  metadata: any;
  created_at: string;
}
