"use client";

import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  TrendingUp, 
  MessageSquare, 
  Zap,
  MoreHorizontal,
  Plus
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { name: "Total Visitors", value: "12,453", trend: "+12.5%", icon: Globe, color: "text-blue-500" },
  { name: "Leads Generated", value: "482", trend: "+8.2%", icon: TrendingUp, color: "text-green-500" },
  { name: "AI Interations", value: "2,104", trend: "+24.1%", icon: MessageSquare, color: "text-purple-500" },
  { name: "Site Health", value: "99.8%", trend: "Optimal", icon: Zap, color: "text-orange-500" },
];

export default function DashboardPage() {
  return (
    <div className="flex bg-[#050505] min-h-screen">
      <DashboardSidebar />
      
      <main className="flex-grow ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
            <p className="text-gray-400">Welcome back, John. Here's what's happening today.</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <Plus className="w-4 h-4" />
            <span>Connect New Data</span>
          </button>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">
                    {stat.name}
                  </CardTitle>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-blue-400 mt-1">
                    {stat.trend} <span className="text-gray-500 ml-1">from last month</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 bg-white/5 border-white/10 text-white">
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[1, 2].map((project) => (
                  <div key={project} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">RichSolutions-Marketplace.com</h3>
                        <p className="text-xs text-gray-400">Last update: 2 hours ago by SEO Agent</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="hidden md:flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0a0a0a] bg-gray-800 flex items-center justify-center text-[8px] font-bold">
                            AI
                          </div>
                        ))}
                      </div>
                      <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <MoreHorizontal className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader>
              <CardTitle>AI Agent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { agent: "Content Writer", action: "Generated 5 blog posts", time: "12m ago" },
                  { agent: "SEO Specialist", action: "Optimized 12 product pages", time: "45m ago" },
                  { agent: "Support Bot", action: "Resolved customer inquiry", time: "1h ago" },
                  { agent: "Design Bot", action: "Updated homepage banner", time: "3h ago" },
                ].map((activity, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">{activity.agent}</p>
                      <p className="text-xs text-gray-400">{activity.action}</p>
                      <p className="text-[10px] text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
