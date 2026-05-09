import { motion } from 'motion/react';
import { Facebook, Instagram, Send, Mail, MapPin } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-cyber-dark/40 border-t border-cyber-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-0.5 bg-cyber-blue" />
                <span className="font-mono text-cyber-blue text-sm uppercase tracking-widest">Connect</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">
                Initiate <br />
                <span className="text-cyber-blue">Contact</span>
              </h2>
              
              <div className="bg-cyber-blue/5 border-l-2 border-cyber-blue p-6 mb-8 cyber-glow">
                <p className="text-lg font-bold text-cyber-blue mb-2">
                  আপনার কোনো সমস্যা থাকলে এখনই যোগাযোগ করুন:
                </p>
                <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">
                  📩 Inbox / Facebook / Instagram
                </p>
                <div className="flex items-center gap-2 mt-4 text-cyber-neon font-mono text-[10px] uppercase tracking-tighter">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-neon opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-neon"></span>
                  </span>
                  ⏰ 24/7 Support Available
                </div>
              </div>

              <p className="text-gray-400 text-lg max-w-md font-sans">
                Secure your digital life today. Reach out for consultations or support regarding digital safety.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="https://www.facebook.com/tera.abbu.abir.okh.son" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 border border-cyber-border bg-cyber-black hover:border-blue-600 transition-all group"
              >
                <Facebook className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-mono text-[10px] uppercase text-gray-500">Facebook Identity</div>
                  <div className="font-bold">Abir Hasan</div>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/tera_bap_abir_ok_son/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 border border-cyber-border bg-cyber-black hover:border-pink-600 transition-all group"
              >
                <Instagram className="w-8 h-8 text-pink-600 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-mono text-[10px] uppercase text-gray-500">Instagram Handle</div>
                  <div className="font-bold">@tera_bap_abir_ok_son</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {sent ? (
              <div className="h-full border border-cyber-blue/30 bg-cyber-blue/5 flex flex-col items-center justify-center p-12 text-center space-y-6 cyber-glow">
                <div className="w-20 h-20 bg-cyber-blue/20 rounded-full flex items-center justify-center">
                  <Send className="w-10 h-10 text-cyber-blue" />
                </div>
                <h3 className="font-mono font-bold text-2xl uppercase tracking-tighter">Transmission Successful</h3>
                <p className="text-gray-400 font-sans">Your message has been encrypted and sent. Awaiting response.</p>
                <button 
                  onClick={() => setSent(false)} 
                  className="mt-8 font-mono text-xs text-cyber-blue underline underline-offset-4 cursor-pointer"
                >
                  Send another briefing
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-10 border border-cyber-border bg-cyber-black space-y-8 relative">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500 ml-1">Personnel Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter full name"
                    className="w-full bg-cyber-dark border border-cyber-border p-4 font-mono text-sm focus:border-cyber-blue outline-hidden transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500 ml-1">Contact Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="name@provider.com"
                    className="w-full bg-cyber-dark border border-cyber-border p-4 font-mono text-sm focus:border-cyber-blue outline-hidden transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-gray-500 ml-1">Case Briefing</label>
                  <textarea 
                    required
                    rows={4} 
                    placeholder="Describe your security situation..."
                    className="w-full bg-cyber-dark border border-cyber-border p-4 font-mono text-sm focus:border-cyber-blue outline-hidden transition-colors resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-cyber-blue text-cyber-black font-bold uppercase tracking-widest hover:brightness-110 transition-all cyber-glow flex items-center justify-center gap-3 cursor-pointer"
                >
                  Send Secure Message <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
