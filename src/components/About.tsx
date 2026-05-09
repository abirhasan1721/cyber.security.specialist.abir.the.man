import { motion } from 'motion/react';
import { Shield, ShieldAlert, ShieldCheck, Lock, Terminal, Activity, Zap, Cpu, Search, UserCheck } from 'lucide-react';
import Counter from './Counter';

const tags = [
  "Account Recovery",
  "Harassment Support",
  "Content Removal",
  "Digital Safety"
];

const stats = [
  { label: "Cases Resolved", value: 5000, suffix: "+", icon: ShieldCheck, color: "text-cyber-neon" },
  { label: "Confidentiality", value: 100, suffix: "%", icon: Lock, color: "text-cyber-blue" },
  { label: "Live Support", value: 24, suffix: "/7", icon: Activity, color: "text-cyber-neon" },
  { label: "Cyber Assistance", value: 99, suffix: "%", icon: UserCheck, color: "text-cyber-blue" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Local Section Background Enhancements */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
      
      {/* Floating Particles Effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyber-blue/30 rounded-full pointer-events-none"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "40px" }}
                  viewport={{ once: true }}
                  className="h-px bg-cyber-blue"
                />
                <span className="font-mono text-[10px] text-cyber-blue uppercase tracking-[0.5em]">About Me</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight">
                <span className="text-white">Trusted Digital</span> <br />
                <span className="text-cyber-neon cyber-glow-neon">CYBER Protector</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-sans max-w-xl">
              <p>
                As a premier <span className="text-white font-bold">Cyber Security Specialist</span>, Abir Hasan provides a shield against the complexities of the digital underground. With a proven track record in high-stakes digital interventions, he empowers individuals to reclaim their digital sovereignty.
              </p>
              <p>
                His expertise spans across <span className="text-cyber-blue font-mono">Social Media Harassment Support</span>, advanced <span className="text-cyber-blue font-mono">Account Recovery</span>, and surgical <span className="text-cyber-blue font-mono">Content Removal</span> across platforms like Facebook, Instagram, YouTube, and TikTok. 
              </p>
              <p>
                Every protocol is executed with precision, ensuring your privacy and safety remain uncompromised in an era of evolving digital threats.
              </p>
            </div>

            {/* Glowing Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 border border-cyber-neon/30 bg-cyber-neon/5 text-cyber-neon font-mono text-[10px] uppercase tracking-widest rounded-xs cursor-default hover:bg-cyber-neon/10 transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Hacker Terminal Animation */}
            <div className="hidden md:block pt-4">
              <div className="flex items-center gap-3 font-mono text-xs text-cyber-blue/60 group">
                <Terminal className="w-4 h-4 animate-pulse" />
                <span className="relative">
                  $ exec --protocol_defense
                  <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="absolute -right-3 top-0 w-2 h-4 bg-cyber-blue"
                  />
                </span>
                <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">STATUS: ENCRYPTED</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Dashboard UI */}
          <div className="space-y-8">
            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 border border-cyber-blue/30 bg-white/5 backdrop-blur-xl rounded-2xl group hover:border-cyber-blue/60 transition-all cyber-glow"
            >
              {/* Subtle Matrix Lines inside card */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-10 pointer-events-none">
                <motion.div 
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full bg-linear-to-b from-transparent via-cyber-blue/20 to-transparent"
                />
              </div>

              <blockquote className="relative z-10 text-2xl md:text-3xl font-bold italic text-white leading-tight mb-8">
                “I don’t just solve problems — I help people protect their digital identity and stay safe online.”
              </blockquote>

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-cyber-blue/50 p-1 bg-cyber-dark overflow-hidden">
                  <div className="w-full h-full rounded-full bg-linear-to-br from-cyber-blue to-blue-900 flex items-center justify-center text-white text-2xl font-black">
                    AH
                  </div>
                </div>
                <div>
                  <div className="font-mono font-bold text-white uppercase tracking-tighter">Abir Hasan</div>
                  <div className="font-mono text-xs text-cyber-blue uppercase tracking-widest">Cyber Security Specialist</div>
                </div>
                <div className="ml-auto">
                  <ShieldCheck className="w-8 h-8 text-cyber-neon" />
                </div>
              </div>
            </motion.div>

            {/* Statistics Boxes */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 border border-white/5 bg-white/5 backdrop-blur-md rounded-xl hover:border-cyber-blue/20 transition-all group overflow-hidden relative"
                >
                  <div className="relative z-10">
                    <stat.icon className={`w-6 h-6 ${stat.color} mb-3 group-hover:scale-110 transition-transform`} />
                    <div className="text-2xl font-black text-white font-mono">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em]">
                      {stat.label}
                    </div>
                  </div>
                  {/* Small decorative circuit line */}
                  <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className="absolute top-4 right-4 w-12 h-px bg-white" />
                    <div className="absolute top-4 right-4 w-px h-12 bg-white" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Scan Line Overlay for Stat Grid */}
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="h-[1px] w-1/2 bg-linear-to-r from-transparent via-cyber-blue/20 to-transparent pointer-events-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
