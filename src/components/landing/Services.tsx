"use client";

import { motion } from "framer-motion";
import { 
  Layout, 
  Zap, 
  ShoppingCart, 
  Search, 
  Target, 
  Share2, 
  MessageSquare 
} from "lucide-react";

const services = [
  { title: "Website Design", icon: Layout, color: "text-blue-500" },
  { title: "AI Automation", icon: Zap, color: "text-yellow-500" },
  { title: "E-commerce Stores", icon: ShoppingCart, color: "text-green-500" },
  { title: "SEO Optimization", icon: Search, color: "text-purple-500" },
  { title: "Business Branding", icon: Target, color: "text-red-500" },
  { title: "Social Media Automation", icon: Share2, color: "text-cyan-500" },
  { title: "AI Chatbots", icon: MessageSquare, color: "text-pink-500" },
];

export const Services = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Comprehensive AI Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything your business needs to thrive in the digital age, powered by cutting-edge AI.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center group cursor-default"
            >
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-sm font-bold text-white leading-tight">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
