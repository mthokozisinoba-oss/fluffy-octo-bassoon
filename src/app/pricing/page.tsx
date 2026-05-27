import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/landing/Pricing";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="pt-20">
        <Pricing />
      </div>
      
      {/* FAQ Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            {[
              { q: "How does the AI website builder work?", a: "Our AI analyzes your business type, brand keywords, and industry trends to generate a custom-coded Next.js website optimized for speed and conversion." },
              { q: "Can I use my own domain?", a: "Yes, all plans include custom domain connection. We also provide free subdomains if you're just starting out." },
              { q: "What kind of support do you offer?", a: "Every site comes with 24/7 AI support bots. Business and Enterprise plans also include priority human support via chat and email." },
              { q: "Can I cancel my subscription at any time?", a: "Absolutely. We offer a month-to-month subscription model with no long-term contracts. You can cancel at any time from your dashboard." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
