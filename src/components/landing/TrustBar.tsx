"use client";

import { motion } from "framer-motion";

export const TrustBar = () => {
  const logos = ["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5"];

  return (
    <section className="py-12 border-y border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm font-medium mb-8 uppercase tracking-widest">
          Trusted by 500+ Innovative Businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <div key={index} className="text-xl font-bold text-white tracking-tighter">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
