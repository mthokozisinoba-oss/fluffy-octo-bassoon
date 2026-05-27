"use client";

import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MousePointer2, 
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Unique Visitors", value: "12,453", change: "+14.2%", positive: true, icon: Users },
  { label: "Page Views", value: "48,291", change: "+8.1%", positive: true, icon: MousePointer2 },
  { label: "Avg. Session", value: "4m 32s", change: "-2.4%", positive: false, icon: Clock },
  { label: "Bounce Rate", value: "32.4%", change: "+5.1%", positive: true, icon: TrendingUp },
];

export default function AnalyticsPage() {
  return (
    <div className="flex bg-[#050505] min-h-screen text-white">
      <DashboardSidebar />
      
      <main className="flex-grow ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-gray-400">Track your website performance and visitor behavior.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="text-white border-white/10 hover:bg-white/5 gap-2">
              <Filter className="w-4 h-4" /> Last 30 Days
            </Button>
            <Button variant="outline" className="text-white border-white/10 hover:bg-white/5 gap-2">
              <Download className="w-4 h-4" /> Export Report
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <Card key={i} className="bg-white/5 border-white/10 text-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-blue-600/10">
                    <stat.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-medium ${stat.positive ? "text-green-500" : "text-red-500"}`}>
                    {stat.change}
                    {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 bg-white/5 border-white/10 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Visitor Traffic</CardTitle>
              <div className="flex gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                  <span className="text-xs text-gray-400">Direct</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-600" />
                  <span className="text-xs text-gray-400">Social</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-end gap-2 pb-2">
                {[40, 60, 45, 90, 75, 55, 85, 40, 60, 45, 90, 75, 55, 85, 40, 60, 45, 90].map((h, i) => (
                  <div key={i} className="flex-grow flex flex-col gap-1">
                    <div className="bg-blue-600/40 rounded-t-sm w-full transition-all hover:bg-blue-600" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-[10px] text-gray-500 uppercase tracking-widest px-2">
                <span>May 01</span>
                <span>May 08</span>
                <span>May 15</span>
                <span>May 22</span>
                <span>May 30</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { path: "/", views: "12,453", bounce: "24%" },
                  { path: "/pricing", views: "8,291", bounce: "18%" },
                  { path: "/about", views: "4,102", bounce: "42%" },
                  { path: "/blog/ai-future", views: "2,845", bounce: "12%" },
                  { path: "/contact", views: "1,204", bounce: "8%" },
                ].map((page, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{page.path}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest">{page.bounce} bounce rate</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">{page.views}</p>
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
