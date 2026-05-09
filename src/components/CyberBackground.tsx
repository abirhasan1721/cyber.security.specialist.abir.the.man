import { motion } from 'motion/react';
import MatrixRain from './MatrixRain';
import TerminalDecor from './TerminalDecor';

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-cyber-black overflow-hidden">
      {/* Matrix Rain Base */}
      <MatrixRain />
      
      {/* Terminal Code Snippets */}
      <TerminalDecor />

      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Scanning Horizontal Line */}
      <motion.div 
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[2px] bg-linear-to-b from-transparent via-cyber-blue/20 to-transparent pointer-events-none z-10"
      />

      {/* Animated Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-cyber-blue/30 blur-[150px] rounded-full"
      />
      
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.15, 0.05] 
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-blue-900/20 blur-[180px] rounded-full"
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 30%, rgba(5,6,8,0.8) 100%) pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-cyber-black pointer-events-none" />
    </div>
  );
}
