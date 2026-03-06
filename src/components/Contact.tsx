import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Lock, ShieldCheck, Mail, Linkedin, Github, Download, Terminal } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 max-w-4xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-cyber-lime text-xs font-mono tracking-[0.5em] uppercase opacity-70">Secure Communications</h2>
        <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter">ENCRYPTION <span className="text-cyber-lime glow-lime">POINT</span></h1>
        <div className="w-24 h-1 bg-cyber-lime mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="cyber-border bg-black/40 p-8 space-y-8"
        >
          <div className="flex items-center gap-3 border-b border-cyber-lime/20 pb-4">
            <Terminal className="w-5 h-5 text-cyber-lime" />
            <span className="text-xs font-mono font-bold text-cyber-lime tracking-widest uppercase">Secure Messaging Protocol</span>
          </div>

          {isSuccess ? (
            <div className="h-64 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyber-lime/20 flex items-center justify-center border border-cyber-lime/40 glow-lime">
                <ShieldCheck className="w-8 h-8 text-cyber-lime" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">Message_Encrypted</h3>
              <p className="text-sm text-slate-400 font-mono">Transmission successful. Ali will decrypt your message shortly.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-xs text-cyber-lime font-mono uppercase underline hover:text-white transition-colors"
              >
                [Send_Another_Packet]
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-cyber-lime uppercase tracking-widest">[Enter_Identifier]</label>
                <input 
                  required
                  type="text" 
                  placeholder="NAME / ALIAS"
                  className="w-full bg-deep-space border border-cyber-lime/20 p-3 text-sm font-mono text-white focus:border-cyber-lime outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-cyber-lime uppercase tracking-widest">[Source_Address]</label>
                <input 
                  required
                  type="email" 
                  placeholder="EMAIL_ADDRESS"
                  className="w-full bg-deep-space border border-cyber-lime/20 p-3 text-sm font-mono text-white focus:border-cyber-lime outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-cyber-lime uppercase tracking-widest">[Input_Message]</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="TYPE_MESSAGE_HERE..."
                  className="w-full bg-deep-space border border-cyber-lime/20 p-3 text-sm font-mono text-white focus:border-cyber-lime outline-none transition-all resize-none"
                />
              </div>
              <button 
                disabled={isSubmitting}
                className="w-full py-4 bg-cyber-lime text-deep-space font-mono font-bold uppercase tracking-widest cyber-border border-none glow-lime glitch-hover disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-deep-space border-t-transparent rounded-full animate-spin" />
                    ENCRYPTING...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    TRANSMIT_DATA
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Global_Presence</h3>
            <p className="text-slate-400 text-sm font-mono leading-relaxed">
              Available for security audits, penetration testing, and collaborative research projects. 
              My encryption keys are always active.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <a href="#" className="flex items-center gap-4 p-4 cyber-border bg-black/20 hover:bg-cyber-blue/10 hover:border-cyber-blue/40 transition-all group">
              <Linkedin className="w-6 h-6 text-cyber-blue" />
              <div>
                <div className="text-[10px] font-mono text-cyber-blue uppercase opacity-50">Professional_Network</div>
                <div className="text-white font-bold group-hover:text-cyber-blue">linkedin.com/in/aliomar</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-4 p-4 cyber-border bg-black/20 hover:bg-cyber-lime/10 hover:border-cyber-lime/40 transition-all group">
              <Github className="w-6 h-6 text-cyber-lime" />
              <div>
                <div className="text-[10px] font-mono text-cyber-lime uppercase opacity-50">Source_Control</div>
                <div className="text-white font-bold group-hover:text-cyber-lime">github.com/aliomar</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-4 p-4 cyber-border bg-black/20 hover:bg-warning-red/10 hover:border-warning-red/40 transition-all group">
              <Mail className="w-6 h-6 text-warning-red" />
              <div>
                <div className="text-[10px] font-mono text-warning-red uppercase opacity-50">Direct_Channel</div>
                <div className="text-white font-bold group-hover:text-warning-red">ali@omar-security.io</div>
              </div>
            </a>
          </div>

          <div className="pt-8">
            <button className="flex items-center gap-3 px-6 py-3 border border-slate-700 text-slate-400 font-mono text-xs uppercase tracking-widest hover:border-white hover:text-white transition-all">
              <Download className="w-4 h-4" />
              Download PGP Public Key
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
