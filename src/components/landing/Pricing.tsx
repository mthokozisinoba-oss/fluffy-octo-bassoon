"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for freelancers and personal brands.",
    features: [
      "AI-Generated Website (3 pages)",
      "Basic SEO Optimization",
      "Standard AI Content Writer",
      "Managed Hosting",
      "Email Support"
    ],
    cta: "Start for Free",
    popular: false
  },
  {
    name: "Business",
    price: "$149",
    description: "Advanced tools for growing businesses.",
    features: [
      "Full AI-Generated Site (10+ pages)",
      "Advanced SEO Automation",
      "AI Chatbot Integration",
      "Lead Generation Tools",
      "24/7 AI Site Monitoring",
      "Priority Support"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Scale your agency with unlimited potential.",
    features: [
      "Custom AI Integrations",
      "White-label Solution",
      "Dedicated AI Account Manager",
      "Advanced Analytics Dashboard",
      "Full API Access",
      "Custom Branding"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the plan that fits your business needs. All plans include managed hosting 
            and basic AI support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border ${
                plan.popular 
                  ? "bg-blue-600/5 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]" 
                  : "bg-white/5 border-white/10"
              } flex flex-col relative`}
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
                  {plan.price !== "Custom" && <span className="text-gray-400 text-sm">/month</span>}
                </div>
                <p className="text-gray-400 text-sm mt-4">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild
                className={`w-full ${
                  plan.popular 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                <Link href={plan.name === "Enterprise" ? "/contact" : "/onboarding"}>
                  {plan.cta}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
