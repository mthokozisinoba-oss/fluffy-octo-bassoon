"use client";

import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  ExternalLink, 
  Clock, 
  Shield, 
  Zap,
  BarChart,
  RefreshCw,
  Plus
} from "lucide-react";
import { motion } from "framer-motion";

export default function MyWebsitePage() {
  return (
    <div className="flex bg-[#050505] min-h-screen text-white">
      <DashboardSidebar />
      
      <main className="flex-grow ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold">My Website</h1>
            <p className="text-gray-400">Manage and monitor your live web presence.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="text-white border-white/10 hover:bg-white/5 gap-2">
              <RefreshCw className="w-4 h-4" /> Trigger AI Sync
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
              <ExternalLink className="w-4 h-4" /> View Live Site
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <Card className="lg:col-span-2 bg-white/5 border-white/10 text-white overflow-hidden">
            <div className="aspect-video bg-gray-900 relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Button variant="outline" className="text-white border-white/20">Edit Components</Button>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-bold text-4xl uppercase tracking-widest pointer-events-none">
                Live Preview
              </div>
            </div>
            <CardHeader className="border-t border-white/5">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>RichSolutions-Marketplace.com</CardTitle>
                  <CardDescription>Published to Production via Vercel Edge</CardDescription>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="space-y-6">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Site Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-4">85% Complete</div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-blue-600"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  SEO Agent is currently generating meta descriptions for 12 pages.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Site Vitals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span>Performance</span>
                  </div>
                  <span className="text-green-500 font-bold">98/100</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <span>Security</span>
                  </div>
                  <span className="text-green-500 font-bold">Optimal</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>Uptime</span>
                  </div>
                  <span className="text-gray-300">99.99%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader>
            <CardTitle>Recent Website Changes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { type: "Design", msg: "Updated global color palette to 'Midnight Blue' and 'Electric Azure'.", time: "2 hours ago" },
                { type: "SEO", msg: "Optimized H1 tags and alt text for all product images.", time: "5 hours ago" },
                { type: "Content", msg: "Published new blog post: 'The Future of AI in E-commerce'.", time: "Yesterday" },
                { type: "System", msg: "Automatically scaled hosting resources to handle traffic spike.", time: "2 days ago" },
              ].map((update, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{update.type}</span>
                      <span className="text-xs text-gray-500">{update.time}</span>
                    </div>
                    <p className="text-sm text-gray-300">{update.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
