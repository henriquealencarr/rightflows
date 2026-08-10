"use client";

import { useRef } from "react";
import { AnimateIn } from "@/components/animate-in";
import { BarsGraphic } from "@/components/bars-graphic";

interface Stat { value: string; label: string }

interface NumbersSectionProps {
  stats: Stat[];
}

export function NumbersSection({ stats }: NumbersSectionProps) {
  const tableRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0">
      <AnimateIn className="hidden lg:block lg:flex-1">
        <BarsGraphic watchRef={tableRef} />
      </AnimateIn>

      <AnimateIn delay={0.15} className="lg:flex-none lg:w-[60%]">
        <div ref={tableRef} className="grid grid-cols-2 divide-x divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3 px-5 py-6 sm:px-10 sm:py-10 text-center sm:text-left">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-none sm:w-40 shrink-0">{stat.value}</span>
              <span className="text-sm sm:text-[1.1rem] lg:text-[1.26rem] text-white whitespace-nowrap">{stat.label}</span>
            </div>
          ))}
        </div>
      </AnimateIn>
    </div>
  );
}
