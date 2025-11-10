import { useEffect, useRef } from "react";

export default function QuantumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawQuantumField = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create quantum field effect
      const gridSize = 100;
      const amplitude = 30;
      
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 1;
      
      // Draw animated grid
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const offsetX = Math.sin(time * 0.01 + x * 0.01) * amplitude;
          const offsetY = Math.cos(time * 0.01 + y * 0.01) * amplitude;
          
          ctx.beginPath();
          ctx.moveTo(x + offsetX, y + offsetY);
          ctx.lineTo(x + gridSize + offsetX, y + offsetY);
          ctx.lineTo(x + gridSize + offsetX, y + gridSize + offsetY);
          ctx.lineTo(x + offsetX, y + gridSize + offsetY);
          ctx.closePath();
          ctx.stroke();
        }
      }
      
      // Draw neural connections
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.15)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 20; i++) {
        const startX = (Math.sin(time * 0.005 + i) + 1) * canvas.width * 0.5;
        const startY = (Math.cos(time * 0.007 + i) + 1) * canvas.height * 0.5;
        const endX = (Math.sin(time * 0.003 + i + Math.PI) + 1) * canvas.width * 0.5;
        const endY = (Math.cos(time * 0.004 + i + Math.PI) + 1) * canvas.height * 0.5;
        
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
        gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.3)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)');
        
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
      
      time++;
    };

    const animate = () => {
      drawQuantumField();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
