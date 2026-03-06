import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BotMessageSquare, X, Send, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
}

const INITIAL_MESSAGE: Message = {
  id: '1',
  text: "Greetings, I'm the AliOmar_Bot. How can I assist you?",
  sender: 'bot',
};

const OPTIONS = [
  { label: 'View Skills', value: 'skills' },
  { label: 'Request Quote', value: 'quote' },
  { label: 'Contact Ali Omar', value: 'contact' },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleOptionClick = (option: typeof OPTIONS[0]) => {
    const userMsg: Message = { id: Date.now().toString(), text: option.label, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "";
      switch (option.value) {
        case 'skills':
          botResponse = "Ali specializes in Offensive Security (Penetration Testing, Exploitation) and Defensive Security (Encryption, SIEM). Check the 'Vault' for details.";
          break;
        case 'quote':
          botResponse = "For project inquiries, please use the 'Encryption Point' contact form. Ali typically responds within 24 hours.";
          break;
        case 'contact':
          botResponse = "You can reach Ali via LinkedIn, GitHub, or the secure messaging protocol on this site.";
          break;
        default:
          botResponse = "I'm not sure how to help with that. Please try another option.";
      }
      
      const botMsg: Message = { id: (Date.now() + 1).toString(), text: botResponse, sender: 'bot' };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 sm:w-96 cyber-border bg-deep-space/95 backdrop-blur-md overflow-hidden flex flex-col h-[450px] shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-cyber-lime/20 flex items-center justify-between bg-cyber-lime/5">
              <div className="flex items-center gap-2">
                <BotMessageSquare className="w-5 h-5 text-cyber-lime" />
                <span className="text-xs font-mono font-bold text-cyber-lime tracking-widest uppercase">AliOmar_Bot v1.0</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-cyber-lime/20">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 text-xs font-mono ${
                    msg.sender === 'user' 
                      ? 'bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue' 
                      : 'bg-cyber-lime/10 border border-cyber-lime/30 text-cyber-lime'
                  } rounded-sm`}>
                    <div className="flex items-center gap-1 mb-1 opacity-50">
                      {msg.sender === 'user' ? <User className="w-3 h-3" /> : <BotMessageSquare className="w-3 h-3" />}
                      <span className="uppercase text-[10px]">{msg.sender}</span>
                    </div>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-cyber-lime/10 border border-cyber-lime/30 text-cyber-lime p-3 rounded-sm">
                    <span className="animate-pulse">...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Options */}
            <div className="p-4 border-t border-cyber-lime/20 bg-black/20">
              <div className="flex flex-wrap gap-2">
                {OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleOptionClick(opt)}
                    className="text-[10px] font-mono px-2 py-1 border border-cyber-lime/30 text-cyber-lime hover:bg-cyber-lime/10 transition-colors uppercase tracking-tighter"
                  >
                    [{opt.label}]
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-cyber-lime text-deep-space flex items-center justify-center shadow-[0_0_20px_rgba(50,255,126,0.5)] hover:shadow-[0_0_30px_rgba(50,255,126,0.7)] transition-shadow"
      >
        {isOpen ? <X className="w-6 h-6" /> : <BotMessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
