"use client";

import { useEffect, useRef } from "react";

const CHARS = "01アイウエオカキクケコサシスセソTESSERA";

export function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const fontSize = 14;
    const cols = Math.floor(w / (fontSize * 1.2));
    const drops: number[] = Array.from({ length: cols }, () => Math.random() * -80);
    const speeds: number[] = Array.from({ length: cols }, () => 0.3 + Math.random() * 0.5);

    function draw() {
      if (!ctx) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize * 1.2;
        const y = drops[i] * fontSize;
        const rnd = Math.random();

        if (rnd > 0.97) {
          // bright head character
          ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
        } else if (rnd > 0.9) {
          ctx.fillStyle = "rgba(59, 130, 246, 0.18)";
        } else {
          ctx.fillStyle = "rgba(59, 130, 246, 0.06)";
        }

        ctx.fillText(char, x, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += speeds[i];
      }
    }

    const interval = setInterval(draw, 45);
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { clearInterval(interval); window.removeEventListener("resize", onResize); };
  }, []);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 z-0 opacity-70" aria-hidden="true" />;
}
