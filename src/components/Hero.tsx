import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Terminal, Fingerprint, Lock, Ghost, Cpu } from 'lucide-react';

const TYPING_TEXTS = [
  "Defending the Architecture of Tomorrow.",
  "Securing Digital Frontiers.",
  "Uncovering Vulnerabilities.",
  "Architecting Secure Systems."
];

const METRICS = [
  { label: 'Bugs Found', value: '100+', icon: Ghost, color: 'text-cyber-lime', border: 'border-cyber-lime/30' },
  { label: 'Active Research', value: '5', icon: Cpu, color: 'text-cyber-blue', border: 'border-cyber-blue/30' },
  { label: 'Security Clearance', value: 'Level 10', icon: ShieldCheck, color: 'text-cyber-lime', border: 'border-cyber-lime/30' },
  { label: 'System Status', value: 'Secure', icon: Lock, color: 'text-cyber-blue', border: 'border-cyber-blue/30' },
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = TYPING_TEXTS[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
      } else {
        setDisplayText(currentFullText.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="relative min-h-screen pt-24 pb-12 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="scanline" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Photo Container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
            {/* Hexagonal / Cyber Border */}
            <div className="absolute inset-0 bg-cyber-lime/10 cyber-border glow-lime transition-all duration-500 group-hover:bg-cyber-lime/20" />
            
            {/* Image Container */}
            <div className="absolute inset-2 overflow-hidden cyber-border border-none">
              <img 
                src="https://picsum.photos/seed/aliomar/800/800" 
                alt="Ali Omar" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              {/* Overlay Scanlines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyber-lime glow-lime" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-cyber-lime glow-lime" />
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 flex flex-col gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <Fingerprint className="w-6 h-6 text-cyber-lime" />
              <Terminal className="w-6 h-6 text-cyber-blue" />
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-cyber-lime text-xs font-mono tracking-[0.5em] uppercase opacity-70">System Identity</h2>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white">
              SYSTEM: <span className="text-cyber-lime glow-lime">ALI OMAR</span>
            </h1>
          </div>

          <div className="h-12 flex items-center justify-center lg:justify-start">
            <p className="text-xl sm:text-2xl font-mono text-cyber-blue">
              {displayText}
              <span className="inline-block w-2 h-6 bg-cyber-blue ml-1 animate-pulse" />
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <button className="px-8 py-3 bg-cyber-lime text-deep-space font-mono font-bold uppercase tracking-widest cyber-border border-none glow-lime glitch-hover transition-all">
              Initialize Connection
            </button>
            <button className="px-8 py-3 border border-cyber-blue/50 text-cyber-blue font-mono font-bold uppercase tracking-widest hover:bg-cyber-blue/10 transition-all">
              Access Archives
            </button>
          </div>
        </motion.div>
      </div>

      {/* Metrics Section */}
      <div className="max-w-6xl w-full mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {METRICS.map((metric, idx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
            className={`p-6 cyber-border ${metric.border} bg-black/40 backdrop-blur-sm group hover:bg-black/60 transition-all`}
          >
            <div className="flex items-center gap-3 mb-4">
              <metric.icon className={`w-5 h-5 ${metric.color}`} />
              <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">{metric.label}</span>
            </div>
            <div className={`text-2xl font-bold font-mono ${metric.color} tracking-tighter`}>
              [{metric.value}]
            </div>
            <div className="mt-2 h-1 w-full bg-slate-800 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 1 + idx * 0.2 }}
                className={`h-full ${metric.color.replace('text-', 'bg-')}`} 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
