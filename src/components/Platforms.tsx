import { motion } from 'motion/react';
import { Facebook, Instagram, Youtube, MessageCircle, Chrome, Smartphone } from 'lucide-react';

const platforms = [
  { name: 'Facebook', icon: Facebook, color: '#1877F2' },
  { name: 'Instagram', icon: Instagram, color: '#E4405F' },
  { name: 'YouTube', icon: Youtube, color: '#FF0000' },
  { name: 'TikTok', icon: Smartphone, color: '#000000' },
  { name: 'Telegram', icon: MessageCircle, color: '#26A5E4' },
  { name: 'Google', icon: Chrome, color: '#4285F4' },
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-24 border-y border-cyber-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center font-mono text-xs text-gray-500 uppercase tracking-[0.5em] mb-16">
          Supported Ecosystems
        </h3>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-40 hover:grayscale-0 transition-all duration-700">
          {platforms.map((platform) => (
            <div key={platform.name} className="flex flex-col items-center gap-4 group">
              <div className="p-4 border border-white/5 rounded-full group-hover:border-cyber-blue/30 transition-all">
                <platform.icon className="w-8 h-8 text-white transition-colors" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
