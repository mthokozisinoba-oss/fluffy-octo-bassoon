"use client";

import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Search, 
  PenTool, 
  MessageSquare, 
  BarChart3, 
  Palette,
  Power,
  Settings2,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";

const agents = [
  {
    name: "Design Agent",
    role: "Visual & UI Specialist",
    description: "Handles website layouts, brand colors, and visual assets.",
    status: "Active",
    icon: Palette,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    name: "SEO Agent",
    role: "Search Optimization",
    description: "Monitors keywords, meta tags, and search engine rankings.",
    status: "Active",
    icon: Search,
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    name: "Content Agent",
    role: "Copywriting & Blogs",
    description: "Generates blog posts, product descriptions, and ad copy.",
    status: "Idle",
    icon: PenTool,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    name: "Support Agent",
    role: "Customer Service",
    description: "Handles 24/7 customer inquiries and lead qualification.",
    status: "Active",
    icon: MessageSquare,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  },
  {
    name: "Marketing Agent",
    role: "Social & Ad Strategy",
    description: "Automates social media posts and ad campaign optimization.",
    status: "Offline",
    icon: BarChart3,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  }
];

export default function AgentsPage() {
  return (
    <div className="flex bg-[#050505] min-h-screen">
      <DashboardSidebar />
      
      <main className="flex-grow ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white">AI Agents</h1>
            <p className="text-gray-400">Manage and monitor your specialized AI workforce.</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Deploy New Agent
          </Button>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 text-white h-full hover:bg-white/[0.07] transition-colors group">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-xl ${agent.bg} flex items-center justify-center`}>
                      <agent.icon className={`w-6 h-6 ${agent.color}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        agent.status === "Active" ? "bg-green-500" : 
                        agent.status === "Idle" ? "bg-yellow-500" : "bg-gray-500"
                      }`} />
                      <span className="text-xs font-medium text-gray-400">{agent.status}</span>
                    </div>
                  </div>
                  <CardTitle>{agent.name}</CardTitle>
                  <CardDescription className="text-blue-400/80 font-medium">
                    {agent.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {agent.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                      <span className="text-gray-500">Uptime</span>
                      <span className="text-gray-300">99.9%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                      <span className="text-gray-500">Tasks Completed</span>
                      <span className="text-gray-300">1,240</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex-grow text-white border-white/10 hover:bg-white/5 gap-2">
                      <Settings2 className="w-4 h-4" /> Configure
                    </Button>
                    <Button variant="outline" size="icon" className="text-white border-white/10 hover:bg-white/5 group-hover:text-red-400 transition-colors">
                      <Power className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <Card className="mt-10 bg-white/5 border-white/10 text-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <CardTitle>Recent Activity Log</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "10:45 AM", agent: "SEO Agent", msg: "Indexed 5 new blog posts and updated sitemap." },
                { time: "09:30 AM", agent: "Support Agent", msg: "Handled 12 customer inquiries. Average response time: 2s." },
                { time: "08:15 AM", agent: "Content Agent", msg: "Drafted social media posts for the next 7 days." },
              ].map((log, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <span className="text-xs text-gray-500 w-20">{log.time}</span>
                  <span className="text-xs font-bold text-blue-400 w-32">{log.agent}</span>
                  <p className="text-xs text-gray-300">{log.msg}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
