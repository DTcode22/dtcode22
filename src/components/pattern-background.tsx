'use client';

import { useRef, useEffect } from 'react';
import { spiralDefaultParams, renderSpiral } from '@/lib/patterns/spiral';

export function PatternBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const startTime = Date.now();
    const params = { ...spiralDefaultParams, speed: 0.4 };

    const animate = () => {
      const time = (Date.now() - startTime) * 0.001 * params.speed;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const bg = getComputedStyle(document.documentElement)
        .getPropertyValue('--background')
        .trim();
      ctx.fillStyle = bg || 'oklch(0.141 0.005 285.823)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const dotColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--foreground')
        .trim();
      ctx.fillStyle = dotColor
        ? dotColor.replace(/\)\s*$/, ' / 0.08)')
        : 'rgba(255,255,255,0.08)';

      ctx.save();
      ctx.scale(1, 1);
      renderSpiral(ctx, canvas, params, time);
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      aria-hidden
    />
  );
}
