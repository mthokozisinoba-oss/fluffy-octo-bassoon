"use client";

import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Paperclip,
  Smile
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello John! I'm your Rich Solutions AI assistant. How can I help you with your website today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    
    // Fake bot response
    setTimeout(() => {
      setMessages([...newMessages, { role: "assistant", content: "I'm analyzing your request. I've scheduled the Design Agent to review your layout preferences." }]);
    }, 1000);
  };

  return (
    <div className="flex bg-[#050505] min-h-screen text-white">
      <DashboardSidebar />
      
      <main className="flex-grow ml-64 p-8 flex flex-col h-screen">
        <header className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              AI Assistant <Sparkles className="w-6 h-6 text-blue-500" />
            </h1>
            <p className="text-gray-400 text-sm">Real-time collaboration with your agent fleet.</p>
          </div>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-800 flex items-center justify-center text-[10px] font-bold text-blue-400">
                AI
              </div>
            ))}
          </div>
        </header>

        <Card className="flex-grow bg-white/5 border-white/10 flex flex-col overflow-hidden mb-4">
          <div className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-3 max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                      msg.role === "assistant" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
                    }`}>
                      {msg.role === "assistant" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "assistant" 
                        ? "bg-white/5 border border-white/5 text-gray-200" 
                        : "bg-blue-600 text-white shadow-lg"
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="p-4 bg-black/20 border-t border-white/5">
            <div className="flex gap-4 items-center">
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/5">
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/5">
                  <Smile className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex-grow relative">
                <Input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask your AI agents to build or change something..." 
                  className="bg-white/5 border-white/10 h-12 pr-12 focus-visible:ring-blue-600"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-400 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
            <p className="text-[10px] text-center text-gray-600 mt-3 uppercase tracking-widest">
              AI responses can take 1-3 seconds to process complex requests.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
