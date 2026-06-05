"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

export default function BookConsultationPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    date: "",
    time: "",
  });
  const [booked, setBooked] = useState(false);

  const updateForm = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking
    await new Promise(r => setTimeout(r, 1000));
    setBooked(true);

    // WhatsApp message with booking details
    const message = `Hi! I'd like a consultation.%0A%0A
Name: ${form.name}%0A
Email: ${form.email}%0A
Phone: ${form.phone}%0A
Business: ${form.business}%0A
Date: ${form.date}%0A
Time: ${form.time}%0A%0A
AI Website - $49/mo`;

    window.open(`https://wa.me/27${form.phone}?text=${message}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {booked ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-12"
            >
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Consultation Booked! ✅</h1>
              <p className="text-gray-400 mb-2">
                We'll contact you on <strong className="text-white">WhatsApp</strong> at {form.phone}
              </p>
              <p className="text-gray-500 text-sm mb-8">
                {form.date} at {form.time}
              </p>
              <a
                href={`https://wa.me/27${form.phone}?text=Hi! I'm following up on your AI website consultation request.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-colors"
              >
                Open WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Free 15-Min Consultation</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                  Book Your Free<br />
                  <span className="text-gradient">AI Website Consultation</span>
                </h1>
                <p className="text-gray-400 text-lg">
                  Tell us about your business and we'll show you what AI can do for you.
                </p>
              </div>

              <form onSubmit={handleBook} className="space-y-6">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4"
                  >
                    <h2 className="text-xl font-bold mb-4">Your Details</h2>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                      <Input
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => updateForm("name", e.target.value)}
                        className="bg-white/5 border-white/10 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="john@business.com"
                        value={form.email}
                        onChange={(e) => updateForm("email", e.target.value)}
                        className="bg-white/5 border-white/10 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone (WhatsApp)</label>
                      <Input
                        placeholder="76 123 4567"
                        value={form.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                        className="bg-white/5 border-white/10 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Business Name</label>
                      <Input
                        placeholder="My Business"
                        value={form.business}
                        onChange={(e) => updateForm("business", e.target.value)}
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>
                    <Button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 mt-4"
                    >
                      Choose Time <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4"
                  >
                    <h2 className="text-xl font-bold mb-4">Pick a Date & Time</h2>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                      <Input
                        type="date"
                        value={form.date}
                        onChange={(e) => updateForm("date", e.target.value)}
                        className="bg-white/5 border-white/10 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Time</label>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => updateForm("time", slot)}
                            className={`p-3 rounded-xl text-sm font-medium transition-all ${
                              form.time === slot
                                ? "bg-blue-600 text-white"
                                : "bg-white/5 text-gray-300 hover:bg-white/10"
                            }`}
                          >
                            <Clock className="w-3 h-3 inline mr-1" />
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="flex-1 text-white border-white/10"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={!form.date || !form.time}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6"
                      >
                        Book Free Consultation
                      </Button>
                    </div>
                  </motion.div>
                )}
              </form>

              <p className="text-center text-gray-500 text-sm mt-6">
                We'll confirm your booking via WhatsApp. No spam, guaranteed.
              </p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}