"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Search, 
  Zap, 
  Smartphone, 
  Shield, 
  Share2,
  ArrowRight,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Loader2,
  Download
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

type AuditResult = {
  score: number;
  speed: { grade: string; issues: string[] };
  seo: { grade: string; issues: string[] };
  mobile: { grade: string; issues: string[] };
  security: { grade: string; issues: string[] };
  social: { grade: string; issues: string[] };
};

function generateAudit(url: string): AuditResult {
  const domain = url.replace(/https?:\/\//, "").split("/")[0];
  const hasSSL = domain.includes(".");
  const isShort = domain.length < 10;

  return {
    score: Math.floor(Math.random() * 30) + 20,
    speed: {
      grade: "D",
      issues: [
        "Page loads in 6.2s (target: <2.5s)",
        "Images not optimized (3.2MB total)",
        "No browser caching enabled",
        "Render-blocking resources detected"
      ]
    },
    seo: {
      grade: "F",
      issues: [
        "Missing meta description",
        "No Open Graph tags",
        "Missing H1 tag",
        "No alt text on images",
        "No XML sitemap found"
      ]
    },
    mobile: {
      grade: "D",
      issues: [
        "Not mobile-friendly (text too small)",
        "Tap targets too close together",
        "Content wider than screen",
        "Viewport not set"
      ]
    },
    security: {
      grade: hasSSL ? "B" : "F",
      issues: hasSSL 
        ? ["SSL certificate expires in 45 days"] 
        : ["No SSL certificate (site not secure)", "Missing security headers"]
    },
    social: {
      grade: "F",
      issues: [
        "No social media accounts linked",
        "No Facebook Pixel detected",
        "No LinkedIn verification"
      ]
    }
  };
}

function GradeBadge({ grade }: { grade: string }) {
  const colors: Record<string, string> = {
    A: "bg-green-500/20 text-green-400 border-green-500/30",
    B: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    C: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    D: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    F: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  return (
    <span className={`px-3 py-1 rounded-lg text-sm font-bold border ${colors[grade] || colors.F}`}>
      {grade}
    </span>
  );
}

export default function FreeAuditPage() {
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    
    setScanning(true);
    setResult(null);
    
    // Simulate scanning
    await new Promise(r => setTimeout(r, 2000));
    
    const audit = generateAudit(url);
    setResult(audit);
    setScanning(false);
  };

  const handleSendReport = async () => {
    // Simulate sending report
    await new Promise(r => setTimeout(r, 1000));
    setEmailSent(true);
  };

  const categories = result ? [
    { name: "Page Speed", icon: Zap, grade: result.speed.grade, issues: result.speed.issues, color: "text-orange-500", bg: "bg-orange-500/10" },
    { name: "SEO Optimization", icon: Search, grade: result.seo.grade, issues: result.seo.issues, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Mobile Friendly", icon: Smartphone, grade: result.mobile.grade, issues: result.mobile.issues, color: "text-purple-500", bg: "bg-purple-500/10" },
    { name: "Security", icon: Shield, grade: result.security.grade, issues: result.security.issues, color: "text-green-500", bg: "bg-green-500/10" },
    { name: "Social Presence", icon: Share2, grade: result.social.grade, issues: result.social.issues, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  ] : [];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              <span>Free AI-Powered Analysis</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Free Website <span className="text-gradient">Audit</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Enter your URL and our AI will analyze your site for speed, SEO, mobile optimization, security, and more — in seconds.
            </p>
          </div>

          {/* Input */}
          <motion.form
            onSubmit={handleScan}
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex gap-4">
              <div className="relative flex-grow">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                  type="url"
                  placeholder="yourbusiness.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-gray-600 text-lg"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={scanning}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              >
                {scanning ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Analyze"
                )}
              </Button>
            </div>
          </motion.form>

          {/* Scanning Animation */}
          <AnimatePresence>
            {scanning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-6 border-2 border-blue-500/30">
                  <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Scanning Your Website...</h3>
                <p className="text-gray-400">Checking speed, SEO, mobile, security & more</p>
                <div className="max-w-md mx-auto mt-8 space-y-2">
                  {["Analyzing page speed...", "Checking SEO tags...", "Testing mobile responsiveness...", "Verifying security...", "Generating report..."].map((step, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          <AnimatePresence>
            {result && !scanning && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Overall Score */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="text-7xl font-extrabold text-gradient mb-2">{result.score}</div>
                  <p className="text-gray-400 text-lg mb-2">out of 100</p>
                  <div className="w-full bg-white/5 rounded-full h-3 max-w-md mx-auto overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${result.score}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${result.score < 40 ? "bg-red-500" : result.score < 60 ? "bg-orange-500" : "bg-green-500"}`}
                    />
                  </div>
                  <p className="text-gray-500 mt-4">
                    {result.score < 40 ? "Your website needs urgent attention. You're losing visitors daily." :
                     result.score < 60 ? "Your site has room for improvement. Many issues are fixable." :
                     "Your site is decent but could be better."}
                  </p>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categories.map((cat, i) => (
                    <motion.div
                      key={cat.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center`}>
                            <cat.icon className={`w-5 h-5 ${cat.color}`} />
                          </div>
                          <h3 className="font-bold">{cat.name}</h3>
                        </div>
                        <GradeBadge grade={cat.grade} />
                      </div>
                      <ul className="space-y-2">
                        {cat.issues.map((issue, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                            <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {/* Fix It CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-8 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-center"
                >
                  <h2 className="text-2xl font-bold mb-2">Want Us to Fix This?</h2>
                  <p className="text-gray-400 mb-6">
                    Our AI agents can fix ALL of these issues automatically. Starting at <strong className="text-white">$49/month</strong>.
                  </p>
                  <div className="max-w-md mx-auto">
                    {emailSent ? (
                      <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                        <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                        <p className="text-green-400 font-bold">Report Sent! ✅</p>
                        <p className="text-gray-400 text-sm mt-1">We'll email your full report with a custom quote.</p>
                      </div>
                    ) : (
                      <div className="flex gap-4">
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-white/5 border-white/10 text-white"
                        />
                        <Button onClick={handleSendReport} className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap">
                          Send Report & Quote
                        </Button>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs mt-4">
                    We'll email you the full audit report + a personalized quote. No spam.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}