"use client";

import { useEffect, useRef } from "react";

/**
 * Quiet atmospheric point field — sparse dots, soft glow, no connector lines.
 */

const COLS = 32;
const ROWS = 20;

export function HeroMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, parent.clientWidth);
      h = Math.max(1, parent.clientHeight);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const elev = (u: number, v: number, t: number) =>
      Math.sin(u * Math.PI * 2.2 + t * 0.22 + v * 0.8) * 22 +
      Math.cos(v * Math.PI * 1.8 + t * 0.14) * 8;

    const draw = (time: number) => {
      if (w < 2 || h < 2) return;
      ctx.clearRect(0, 0, w, h);

      const top = h * 0.12;
      const bottom = h * 0.96;
      const xSpan = w * 1.2;
      const xBias = w * 0.18;

      for (let j = 0; j < ROWS; j++) {
        const v = j / (ROWS - 1);
        for (let i = 0; i < COLS; i++) {
          const u = i / (COLS - 1);
          const e = elev(u, v, time);
          const persp = 0.8 + v * 0.35;
          const x = w * 0.5 + xBias + (u - 0.5) * xSpan * persp;
          const y = top + v * (bottom - top) + e * (0.22 + v * 0.4);

          const vertical =
            Math.pow(v + 0.08, 0.75) * Math.pow(Math.sin(v * Math.PI), 0.5);
          const side = Math.pow(Math.sin(u * Math.PI), 0.5);
          const right = 0.35 + u * 0.75;
          const a = Math.min(1, vertical * side * right * 0.85);
          if (a < 0.06) continue;

          const pulse =
            0.7 +
            0.3 * Math.sin(time * 0.45 + u * 4 + v * 3) *
              Math.sin(time * 0.2 + v * 2);
          const g = a * pulse * 0.55;

          // Tiny soft halo
          const r = 2.5 + g * 5;
          const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
          grad.addColorStop(0, `rgba(120, 200, 255, ${0.1 * g})`);
          grad.addColorStop(1, "rgba(120, 200, 255, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();

          // Dot core
          ctx.beginPath();
          ctx.fillStyle = `rgba(170, 220, 255, ${Math.min(0.45, 0.08 + g * 0.35)})`;
          ctx.arc(x, y, 0.55 + g * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const tick = (now: number) => {
      draw(mq.matches ? 0 : now * 0.001);
      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
