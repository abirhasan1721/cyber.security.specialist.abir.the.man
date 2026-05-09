import { motion } from 'motion/react';
import { Shield, User, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center overflow-hidden">
      {/* Top Badges */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-4 mb-8"
      >
        <span className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-cyber-neon/30 bg-cyber-neon/5 text-cyber-neon font-mono text-[10px] md:text-[12px] uppercase tracking-[0.6em] cyber-glow-neon translate-x-[0.3em]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-neon shadow-[0_0_8px_#39ff14] animate-pulse" />
          CYBER SECURITY SPECIALIST
        </span>
        <span className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-cyber-blue/30 bg-cyber-blue/5 text-cyber-blue font-mono text-[10px] md:text-[12px] uppercase tracking-[0.4em] cyber-glow translate-x-[0.2em]">
          DIGITAL CYBER PROTECTION EXPERT
        </span>
      </motion.div>

      {/* Main Title Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500 uppercase">
          Abir Hasan
        </h1>
        
        <p className="text-gray-400 font-light text-sm md:text-base max-w-xl mx-auto mb-10 tracking-wide">
          Protecting People from Online Threats, Harassment & Digital Risks
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-6 mb-16 relative z-10"
      >
        <button 
          onClick={() => scrollTo('contact')}
          className="group px-8 py-4 bg-transparent border-2 border-cyber-neon/50 text-cyber-neon font-bold text-sm uppercase tracking-widest hover:bg-cyber-neon hover:text-cyber-black transition-all cyber-glow-neon flex items-center justify-center gap-3 cursor-pointer"
        >
          <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          GET HELP NOW
        </button>
        <button 
          onClick={() => scrollTo('about')}
          className="group px-8 py-4 bg-transparent border-2 border-cyber-blue/50 text-cyber-blue font-bold text-sm uppercase tracking-widest hover:bg-cyber-blue hover:text-cyber-black transition-all cyber-glow flex items-center justify-center gap-3 cursor-pointer"
        >
          <User className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          LEARN MORE
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('about')}
      >
        <span className="font-mono text-[10px] text-gray-500 tracking-[0.4em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-cyber-blue/50" />
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 600, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[1px] bg-cyber-blue/20 blur-[1px] pointer-events-none"
      />
    </section>
  );
}
