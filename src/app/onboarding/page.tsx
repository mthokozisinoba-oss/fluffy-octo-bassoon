"use client";

import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Check, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    goals: ""
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <div className="absolute top-10 left-10">
        <Link href="/" className="flex items-center gap-2">
          <Rocket className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold tracking-tight text-white">
            Rich <span className="text-blue-500">Solutions AI</span>
          </span>
        </Link>
      </div>

      <div className="max-w-xl w-full">
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`w-1/3 h-1 rounded-full mx-1 transition-colors ${
                i <= step ? "bg-blue-600" : "bg-white/10"
              }`} 
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h1 className="text-3xl font-bold text-white mb-2">Let's get started</h1>
              <p className="text-gray-400 mb-8">What's the name of your business?</p>
              <Input 
                className="bg-white/5 border-white/10 text-white h-14 text-lg mb-8" 
                placeholder="e.g. Acme Corp"
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              />
              <Button 
                onClick={nextStep} 
                disabled={!formData.businessName}
                className="w-full bg-blue-600 h-14 text-lg"
              >
                Next Step
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <button onClick={prevStep} className="flex items-center gap-2 text-gray-500 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <h1 className="text-3xl font-bold text-white mb-2">Business Type</h1>
              <p className="text-gray-400 mb-8">Select the category that best fits your business.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["SaaS", "E-commerce", "Agency", "Professional Service", "Blog", "Other"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFormData({...formData, businessType: type})}
                    className={`p-4 rounded-xl border transition-all text-left ${
                      formData.businessType === type 
                        ? "bg-blue-600/10 border-blue-600 text-blue-400" 
                        : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <Button 
                onClick={nextStep} 
                disabled={!formData.businessType}
                className="w-full bg-blue-600 h-14 text-lg"
              >
                Next Step
              </Button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">You're all set!</h1>
              <p className="text-gray-400 mb-8">
                Our AI agents are now ready to start building <strong>{formData.businessName}</strong>.
              </p>
              <Link href="/dashboard" className={cn(buttonVariants({ variant: "default" }), "w-full bg-blue-600 h-14 text-lg")}>
                Enter Dashboard <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
