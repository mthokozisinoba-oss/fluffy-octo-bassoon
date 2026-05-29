"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle, 
  ArrowRight,
  CreditCard,
  Loader2
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for freelancers and personal brands.",
    features: [
      "AI-Generated Website (3 pages)",
      "Basic SEO Optimization",
      "Standard AI Content Writer",
      "Managed Hosting",
      "Email Support",
    ],
    paypalLink: "https://www.paypal.me/MthokozisiNoba/49",
  },
  {
    id: "business",
    name: "Business",
    price: "$149",
    period: "/month",
    description: "Advanced tools for growing businesses.",
    features: [
      "Full AI-Generated Site (10+ pages)",
      "Advanced SEO Automation",
      "AI Chatbot Integration",
      "Lead Generation Tools",
      "24/7 AI Site Monitoring",
      "Priority Support",
    ],
    paypalLink: "https://www.paypal.me/MthokozisiNoba/149",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Scale your agency with unlimited potential.",
    features: [
      "Custom AI Integrations",
      "White-label Solution",
      "Dedicated AI Account Manager",
      "Advanced Analytics Dashboard",
      "Full API Access",
      "Custom Branding",
    ],
    paypalLink: "https://www.paypal.me/MthokozisiNoba",
  },
];

export default function PayPalPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleInvoiceRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending invoice request
    await new Promise(r => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            <Lock className="w-4 h-4" />
            <span>Secure Payments via PayPal</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Choose Your Plan & <br />
            <span className="text-gradient">Pay with PayPal</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Secure payment processing. Your information is protected with industry-standard encryption.
          </motion.p>
          
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>256-bit SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>PayPal Buyer Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-green-500" />
              <span>No account required</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`p-8 rounded-2xl border flex flex-col relative ${
                  plan.popular
                    ? "bg-blue-600/5 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-4">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.paypalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.076 21.337H2.476a.642.642 0 0 1-.619-.817L5.63 3.365a.775.775 0 0 1 .75-.592h5.228c3.522 0 5.992 2.106 5.992 5.172 0 3.523-2.704 5.624-5.992 5.624h-2.444l-1.012 6.292a.674.674 0 0 1-.647.545h-1.12l.71-4.069Z" opacity=".4"/>
                    <path d="M18.157 6.335c.442-.012.872-.02 1.292-.02 2.58 0 4.55.73 4.55 3.246 0 2.52-1.89 4.484-4.55 4.484h-.828l-.672 3.97h-2.516l1.97-11.622-1.576-.36"/>
                  </svg>
                  {plan.price === "Custom" ? "Contact Sales" : `Pay $${plan.price} with PayPal`}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Plan", desc: "Select the plan that fits your needs" },
              { step: "2", title: "Pay via PayPal", desc: "One-time payment via secure PayPal link" },
              { step: "3", title: "Get Onboarded", desc: "We'll set up your account within 24 hours" },
              { step: "4", title: "AI Builds Your Site", desc: "Our AI agents get to work immediately" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need a custom invoice? */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/5 border-white/10 text-white p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-2">Need a Custom Invoice?</h2>
              <p className="text-gray-400 mb-6">
                Prefer to pay via bank transfer or need a custom quote? Drop your email and we'll send you an invoice.
              </p>
              
              {sent ? (
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Request Sent! ✅</h3>
                  <p className="text-gray-400">
                    We'll send your custom invoice within 24 hours. Check your email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInvoiceRequest} className="flex gap-4">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow bg-white/5 border-white/10 text-white placeholder:text-gray-600"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      "Request Invoice"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="py-16 bg-white/5 border-y border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Set Up Your PayPal</h2>
          <div className="p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <h3 className="font-bold text-yellow-400 mb-2">⚡ Quick Setup Needed</h3>
            <p className="text-gray-300 text-sm">
              The PayPal buttons need your PayPal email to work. Go to 
              <code className="mx-1 px-2 py-0.5 bg-white/10 rounded text-yellow-300">src/app/paypal/page.tsx</code> 
              and replace <code className="mx-1 px-2 py-0.5 bg-white/10 rounded text-yellow-300">YOUR_USERNAME</code> 
              with your PayPal username from <strong className="text-white">paypal.me/YOUR_USERNAME</strong>.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", text: "Go to paypal.me and create your payment link" },
              { step: "2", text: "Copy your PayPal username (e.g., JohnDoe)" },
              { step: "3", text: "Update the paypalLink values in this page" },
              { step: "4", text: "Push to GitHub, Vercel auto-deploys" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
