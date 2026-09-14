"use client";

import { useEffect, useRef, useState } from "react";
import { DiagonalFlowBg } from "@/components/diagonal-flow-bg";

const ENTRANCE_DELAY_MS = 220;
const ENTRANCE_DURATION_MS = 3200;

export function HeroFlowBackground() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollRatio = useRef(1);
  const entered = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    function onScroll() {
      const fadeEnd = window.innerHeight;
      scrollRatio.current = 1 - Math.min(1, window.scrollY / fadeEnd);
      if (entered.current && wrapRef.current) {
        wrapRef.current.style.opacity = String(scrollRatio.current);
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const timer = setTimeout(() => {
      entered.current = true;
      if (wrapRef.current) wrapRef.current.style.opacity = String(scrollRatio.current);
    }, ENTRANCE_DELAY_MS);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ opacity: 0, transition: `opacity ${ENTRANCE_DURATION_MS}ms cubic-bezier(0.16,1,0.3,1)` }}
    >
      {isDesktop && <DiagonalFlowBg className="absolute inset-0 w-full h-full opacity-70" />}
    </div>
  );
}
