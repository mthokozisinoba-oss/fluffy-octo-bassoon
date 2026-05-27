"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Globe, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Rocket,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Website", href: "/dashboard/website", icon: Globe },
  { name: "AI Agents", href: "/dashboard/agents", icon: Users },
  { name: "Chat Support", href: "/dashboard/chat", icon: MessageSquare },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-[#0a0a0a] border-r border-white/10 flex flex-col fixed left-0 top-0 z-30">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <Rocket className="w-6 h-6 text-blue-500" />
          <span className="text-lg font-bold tracking-tight text-white">
            Rich <span className="text-blue-500">AI</span>
          </span>
        </Link>
      </div>
      
      <div className="px-4 mb-6">
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </button>
      </div>
      
      <nav className="flex-grow px-4 space-y-1">
        {menuItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all group",
                active 
                  ? "bg-blue-600/10 text-blue-400" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-colors",
                active ? "text-blue-400" : "text-gray-400 group-hover:text-white"
              )} />
              {item.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 mt-auto border-t border-white/10">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
            JD
          </div>
          <div className="flex-grow min-w-0">
            <p className="text-sm font-medium text-white truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
