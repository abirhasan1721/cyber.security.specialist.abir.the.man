import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"\'#&_(),.;:?><[]{}|@';
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = new Array(columns).fill(1).map(() => Math.random() * -100);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const draw = () => {
      // Semi-transparent black to create trailing effect
      ctx.fillStyle = 'rgba(5, 6, 8, 0.1)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Use neon green with some random variance
        const alpha = Math.random() * 0.5 + 0.5;
        
        // Occasional blue "hacker" highlight
        if (Math.random() > 0.98) {
          ctx.fillStyle = `rgba(0, 245, 255, ${alpha})`; // Cyber Blue
        } else {
          ctx.fillStyle = `rgba(57, 255, 20, ${alpha * 0.6})`; // Cyber Neon (dimmer for background)
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 opacity-40 pointer-events-none"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
}
