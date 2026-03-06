import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ExternalLink, Github, Lock, Unlock, AlertTriangle, Terminal, Cpu, Zap } from 'lucide-react';
import { Project, Skill, Certification } from '../types';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Packet Sniffer Pro',
    description: 'Advanced network analysis tool for real-time traffic monitoring and vulnerability detection in local networks.',
    threatLevel: 'High',
    tags: ['Python', 'Scapy', 'Networking'],
    link: '#'
  },
  {
    id: '2',
    title: 'Secure Auth System',
    description: 'Multi-factor authentication framework using biometric data and hardware-level encryption protocols.',
    threatLevel: 'Critical',
    tags: ['React', 'Node.js', 'WebAuthn'],
    link: '#'
  },
  {
    id: '3',
    title: 'Vulnerability Scanner',
    description: 'Automated security auditing tool that identifies common OWASP Top 10 vulnerabilities in web applications.',
    threatLevel: 'Medium',
    tags: ['Go', 'Docker', 'Security'],
    link: '#'
  }
];

const SKILLS = {
  offensive: [
    { name: 'Penetration Testing', level: 95 },
    { name: 'Exploitation', level: 88 },
    { name: 'Python/Bash Scripting', level: 92 },
    { name: 'Social Engineering', level: 85 }
  ],
  defensive: [
    { name: 'Encryption Protocols', level: 90 },
    { name: 'Firewall Config', level: 85 },
    { name: 'SIEM / Monitoring', level: 82 },
    { name: 'Incident Response', level: 88 }
  ]
};

const CERTIFICATIONS: Certification[] = [
  { name: 'OSCP', issuer: 'OffSec', year: '2025', verified: true },
  { name: 'eJPT', issuer: 'eLearnSecurity', year: '2024', verified: true },
  { name: 'CompTIA Security+', issuer: 'CompTIA', year: '2023', verified: true }
];

export default function Vault() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 max-w-6xl mx-auto space-y-24">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-cyber-lime text-xs font-mono tracking-[0.5em] uppercase opacity-70">Intelligence Repository</h2>
        <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter">THE <span className="text-cyber-lime glow-lime">VAULT</span></h1>
        <div className="w-24 h-1 bg-cyber-lime mx-auto mt-4" />
      </div>

      {/* Projects Gallery */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <Terminal className="text-cyber-lime w-6 h-6" />
          <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Security Archives</h3>
          <div className="flex-1 h-px bg-cyber-lime/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cyber-border bg-black/40 p-6 hover:bg-black/60 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`px-2 py-1 text-[10px] font-mono border ${
                  project.threatLevel === 'Critical' ? 'border-warning-red text-warning-red' :
                  project.threatLevel === 'High' ? 'border-orange-500 text-orange-500' :
                  'border-cyber-blue text-cyber-blue'
                } uppercase tracking-tighter`}>
                  Threat_Level: {project.threatLevel}
                </div>
                <div className="flex gap-2">
                  <Github className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                  <ExternalLink className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-lime transition-colors">{project.title}</h4>
              <p className="text-sm text-slate-400 mb-6 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-cyber-blue bg-cyber-blue/5 px-2 py-0.5 border border-cyber-blue/20">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Radar */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Offensive */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Zap className="text-warning-red w-6 h-6" />
            <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Offensive_Ops</h3>
          </div>
          <div className="space-y-6">
            {SKILLS.offensive.map((skill, idx) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-xs font-mono uppercase tracking-widest">
                  <span>{skill.name}</span>
                  <span className="text-warning-red">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 cyber-border border-none">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="h-full bg-warning-red shadow-[0_0_10px_rgba(255,78,78,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Defensive */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-cyber-blue w-6 h-6" />
            <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Defensive_Grid</h3>
          </div>
          <div className="space-y-6">
            {SKILLS.defensive.map((skill, idx) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-xs font-mono uppercase tracking-widest">
                  <span>{skill.name}</span>
                  <span className="text-cyber-blue">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 cyber-border border-none">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="h-full bg-cyber-blue shadow-[0_0_10px_rgba(0,212,255,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <Cpu className="text-cyber-lime w-6 h-6" />
          <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Verified_Credentials</h3>
          <div className="flex-1 h-px bg-cyber-lime/20" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 cyber-border bg-cyber-lime/5 flex items-center gap-4 group hover:bg-cyber-lime/10 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-cyber-lime/20 flex items-center justify-center border border-cyber-lime/40 glow-lime">
                <ShieldCheck className="w-6 h-6 text-cyber-lime" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyber-lime transition-colors">{cert.name}</h4>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">{cert.issuer} • {cert.year}</p>
                {cert.verified && (
                  <div className="mt-1 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-lime animate-pulse" />
                    <span className="text-[10px] text-cyber-lime font-mono uppercase tracking-tighter">Verified_Status: OK</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
