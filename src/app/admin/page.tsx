"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Settings, 
  ShieldCheck, 
  AlertTriangle,
  Search,
  Filter,
  MoreVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Admin Sidebar */}
      <div className="flex">
        <div className="w-64 h-screen bg-[#0a0a0a] border-r border-white/10 fixed left-0 top-0 p-6">
          <div className="flex items-center gap-2 mb-10">
            <ShieldCheck className="w-8 h-8 text-red-500" />
            <span className="text-xl font-bold">Admin Panel</span>
          </div>
          
          <nav className="space-y-2">
            {[
              { name: "Users", icon: Users, active: true },
              { name: "System Status", icon: AlertTriangle, active: false },
              { name: "Global Settings", icon: Settings, active: false },
            ].map((item) => (
              <button
                key={item.name}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  item.active ? "bg-red-500/10 text-red-500" : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-grow ml-64 p-8">
          <header className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-bold">Client Management</h1>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <Input className="bg-white/5 border-white/10 pl-10 w-64" placeholder="Search clients..." />
              </div>
              <Button variant="outline" className="text-white border-white/10 hover:bg-white/5 gap-2">
                <Filter className="w-4 h-4" /> Filter
              </Button>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Active Clients", value: "1,284", color: "text-green-500" },
              { label: "Pending Builds", value: "42", color: "text-blue-500" },
              { label: "System Alerts", value: "3", color: "text-red-500" },
            ].map((stat) => (
              <Card key={stat.label} className="bg-white/5 border-white/10 text-white">
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader>
              <CardTitle>Recent Registrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-500 text-sm">
                      <th className="pb-4 font-medium">Client</th>
                      <th className="pb-4 font-medium">Plan</th>
                      <th className="pb-4 font-medium">Status</th>
                      <th className="pb-4 font-medium">Registered</th>
                      <th className="pb-4"></th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i} className="border-b border-white/5 group hover:bg-white/[0.02]">
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-800" />
                            <div>
                              <p className="font-medium">Client #{1000 + i}</p>
                              <p className="text-xs text-gray-500">client{i}@example.com</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">Business</td>
                        <td className="py-4">
                          <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase">Active</span>
                        </td>
                        <td className="py-4 text-gray-500">May 24, 2024</td>
                        <td className="py-4 text-right">
                          <button className="p-2 hover:bg-white/5 rounded-lg">
                            <MoreVertical className="w-4 h-4 text-gray-500" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
