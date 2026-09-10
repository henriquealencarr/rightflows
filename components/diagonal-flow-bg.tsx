"use client";

import { useEffect, useRef } from "react";

interface Line {
  off: number;
  len: number;
  a: number;
  v: number;
  w: number;
  wait: number;
  t: number;
}

const CFG = { angle: 45, count: 42, speed: 220, thickness: 1, glow: true };

function rnd(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export function DiagonalFlowBg({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let last = 0;
    let raf = 0;
    let lines: Line[] = [];

    function halfBand() {
      const rad = (CFG.angle * Math.PI) / 180;
      const w = W || 1000;
      const h = H || 600;
      return (w * Math.abs(Math.sin(rad)) + h * Math.abs(Math.cos(rad))) / 2 + 20;
    }

    function spawn(L: Partial<Line>, initial: boolean): Line {
      const span = Math.hypot(W, H) || 1000;
      const band = halfBand();
      const { speed, thickness } = CFG;
      L.off = rnd(-band, band);
      L.len = rnd(span * 0.12, span * 0.45);
      L.a = rnd(0.2, 0.6);
      L.v = speed * rnd(0.7, 2.4);
      L.w = thickness * rnd(0.5, 1.4);
      L.wait = initial ? 0 : rnd(0, 2.2);
      L.t = initial ? rnd(-span, span) : -span * 0.6 - (L.len ?? 0);
      return L as Line;
    }

    function build() {
      lines = Array.from({ length: CFG.count }, () => spawn({}, true));
    }

    function tick(now: number) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas!.getBoundingClientRect();
      const w = Math.max(1, Math.round(r.width));
      const h = Math.max(1, Math.round(r.height));
      if (canvas!.width !== w * dpr || canvas!.height !== h * dpr) {
        canvas!.width = w * dpr;
        canvas!.height = h * dpr;
        W = w;
        H = h;
      }
      if (!lines.length) {
        W = w;
        H = h;
        build();
      }
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const dt = Math.min((now - (last || now)) / 1000, 0.05);
      last = now;

      const rad = (CFG.angle * Math.PI) / 180;
      const dir = { x: Math.cos(rad), y: -Math.sin(rad) };
      const perp = { x: -dir.y, y: dir.x };
      const span = Math.hypot(w, h);
      const cx = w / 2;
      const cy = h / 2;

      ctx!.clearRect(0, 0, w, h);
      ctx!.lineCap = "round";
      ctx!.shadowColor = "rgba(255,255,255,0.35)";

      for (const L of lines) {
        if (L.wait > 0) {
          L.wait -= dt;
          continue;
        }
        L.t += L.v * dt;
        if (L.t - L.len > span * 0.75) {
          spawn(L, false);
          continue;
        }

        const bx = cx + perp.x * L.off;
        const by = cy + perp.y * L.off;
        const hx = bx + dir.x * L.t;
        const hy = by + dir.y * L.t;
        const tx = bx + dir.x * (L.t - L.len);
        const ty = by + dir.y * (L.t - L.len);

        const lineA = L.a * 0.5;
        const g = ctx!.createLinearGradient(tx, ty, hx, hy);
        g.addColorStop(0, "rgba(255,255,255,0)");
        g.addColorStop(0.65, `rgba(255,255,255,${(lineA * 0.35).toFixed(3)})`);
        g.addColorStop(1, `rgba(255,255,255,${lineA.toFixed(3)})`);
        ctx!.strokeStyle = g;
        ctx!.lineWidth = L.w;

        if (CFG.glow) {
          // wide soft halo
          ctx!.shadowColor = "rgba(255,255,255,0.9)";
          ctx!.shadowBlur = 26;
          ctx!.beginPath();
          ctx!.moveTo(tx, ty);
          ctx!.lineTo(hx, hy);
          ctx!.stroke();
          ctx!.beginPath();
          ctx!.moveTo(tx, ty);
          ctx!.lineTo(hx, hy);
          ctx!.stroke();
        }

        // bright core
        ctx!.shadowColor = "rgba(255,255,255,1)";
        ctx!.shadowBlur = CFG.glow ? 6 : 0;
        ctx!.beginPath();
        ctx!.moveTo(tx, ty);
        ctx!.lineTo(hx, hy);
        ctx!.stroke();

        if (CFG.glow) {
          ctx!.shadowBlur = 16;
          ctx!.fillStyle = `rgba(255,255,255,${Math.min(1, L.a).toFixed(3)})`;
          ctx!.beginPath();
          ctx!.arc(hx, hy, L.w * 1.1, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
      ctx!.shadowBlur = 0;

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
