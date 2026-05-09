import { motion } from 'motion/react';
import { Zap, Clock, ShieldCheck, Scale } from 'lucide-react';

const reasons = [
  {
    title: "Cyber Awareness",
    description: "Deep expertise in modern social engineering and digital exploitation patterns.",
    icon: Zap,
  },
  {
    title: "Response Speed",
    description: "Prioritizing critical cases with efficient protocols for rapid intervention.",
    icon: Clock,
  },
  {
    title: "Confidentiality",
    description: "Ensuring sensitive data remains private through high-level operational security.",
    icon: ShieldCheck,
  },
  {
    title: "Ethical Standards",
    description: "Always operating within the law to provide sustainable and legal resolutions.",
    icon: Scale,
  }
];

export default function WhyUs() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center md:text-left">
            Why Trusted <span className="text-cyber-blue">Advisor?</span>
          </h2>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border border-cyber-border bg-cyber-dark/50 space-y-6 hover:bg-cyber-blue/5 transition-colors"
            >
              <reason.icon className="w-10 h-10 text-cyber-blue opacity-70" />
              <h3 className="font-mono font-bold text-lg uppercase">{reason.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
