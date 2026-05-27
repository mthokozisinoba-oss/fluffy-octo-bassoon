"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { title: "Lumina SaaS", category: "Software", image: "/placeholder.jpg" },
  { title: "Eco-Harvest", category: "E-commerce", image: "/placeholder.jpg" },
  { title: "Atlas Finance", category: "Fintech", image: "/placeholder.jpg" },
];

export const Showcase = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Showcase of Excellence
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Beautiful, high-converting websites designed and managed entirely by our AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900 border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-2xl uppercase tracking-widest opacity-20 group-hover:scale-110 transition-transform duration-700">
                {project.title}
              </div>
              
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
