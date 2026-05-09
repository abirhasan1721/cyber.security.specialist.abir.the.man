import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  { name: "Samiul Hasan", text: "Helped me recover my hijacked Facebook account in less than 24 hours. Highly professional!" },
  { name: "Rahat Ahmed", text: "Best guidance for social media security. My Instagram is now safe from hackers." },
  { name: "Anika Tabassum", text: "The harassment support I received was life-changing. Very trustworthy advisor." },
  { name: "Tanvir Ismail", text: "Recovered my YouTube channel when Google support couldn't. Truly a specialist." },
  { name: "Muna Khan", text: "Ethical and legal approach. Managed to remove sensitive content that was leaking." },
  { name: "Jasim Uddin", text: "Professional digital safety training. Our team is now much more aware of threats." },
  { name: "Farhan Ali", text: "Fast response and confidential support. Highly recommended for cyber issues." },
  { name: "Sumaiya Akter", text: "Restored my TikTok account which had 50k followers. Amazing service!" },
  { name: "Nayeem Islam", text: "The digital safety audit he performed was very thorough. Feeling much safer." },
  { name: "Rifat Bhuiyan", text: "Expert in Telegram security. Helped me secure my business group." },
  // Adding more to reach a "many" feel
  { name: "Kiron Mia", text: "Excellent support for account recovery." },
  { name: "Sajid Hasan", text: "True expert in the field of cybersecurity." },
  { name: "Liza Yeasmin", text: "Very helpful and polite. Solved my issue quickly." },
  { name: "Mahir Zaman", text: "Outstanding guidance on digital privacy." },
  { name: "Nusrat Jahan", text: "The best cybersecurity consultant I've worked with." },
  { name: "Ariful Hoque", text: "He is a genius in account recovery protocols." },
  { name: "Sadia Afrin", text: "Super fast and reliable service. 10/10." },
  { name: "Imtiaz Ahmed", text: "His knowledge of platform security is unmatched." },
  { name: "Mim Akter", text: "Helped me deal with an online stalker effectively." },
  { name: "Joy Kumar", text: "Solid advice on preventing future hacks." },
  { name: "Emon Sheikh", text: "Highly ethical and technically sound." },
  { name: "Zubair Rahman", text: "Recovered my hacked Google account easily." },
  { name: "Tasnim Sultana", text: "Great consultation for brand protection." },
  { name: "Hasib Khan", text: "Quickly fixed my compromised Facebook page." },
  { name: "Priya Das", text: "Professional person with great skills." },
  { name: "Tarek Aziz", text: "The support was transparent and effective." },
  { name: "Shuvo Roy", text: "Helped me regain access to my business Instagram." },
  { name: "Nitu Islam", text: "I recommend him to anyone facing cyber threats." },
  { name: "Rakib Hasan", text: "Top-tier cybersecurity specialist in the region." },
  { name: "Maya Khatun", text: "Very professional and confidential handling of cases." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-cyber-dark/20 border-y border-cyber-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <header className="text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-cyber-blue" />
            <span className="font-mono text-cyber-blue text-xs uppercase tracking-widest">Digital Feedback</span>
            <div className="w-12 h-px bg-cyber-blue" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">
            User <span className="text-cyber-blue">Testimonials</span>
          </h2>
        </header>
      </div>

      <div className="relative">
        {/* Continuous Marquee Top */}
        <div className="flex gap-6 animate-[marquee_50s_linear_infinite] whitespace-nowrap mb-6">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="inline-block w-80 p-6 bg-cyber-black border border-cyber-border rounded-xl hover:border-cyber-blue/40 transition-colors"
            >
              <Quote className="w-6 h-6 text-cyber-blue/20 mb-4" />
              <p className="text-gray-400 text-sm whitespace-normal mb-4 font-sans italic leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center text-cyber-blue text-[10px] font-bold">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="font-mono text-xs text-white uppercase tracking-tighter">{t.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Marquee Bottom (Reverse) */}
        <div className="flex gap-6 animate-[marquee-reverse_60s_linear_infinite] whitespace-nowrap">
          {[...testimonials, ...testimonials].reverse().map((t, i) => (
            <div 
              key={i} 
              className="inline-block w-80 p-6 bg-cyber-black border border-cyber-border rounded-xl hover:border-cyber-blue/40 transition-colors"
            >
              <Quote className="w-6 h-6 text-cyber-blue/20 mb-4" />
              <p className="text-gray-400 text-sm whitespace-normal mb-4 font-sans italic leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center text-cyber-blue text-[10px] font-bold">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="font-mono text-xs text-white uppercase tracking-tighter">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}} />
    </section>
  );
}
