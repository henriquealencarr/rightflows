"use client";

import { motion } from "framer-motion";
import { Workflow } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative">
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full blur-[60px] opacity-40"
        style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", transform: "scale(1.2)" }}
      />
      {/* Gradient border ring — coin flip */}
      <motion.div
        className="relative rounded-full p-[3px]"
        style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)", transformPerspective: 1000 }}
        animate={{ rotateY: [0, 0, 360, 360] }}
        transition={{ duration: 5, times: [0, 0.7, 0.95, 1], repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-full overflow-hidden w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] lg:w-[420px] lg:h-[420px] bg-[#0c0c10] flex items-center justify-center">
          <Workflow
            className="w-[35%] h-[35%] text-transparent"
            style={{
              stroke: "url(#rf-gradient)",
            }}
            strokeWidth={1.5}
          />
          <svg width="0" height="0">
            <defs>
              <linearGradient id="rf-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>
      {/* Inner shine */}
      <div
        className="absolute inset-[3px] rounded-full pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)" }}
      />
    </div>
  );
}
