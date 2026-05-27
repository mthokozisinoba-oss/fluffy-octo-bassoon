import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Services } from "@/components/landing/Services";
import { Showcase } from "@/components/landing/Showcase";
import { Pricing } from "@/components/landing/Pricing";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">
      <Navbar />
      
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <Services />
      <Showcase />

      {/* Testimonials */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Trusted by Innovative Teams
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              See how businesses are scaling their web presence with our AI platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "Founder, Bloom Digital",
                content: "Rich Solutions AI literally replaced my dev team and agency. The results are better and faster.",
                avatar: "SJ"
              },
              {
                name: "Michael Chen",
                role: "Marketing Director, TechFlow",
                content: "The SEO agent alone paid for the entire platform within two months. Highly recommended.",
                avatar: "MC"
              },
              {
                name: "Alex Rivera",
                role: "CTO, NextGen SaaS",
                content: "The dashboard and AI integration are seamless. It's the future of web management.",
                avatar: "AR"
              }
            ].map((testimonial) => (
              <Card key={testimonial.name} className="bg-white/5 border-white/10 text-white p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
                <div className="flex gap-1 mt-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-blue-600 p-12 text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to build the future?
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Join 2,500+ businesses who have automated their web presence with Rich Solutions AI.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
                  Get Started Now
                </button>
                <button className="bg-blue-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-800 transition-colors">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
