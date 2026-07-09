"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";

interface NavProps {
  locale: Locale;
  links: { label: string; href: string }[];
  menuFooter: string;
}

export function Nav({ locale, links, menuFooter }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="relative z-50 flex items-center justify-between px-4 sm:px-8 py-5 sm:py-7 max-w-screen-2xl mx-auto">
        <a href={`/${locale}`} className="flex items-center text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 hover:text-white transition-colors">
          Right<span className="gradient-text">Flows</span>
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-8 text-lg font-medium text-zinc-300">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <LanguageSwitcher locale={locale} />
        </div>

        {/* Hamburger button */}
        <button
          className="sm:hidden relative z-[60] flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg text-zinc-300 hover:text-white transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-0.5 w-6 bg-current rounded-full origin-center"
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-current rounded-full"
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-current rounded-full origin-center"
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </button>
      </nav>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#080808]/95 backdrop-blur-xl" />

            {/* Links */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-4xl font-bold text-zinc-300 hover:text-white transition-colors py-4 px-8"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.05 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: 0.05 + links.length * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6"
              >
                <LanguageSwitcher locale={locale} className="text-lg" />
              </motion.div>
            </div>

            {/* Bottom label */}
            <motion.p
              className="relative z-10 text-center font-mono text-xs text-zinc-600 pb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {menuFooter}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
