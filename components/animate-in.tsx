"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function AnimateIn({ children, className, delay = 0, direction = "up" }: AnimateInProps) {
  const initial =
    direction === "up"
      ? { opacity: 0, y: 70, filter: "blur(4px)" }
      : direction === "left"
      ? { opacity: 0, x: -70, filter: "blur(4px)" }
      : { opacity: 0, x: 70, filter: "blur(4px)" };

  const animate =
    direction === "up"
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 1, x: 0, filter: "blur(0px)" };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function AnimateInH2({ children, className, delay = 0.1 }: AnimateInProps) {
  return (
    <motion.h2
      className={className}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.h2>
  );
}

export function AnimateInStagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimateInHero({ children, className, delay = 0 }: AnimateInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function AnimateInCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95, filter: "blur(4px)" },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
