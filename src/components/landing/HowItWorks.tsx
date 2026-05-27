"use client";

import { motion } from "framer-motion";
import { Search, Palette, Rocket } from "lucide-react";

const steps = [
  {
    title: "Define Your Vision",
    description: "Tell our AI about your business, goals, and style preferences through a simple conversation.",
    icon: Search,
    color: "bg-blue-500"
  },
  {
    title: "AI Generation",
    description: "Our agents build your custom site, write optimized copy, and design unique visual assets in minutes.",
    icon: Palette,
    color: "bg-purple-500"
  },
  {
    title: "Launch & Optimize",
    description: "Your site goes live on our edge network, while AI agents continuously optimize for SEO and performance.",
    icon: Rocket,
    color: "bg-green-500"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            A Simple 3-Step Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From concept to a high-performing website in record time.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
