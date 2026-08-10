"use client";

import { useEffect, useRef } from "react";

const CYCLE_MS = 6000;
const START_DELAY_MS = 1100;

/* Windows widened/shifted to match when the worm is actually hidden inside
   each node's mask hole (radius 9), not just when it crosses the bare point. */
const DOT_WINDOWS: Record<string, [number, number][]> = {
  "115-150": [[5.39, 11.01], [55.83, 61.39]],
  "200-150": [[15.34, 20.96], [65.68, 71.24]],
  "200-80": [[23.53, 29.15]],
  "285-80": [[33.48, 39.10]],
  "370-80": [[43.43, 49.05]],
  "200-220": [[73.79, 79.35]],
  "285-220": [[83.63, 89.20]],
  "370-220": [[93.48, 99.04]],
};

export function HeroVisual() {
  const dotRefs = useRef<Record<string, SVGCircleElement | SVGRectElement | null>>({});
  const ringRefs = useRef<Record<string, SVGCircleElement | SVGRectElement | null>>({});

  useEffect(() => {
    let raf: number;
    const startTime = performance.now() + START_DELAY_MS;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      if (elapsed >= 0) {
        const t = ((elapsed % CYCLE_MS) / CYCLE_MS) * 100;
        for (const key in DOT_WINDOWS) {
          const active = DOT_WINDOWS[key].some(([s, e]) => t >= s && t <= e);
          const scale = active ? "scale(1.21)" : "scale(1)";

          const dot = dotRefs.current[key];
          if (dot) {
            dot.style.opacity = active ? "1" : "0";
            dot.style.transform = scale;
          }
          const ring = ringRefs.current[key];
          if (ring) ring.style.transform = scale;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full max-w-[440px] lg:max-w-[616px] aspect-[1.55] ml-auto lg:translate-x-12">
      <svg viewBox="0 0 400 300" width="100%" height="100%">
        <defs>
          <filter id="rf-glow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="rf-glow-snake" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="9" result="blur1" />
            <feGaussianBlur in="blur1" stdDeviation="5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <mask id="rf-line-mask">
            <rect x="0" y="0" width="400" height="300" fill="white" />
            <rect x="23" y="143" width="14" height="14" fill="black" />
            <circle cx="115" cy="150" r="9" fill="black" />
            <circle cx="200" cy="150" r="9" fill="black" />
            <circle cx="200" cy="80" r="9" fill="black" />
            <circle cx="200" cy="220" r="9" fill="black" />
            <circle cx="285" cy="80" r="9" fill="black" />
            <circle cx="285" cy="220" r="9" fill="black" />
            <circle cx="370" cy="80" r="9" fill="black" />
            <circle cx="370" cy="220" r="9" fill="black" />
          </mask>
        </defs>

        <g fill="none" stroke="#e8e8ee" strokeWidth="5.5" mask="url(#rf-line-mask)">
          <path d="M 30 150 L 200 150" />
          <path d="M 200 80 L 200 220" />
          <path d="M 200 80 L 370 80" />
          <path d="M 200 220 L 370 220" />
        </g>

        <path
          d="M 30 150 L 200 150 L 200 80 L 370 80"
          fill="none"
          stroke="#e0116f"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="30 3000"
          mask="url(#rf-line-mask)"
          className="rf-fork-a"
        />
        <path
          d="M 30 150 L 200 150 L 200 220 L 370 220"
          fill="none"
          stroke="#e0116f"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="30 3000"
          mask="url(#rf-line-mask)"
          className="rf-fork-b"
        />

        <rect x="18" y="138" width="24" height="24" fill="white" stroke="#e8e8ee" strokeWidth="4.5" style={{ filter: "url(#rf-glow)" }} />
        <circle ref={(el) => { ringRefs.current["115-150"] = el; }} cx="115" cy="150" r="10" fill="none" stroke="#e8e8ee" strokeWidth="3.6" style={{ filter: "url(#rf-glow)", transition: "transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
        <circle ref={(el) => { ringRefs.current["200-150"] = el; }} cx="200" cy="150" r="10" fill="none" stroke="#e8e8ee" strokeWidth="3.6" style={{ filter: "url(#rf-glow)", transition: "transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
        <circle ref={(el) => { ringRefs.current["200-80"] = el; }} cx="200" cy="80" r="10" fill="none" stroke="#e8e8ee" strokeWidth="3.6" style={{ filter: "url(#rf-glow)", transition: "transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
        <circle ref={(el) => { ringRefs.current["200-220"] = el; }} cx="200" cy="220" r="10" fill="none" stroke="#e8e8ee" strokeWidth="3.6" style={{ filter: "url(#rf-glow)", transition: "transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
        <circle ref={(el) => { ringRefs.current["285-80"] = el; }} cx="285" cy="80" r="10" fill="none" stroke="#e8e8ee" strokeWidth="3.6" style={{ filter: "url(#rf-glow)", transition: "transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
        <circle ref={(el) => { ringRefs.current["285-220"] = el; }} cx="285" cy="220" r="10" fill="none" stroke="#e8e8ee" strokeWidth="3.6" style={{ filter: "url(#rf-glow)", transition: "transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
        <circle ref={(el) => { ringRefs.current["370-80"] = el; }} cx="370" cy="80" r="10" fill="white" stroke="#e8e8ee" strokeWidth="3.6" style={{ filter: "url(#rf-glow)", transition: "transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
        <circle ref={(el) => { ringRefs.current["370-220"] = el; }} cx="370" cy="220" r="10" fill="white" stroke="#e8e8ee" strokeWidth="3.6" style={{ filter: "url(#rf-glow)", transition: "transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />

        <circle ref={(el) => { dotRefs.current["115-150"] = el; }} cx="115" cy="150" r="8.2" fill="#eab308" style={{ opacity: 0, filter: "url(#rf-glow)", transition: "opacity 0.25s ease, transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
        <circle ref={(el) => { dotRefs.current["200-150"] = el; }} cx="200" cy="150" r="8.2" fill="#eab308" style={{ opacity: 0, filter: "url(#rf-glow)", transition: "opacity 0.25s ease, transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
        <circle ref={(el) => { dotRefs.current["200-80"] = el; }} cx="200" cy="80" r="8.2" fill="#eab308" style={{ opacity: 0, filter: "url(#rf-glow)", transition: "opacity 0.25s ease, transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
        <circle ref={(el) => { dotRefs.current["200-220"] = el; }} cx="200" cy="220" r="8.2" fill="#eab308" style={{ opacity: 0, filter: "url(#rf-glow)", transition: "opacity 0.25s ease, transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
        <circle ref={(el) => { dotRefs.current["285-80"] = el; }} cx="285" cy="80" r="8.2" fill="#eab308" style={{ opacity: 0, filter: "url(#rf-glow)", transition: "opacity 0.25s ease, transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
        <circle ref={(el) => { dotRefs.current["285-220"] = el; }} cx="285" cy="220" r="8.2" fill="#eab308" style={{ opacity: 0, filter: "url(#rf-glow)", transition: "opacity 0.25s ease, transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
        <circle ref={(el) => { dotRefs.current["370-80"] = el; }} cx="370" cy="80" r="8.2" fill="#eab308" style={{ opacity: 0, filter: "url(#rf-glow)", transition: "opacity 0.25s ease, transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
        <circle ref={(el) => { dotRefs.current["370-220"] = el; }} cx="370" cy="220" r="8.2" fill="#eab308" style={{ opacity: 0, filter: "url(#rf-glow)", transition: "opacity 0.25s ease, transform 0.25s ease", transformBox: "fill-box", transformOrigin: "center" }} />
      </svg>
    </div>
  );
}
