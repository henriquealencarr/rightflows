"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, PenTool, Rocket, GraduationCap } from "lucide-react";

const stepIcons = [Search, PenTool, Rocket, GraduationCap];

interface Step {
  title: string;
  description: string;
}

interface ProcessAccordionProps {
  steps: Step[];
  heading: string;
  eyebrow: string;
}

export function ProcessAccordion({ steps, heading, eyebrow }: ProcessAccordionProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="mb-10 sm:mb-16 text-center lg:text-left">
        <motion.p
          initial={{ opacity: 0, y: 70, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-3 sm:mb-4"
        >{eyebrow}</motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[1.75rem] sm:text-[2.1rem] lg:text-[2.85rem] font-bold leading-tight"
        >{heading}</motion.h2>
      </div>

      {/* Mobile: vertical accordion */}
      <motion.div
        initial={{ opacity: 0, y: 120, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col border border-white/10 rounded-2xl overflow-hidden lg:hidden"
      >
        {steps.map((step, i) => {
          const StepIcon = stepIcons[i];
          const isActive = active === i;
          return (
            <div
              key={step.title}
              onClick={() => setActive(i)}
              className={`relative flex flex-col cursor-pointer border-b border-white/10 last:border-b-0 transition-colors duration-300 ${isActive ? "bg-white/4" : "bg-transparent"}`}
            >
              <div className="flex items-center gap-4 px-5 py-4">
                <span className="text-purple-400 font-mono text-2xl font-bold shrink-0 leading-none w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`font-semibold text-[1.05rem] leading-snug flex-1 ${isActive ? "text-white" : "text-white"}`}>
                  {step.title}
                </span>
                <StepIcon className={`w-5 h-5 shrink-0 transition-colors ${isActive ? "text-purple-400" : "text-zinc-600"}`} strokeWidth={1.5} />
              </div>
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
                    <p className="text-[1.05rem] text-white leading-relaxed px-5 pt-2 pb-14">{step.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className={`absolute bottom-0 left-0 h-0.5 w-full bg-purple-400 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />
            </div>
          );
        })}
      </motion.div>

      {/* Desktop: horizontal accordion */}
      <motion.div
        initial={{ opacity: 0, y: 120, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:flex flex-row border border-white/10 rounded-2xl overflow-hidden"
        style={{ height: 420 }}
      >
        {steps.map((step, i) => {
          const StepIcon = stepIcons[i];
          return (
          <div
            key={step.title}
            onMouseEnter={() => setActive(i)}
            className={`relative flex flex-col cursor-pointer border-r border-white/10 last:border-r-0 overflow-hidden min-w-0 transition-all duration-500 ease-in-out ${
              active === i ? "bg-white/4" : "bg-transparent hover:bg-white/2"
            }`}
            style={{ flex: active === i ? 4 : 0.7 }}
          >
            <div className="flex items-center gap-4 p-8 h-24 shrink-0">
              <span className="text-purple-400 font-mono text-5xl font-bold shrink-0 leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              {active === i && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25, delay: 0.2 }}
                  className="font-semibold text-[1.65rem] leading-snug text-white"
                >
                  {step.title}
                </motion.span>
              )}
            </div>
            {active === i && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="px-8 pb-8 flex-1 flex flex-col justify-between"
              >
                <p className="text-[1.05rem] text-white leading-relaxed max-w-sm">{step.description}</p>
              </motion.div>
            )}
            {active === i && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.25 }}
                className="absolute top-6 right-6 w-[68px] h-[68px] rounded-2xl flex items-center justify-center border border-purple-500/20 bg-purple-600/15"
              >
                <StepIcon className="w-[34px] h-[34px] text-purple-400" strokeWidth={1.25} />
              </motion.div>
            )}
            <div className={`absolute bottom-0 left-0 h-0.5 w-full bg-purple-400 transition-opacity duration-300 ${active === i ? "opacity-100" : "opacity-0"}`} />
          </div>
          );
        })}
      </motion.div>
    </div>
  );
}
