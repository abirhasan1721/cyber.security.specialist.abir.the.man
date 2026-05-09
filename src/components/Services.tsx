import { motion } from 'motion/react';
import { MessageSquareOff, ShieldCheck, HeartHandshake, Fingerprint, GraduationCap } from 'lucide-react';

const services = [
  {
    title: "Online Harassment Support",
    description: "Legal guidance and strategic support for individuals facing digital threats, stalking, or harassment.",
    icon: MessageSquareOff,
  },
  {
    title: "Social Media Security",
    description: "Hardening accounts on Facebook, Instagram, and more to prevent unauthorized access and data leaks.",
    icon: ShieldCheck,
  },
  {
    title: "Account Recovery Guidance",
    description: "Assisting users in navigating official platform channels to recover lost or compromised accounts legally.",
    icon: HeartHandshake,
  },
  {
    title: "Privacy Protection",
    description: "Auditing your digital footprint and implementing measures to protect your personal identity online.",
    icon: Fingerprint,
  },
  {
    title: "Digital Safety Training",
    description: "Empowering groups and individuals with the knowledge to recognize and avoid modern cyber threats.",
    icon: GraduationCap,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 relative bg-cyber-dark/30">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center md:text-left">
          <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
            <div className="w-12 h-0.5 bg-cyber-blue" />
            <span className="font-mono text-cyber-blue text-sm uppercase tracking-widest">Protocol Directory</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase">
            Specialized <span className="text-cyber-blue underline underline-offset-8">Services</span>
          </h2>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-cyber-border bg-cyber-black hover:border-cyber-blue/50 transition-all group"
            >
              <service.icon className="w-12 h-12 text-cyber-blue mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-mono font-bold text-xl mb-4 text-white uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-sans text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 border-2 border-dashed border-cyber-blue/20 bg-cyber-blue/5 flex flex-col justify-center items-center text-center italic text-cyber-blue/60 font-mono text-sm uppercase tracking-widest"
          >
            Custom Security Briefings <br /> Available Upon Request
          </motion.div>
        </div>
      </div>
    </section>
  );
}
