import { motion } from 'motion/react';

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-cyber-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      {/* Animated Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyber-blue blur-[120px] rounded-full"
      />
      
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.15, 0.05] 
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900 blur-[150px] rounded-full"
      />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyber-black/50 to-cyber-black" />
    </div>
  );
}
