import { Shield } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-cyber-border bg-cyber-black/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-cyber-blue" />
          <span className="font-mono font-bold text-xl tracking-tighter uppercase">
            Abir<span className="text-cyber-blue">Hasan</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest uppercase text-gray-400">
          {['About', 'Services', 'Platforms', 'Testimonials', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="hover:text-cyber-blue transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollTo('contact')}
          className="px-6 py-2 bg-transparent border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 transition-all font-mono text-xs uppercase tracking-widest cyber-glow cursor-pointer"
        >
          GET HELP
        </button>
      </div>
    </motion.nav>
  );
}
