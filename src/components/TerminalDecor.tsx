import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const SNIPPETS = [
  "sudo systemctl restart firewall",
  "ssh-keygen -t rsa -b 4096",
  "nmap -sS -O 192.168.1.1",
  "grep -r 'PASSWORD' /etc/conf",
  "curl -X POST https://api.secure.mesh",
  "docker-compose up -d --build",
  "iptables -A INPUT -p tcp --dport 22 -j ACCEPT",
  "openssl genrsa -out server.key 2048",
  "tcpdump -i eth0 port 80",
  "ls -la /root/.ssh",
  "chmod 600 config.private",
  "ps -aux | grep 'vault'",
  "nc -zv 127.0.0.1 1-65535",
  "tail -f /var/log/auth.log"
];

export default function TerminalDecor() {
  const [lines, setLines] = useState<{ id: number; text: string; top: string; left: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLine = {
        id: Date.now(),
        text: SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)],
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 5}%`
      };
      
      setLines(prev => [...prev, newLine].slice(-5));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: [0, 0.2, 0.2, 0], x: 0 }}
          transition={{ duration: 6, ease: "linear" }}
          style={{ top: line.top, left: line.left }}
          className="absolute font-mono text-[10px] text-cyber-blue whitespace-nowrap"
        >
          <span className="text-cyber-neon mr-2">$</span>
          {line.text}
        </motion.div>
      ))}
    </div>
  );
}
