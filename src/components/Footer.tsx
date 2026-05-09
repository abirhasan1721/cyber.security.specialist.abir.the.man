import { Shield, Lock, Terminal, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-cyber-black border-t border-cyber-blue/10 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-cyber-blue/50 to-transparent shadow-[0_0_20px_rgba(0,245,255,0.5)]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-cyber-blue cyber-glow" />
              <span className="font-mono font-black text-2xl tracking-tighter uppercase whitespace-nowrap">
                Abir<span className="text-cyber-blue">Hasan</span>
              </span>
            </div>
            <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-sm">
              Providing professional digital protection and ethical security advisory services. 
              Dedicated to securing individuals and organizations in an evolving threat landscape.
            </p>
            <div className="flex items-center gap-4 text-cyber-blue/40 font-mono text-[10px] uppercase tracking-widest">
              <span className="flex items-center gap-1"><Terminal className="w-3 h-3" /> System Active</span>
              <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> Global Protection</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-white">Navigation</h4>
            <ul className="space-y-4 font-mono text-[11px] uppercase tracking-widest text-gray-500">
              <li><a href="#about" className="hover:text-cyber-blue transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-cyber-blue/30 group-hover:bg-cyber-blue transition-colors" /> About Me</a></li>
              <li><a href="#services" className="hover:text-cyber-blue transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-cyber-blue/30 group-hover:bg-cyber-blue transition-colors" /> Services</a></li>
              <li><a href="#contact" className="hover:text-cyber-blue transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-cyber-blue/30 group-hover:bg-cyber-blue transition-colors" /> Contact</a></li>
            </ul>
          </div>

          {/* Security Column */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-white">Compliance</h4>
            <div className="p-4 border border-cyber-blue/10 bg-cyber-blue/5 rounded-xs space-y-3">
              <div className="flex items-center gap-2 text-cyber-neon font-mono text-[9px] uppercase tracking-tighter">
                <Lock className="w-3 h-3" /> Ethical Framework Verified
              </div>
              <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest leading-relaxed">
                All operations are logged and performed within official provider legal frameworks.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest max-w-xl text-center md:text-left">
            Disclaimer: Abir Hasan is a professional security advisor. We do not participate in or support unauthorized hacking. 
            All services are ethical and legal.
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-gray-500 font-mono text-xs uppercase tracking-widest flex items-center gap-4 flex-wrap justify-center">
              <span>Copyright © 2020 <span className="text-white">Abir Hasan</span></span>
              <span className="opacity-20">•</span>
              <a href="#" className="hover:text-cyber-blue transition-colors">Privacy</a>
              <span className="opacity-10">/</span>
              <a href="#" className="hover:text-cyber-blue transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
