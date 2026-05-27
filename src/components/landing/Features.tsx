"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Search, 
  Shield, 
  BarChart, 
  MessageSquare, 
  Layout, 
  Palette,
  Cloud
} from "lucide-react";

const features = [
  {
    title: "AI Website Design",
    description: "Intelligent layout generation based on your brand identity and target audience.",
    icon: Palette,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Automated SEO",
    description: "Continuous optimization of meta tags, content, and structure for search engines.",
    icon: Search,
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    title: "24/7 AI Support",
    description: "Built-in AI chatbots that understand your business and handle customer queries.",
    icon: MessageSquare,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Performance Monitoring",
    description: "Real-time analytics and automatic performance tuning for lightning speed.",
    icon: BarChart,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    title: "Secure Hosting",
    description: "Enterprise-grade security and 99.9% uptime with edge network delivery.",
    icon: Shield,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    title: "Smart CMS",
    description: "Manage your content with natural language. Just tell the AI what to change.",
    icon: Layout,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Powerful AI Agents at Your Service
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our specialized AI agents work together to ensure your website is always performant, 
            optimized, and growing your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
