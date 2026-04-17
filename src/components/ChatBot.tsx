import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GoogleGenAI } from "@google/genai";
import { cn } from "@/lib/utils";
import { ASSETS } from "@/constants/assets";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hello! I'm your SigmaNext assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: "You are a helpful assistant for SigmaNext.ai, a technology consultancy specializing in application management, data analytics, and cyber security. Be professional, concise, and helpful. If asked about contact info, use: Email: Contact@SigmaNext.ai, Phone: +1-469-918-2081, Address: 405 State Highway 121, Suite A250, Lewisville, Texas, USA, 75067.",
        },
      });

      const botResponse = response.text || "I'm sorry, I couldn't process that request.";
      setMessages(prev => [...prev, { role: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: "bot", text: "I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-sigma-blue p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={ASSETS.ICONS.CHATBOT.PRIMARY} 
                    alt="SigmaNext AI" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain scale-110 relative z-10"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.dataset.triedSecondary) {
                        img.dataset.triedSecondary = "true";
                        img.src = ASSETS.ICONS.CHATBOT.SECONDARY;
                      } else if (!img.dataset.triedExternal) {
                        img.dataset.triedExternal = "true";
                        img.src = ASSETS.ICONS.CHATBOT.FALLBACK;
                      } else {
                        img.style.display = 'none';
                        const fallback = img.parentElement?.querySelector('.header-fallback') as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="header-fallback absolute inset-0 hidden items-center justify-center bg-white/20 rounded-xl z-0">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">SigmaNext AI</h3>
                  <p className="text-[10px] text-white/70 uppercase tracking-widest">Always Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="h-[400px] overflow-y-auto p-6 space-y-4 bg-slate-50/50"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium ${
                    msg.role === "user" 
                      ? "bg-sigma-blue text-white rounded-tr-none" 
                      : "bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-sm"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm">
                    <Loader2 className="w-5 h-5 text-sigma-blue animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <Input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="rounded-xl h-12 bg-slate-50 border-slate-100 focus:bg-white transition-all"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-12 h-12 rounded-xl p-0 flex-shrink-0"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center relative group overflow-hidden transition-all duration-300",
          isOpen 
            ? "bg-sigma-blue text-white shadow-xl shadow-sigma-blue/30" 
            : "bg-transparent text-sigma-blue hover:bg-sigma-blue/5"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              className="relative w-full h-full p-1"
            >
              <img 
                src={ASSETS.ICONS.CHATBOT.PRIMARY} 
                alt="Chat Icon" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain scale-150 absolute inset-0 z-10"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (!img.dataset.triedSecondary) {
                    img.dataset.triedSecondary = "true";
                    img.src = ASSETS.ICONS.CHATBOT.SECONDARY;
                  } else if (!img.dataset.triedExternal) {
                    img.dataset.triedExternal = "true";
                    img.src = ASSETS.ICONS.CHATBOT.FALLBACK;
                  } else {
                    img.style.display = 'none';
                    // Show fallback icon
                    const fallback = img.parentElement?.querySelector('.chatbot-fallback') as HTMLElement;
                    if (fallback) {
                      fallback.style.opacity = '1';
                      fallback.style.display = 'flex';
                    }
                  }
                }}
              />
              <div 
                className="chatbot-fallback absolute inset-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity z-0"
                style={{ opacity: 0, display: 'none' }}
              >
                <div className="bg-sigma-blue rounded-full p-2">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
