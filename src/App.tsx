import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Terminal, Fingerprint, Lock, Ghost, Cpu, BotMessageSquare, Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';
import Hero from './components/Hero';
import Vault from './components/Vault';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Command_Center' },
    { id: 'vault', label: 'The_Vault' },
    { id: 'contact', label: 'Encryption_Point' },
  ];

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-deep-space flex flex-col items-center justify-center z-[100]">
        <div className="relative w-24 h-24">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-t-2 border-cyber-lime rounded-full glow-lime"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-cyber-lime animate-pulse" />
          </div>
        </div>
        <div className="mt-8 font-mono text-cyber-lime text-xs tracking-[0.5em] uppercase animate-pulse">
          Initializing_Secure_Session...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-space text-slate-300 selection:bg-cyber-lime/30 selection:text-cyber-lime">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-cyber-lime/10 bg-deep-space/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-10 h-10 cyber-border bg-cyber-lime/10 flex items-center justify-center glow-lime">
                <ShieldCheck className="w-6 h-6 text-cyber-lime" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white uppercase font-mono">
                ALI <span className="text-cyber-lime">OMAR</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-xs font-mono uppercase tracking-widest transition-all hover:text-cyber-lime relative py-2 ${
                    currentPage === item.id ? 'text-cyber-lime' : 'text-slate-400'
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-lime glow-lime"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-slate-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-cyber-lime/10 bg-deep-space/95 backdrop-blur-lg overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left text-sm font-mono uppercase tracking-widest py-3 px-4 border-l-2 transition-all ${
                      currentPage === item.id 
                        ? 'text-cyber-lime border-cyber-lime bg-cyber-lime/5' 
                        : 'text-slate-400 border-transparent hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {currentPage === 'home' && <Hero />}
            {currentPage === 'vault' && <Vault />}
            {currentPage === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-cyber-lime/10 bg-black/40 py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyber-lime" />
              <span className="text-lg font-bold text-white uppercase font-mono tracking-tighter">ALI OMAR</span>
            </div>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              © 2026 Ali Omar - Secure Connection Established.
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#" className="text-slate-500 hover:text-cyber-lime transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-cyber-blue transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-warning-red transition-colors"><Mail className="w-5 h-5" /></a>
          </div>

          <div className="text-center md:text-right">
            <button className="text-[10px] font-mono text-cyber-lime border border-cyber-lime/30 px-4 py-2 hover:bg-cyber-lime/10 transition-all uppercase tracking-widest">
              [Download_PGP_Key]
            </button>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />

      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyber-lime/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyber-blue/5 to-transparent" />
      </div>
    </div>
  );
}
