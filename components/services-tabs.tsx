"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Bot, UserRound } from "lucide-react";
import {
  AnimatedMessageCircle,
  AnimatedFileSearch,
  AnimatedPhone,
  AnimatedTarget,
  AnimatedListChecks,
  AnimatedRefreshCw,
  AnimatedMessagesSquare,
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
  "meeting-assistants": AnimatedMessagesSquare,
};

interface Service {
  id: string;
  title: string;
  lead?: string;
  description?: string;
  sections?: { icon?: "agent" | "seller"; intro?: string; bullets: string[] }[];
}

const sectionIconMap = { agent: Bot, seller: UserRound };

// Bullets written as "Label: text" get the label in bold.
function BulletText({ text }: { text: string }) {
  const i = text.indexOf(": ");
  if (i === -1) return <span>{text}</span>;
  return (
    <span>
      <strong className="font-semibold">{text.slice(0, i + 1)}</strong>
      {text.slice(i + 1)}
    </span>
  );
}

function ServiceSections({ sections }: { sections?: Service["sections"] }) {
  if (!sections?.length) return null;
  return (
    <div className="flex flex-col gap-4 text-left">
      {sections.map((section, si) => {
        const SectionIcon = section.icon ? sectionIconMap[section.icon] : null;
        return (
        <div
          key={si}
          className="rounded-2xl border border-white/8 p-6 sm:p-8"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          {(SectionIcon || section.intro) && (
            <div className="flex items-start gap-4 mb-4">
              {SectionIcon && (
                <div
                  className="shrink-0 w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center"
                  style={{ background: "rgba(124,58,237,0.08)" }}
                >
                  <SectionIcon className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
                </div>
              )}
              {section.intro && (
                <p className="text-[1.05rem] text-white leading-relaxed">{section.intro}</p>
              )}
            </div>
          )}
          <ul className={`flex flex-col gap-3 ${SectionIcon ? "sm:pl-[3.75rem]" : ""}`}>
            {section.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-[1.05rem] text-white leading-relaxed">
                <span className="mt-[0.6em] shrink-0 w-1.5 h-1.5 rounded-full bg-purple-400" />
                <BulletText text={b} />
              </li>
            ))}
          </ul>
        </div>
        );
      })}
    </div>
  );
}

interface ServicesTabsProps {
  services: Service[];
}

export function ServicesTabs({ services }: ServicesTabsProps) {
  const [active, setActive] = useState(0);
  const current = services[active] ?? services[0];
  const Icon = iconMap[current?.id] ?? AnimatedMessageCircle;

  function handleAccordionClick(i: number) {
    setActive(active === i ? -1 : i);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 120, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-[418px_1fr] gap-6 lg:gap-2 items-stretch"
    >
        {/* Mobile: accordion */}
        <motion.div layout className="flex lg:hidden flex-col gap-2">
          {services.map((s, i) => {
            const ItemIcon = iconMap[s.id] ?? AnimatedMessageCircle;
            const isActive = active === i;
            return (
              <motion.div layout key={s.id} className="relative rounded-xl border border-white/10 overflow-hidden">
                <div className={`absolute bottom-0 left-0 h-0.5 w-full bg-purple-400 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />
                <button
                  onClick={() => handleAccordionClick(i)}
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
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
                            {s.lead && <p className="text-[1.15rem] font-semibold italic text-white leading-snug mb-8">{s.lead}</p>}
                            {s.description && <p className="text-[1.05rem] text-white leading-relaxed mb-5">{s.description}</p>}
                            <ServiceSections sections={s.sections} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

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
            className="hidden lg:flex rounded-2xl border border-white/8 overflow-hidden p-16 flex-col h-full"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div className="flex flex-row gap-10 items-start">
              <div className="flex-1 min-w-0">
                <h3 className="text-[1.575rem] font-semibold text-white mb-4">{current.title}</h3>
                {current.lead && <p className="text-[1.22rem] font-semibold italic text-white leading-snug mb-8">{current.lead}</p>}
                {current.description && <p className="text-[1.05rem] text-white leading-relaxed mb-5">{current.description}</p>}
              </div>
              <div className="shrink-0 -mt-8 w-36 h-36 rounded-2xl border border-white/10 flex items-center justify-center" style={{ background: "rgba(124,58,237,0.08)" }}>
                <IconReveal icon={Icon} className="w-14 h-14 text-purple-400" strokeWidth={1} />
              </div>
            </div>
            {/* Sections span the full panel width, below the title row and icon. */}
            <ServiceSections sections={current.sections} />
          </motion.div>
          )}
        </AnimatePresence>
    </motion.div>
  );
}
