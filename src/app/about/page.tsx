import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Users, Target, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Our Mission</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are building the world's first fully autonomous AI web agency, 
              empowering everyone to have a world-class digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Precision</h3>
              <p className="text-gray-400">
                Our AI agents are trained on millions of high-performing websites to deliver 
                exact results every time.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Accessibility</h3>
              <p className="text-gray-400">
                We believe premium web development should be accessible to everyone, 
                regardless of technical expertise.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Speed</h3>
              <p className="text-gray-400">
                What used to take weeks now takes minutes. Our AI works around the clock 
                to keep you ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
