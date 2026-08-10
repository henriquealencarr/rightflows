"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  AnimatedMessageCircle,
  AnimatedFileSearch,
  AnimatedPhone,
  AnimatedTarget,
  AnimatedListChecks,
  AnimatedRefreshCw,
  type AnimatedIconProps,
} from "@/components/animated-service-icons";

function IconReveal({
  icon: Icon,
  className,
  strokeWidth,
}: {
  icon: (props: AnimatedIconProps) => React.JSX.Element;
  className?: string;
  strokeWidth?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });
  const [plays, setPlays] = useState(0);
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (inView) {
      hasPlayed.current = true;
      setPlays((p) => p + 1);
    }
  }, [inView]);

  return (
    <div ref={ref} className="inline-flex">
      {hasPlayed.current && <Icon key={plays} className={className} strokeWidth={strokeWidth} />}
    </div>
  );
}

const iconMap: Record<string, (props: AnimatedIconProps) => React.JSX.Element> = {
  "whatsapp-agents": AnimatedMessageCircle,
  "document-assistants": AnimatedFileSearch,
  "voice-ai": AnimatedPhone,
  "lead-generation": AnimatedTarget,
  "qualification-systems": AnimatedListChecks,
  "sdr-crm": AnimatedRefreshCw,
};

interface Service {
  id: string;
  title: string;
  description: string;
}

interface ServicesTabsProps {
  services: Service[];
}

export function ServicesTabs({ services }: ServicesTabsProps) {
  const [active, setActive] = useState(0);
  const current = services[active] ?? services[0];
  const Icon = iconMap[current?.id] ?? AnimatedMessageCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 120, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-[418px_1fr] gap-6 lg:gap-2 items-stretch"
    >
        {/* Mobile: accordion */}
        <div className="flex lg:hidden flex-col gap-2">
          {services.map((s, i) => {
            const ItemIcon = iconMap[s.id] ?? AnimatedMessageCircle;
            const isActive = active === i;
            return (
              <div key={s.id} className="rounded-xl border border-white/10 overflow-hidden">
                <button
                  onClick={() => setActive(isActive ? -1 : i)}
                  className={`w-full text-left px-4 py-4 text-xs font-[family-name:var(--font-syne)] font-bold uppercase tracking-widest transition-colors duration-200 flex items-center justify-between ${
                    isActive ? "text-white bg-white/5" : "text-white/60"
                  }`}
                >
                  {s.title}
                  <span className={`shrink-0 ml-4 text-[10px] transition-all duration-300 ${isActive ? "text-purple-400 opacity-100 rotate-[-90deg]" : "text-zinc-600 opacity-40 rotate-0"}`} style={{ display: "inline-block" }}>◀</span>
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="px-6 pb-10 pt-6 flex flex-col gap-4"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        <div className="flex flex-col items-center gap-4 text-center">
                          <div className="shrink-0 w-24 h-24 rounded-xl border border-white/10 flex items-center justify-center" style={{ background: "rgba(124,58,237,0.08)" }}>
                            <IconReveal icon={ItemIcon} className="w-12 h-12 text-purple-400" strokeWidth={1} />
                          </div>
                          <div>
                            <h3 className="text-[1.155rem] font-semibold text-white mb-3">{s.title}</h3>
                            <p className="text-[1.05rem] text-white leading-relaxed">{s.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop: sidebar + panel */}
        <nav className="hidden lg:flex flex-col border-l border-white/10">
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`relative w-full text-left px-6 py-6 text-sm font-[family-name:var(--font-syne)] font-bold uppercase tracking-widest transition-colors duration-200 flex items-center justify-between gap-3 cursor-pointer ${
                active === i ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {active === i && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute left-0 top-0 h-full w-0.5 bg-purple-400"
                />
              )}
              {s.title}
              <span className={`shrink-0 ml-4 text-[10px] transition-all duration-300 ${active === i ? "text-purple-400 opacity-100" : "opacity-0"}`}>◀</span>
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait" initial={false}>
          {active >= 0 && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex rounded-2xl border border-white/8 overflow-hidden p-16 flex-row gap-10 items-start h-full"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div className="flex-1 min-w-0">
              <h3 className="text-[1.575rem] font-semibold text-white mb-4">{current.title}</h3>
              <p className="text-[1.05rem] text-white leading-relaxed">{current.description}</p>
            </div>
            <div className="shrink-0 w-48 h-48 rounded-2xl border border-white/10 flex items-center justify-center" style={{ background: "rgba(124,58,237,0.08)" }}>
              <IconReveal icon={Icon} className="w-20 h-20 text-purple-400" strokeWidth={1} />
            </div>
          </motion.div>
          )}
        </AnimatePresence>
    </motion.div>
  );
}
