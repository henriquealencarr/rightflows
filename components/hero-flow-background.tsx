"use client";

import { useEffect, useRef, useState } from "react";
import { DiagonalFlowBg } from "@/components/diagonal-flow-bg";

export function HeroFlowBackground() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

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
      const ratio = 1 - Math.min(1, window.scrollY / fadeEnd);
      if (wrapRef.current) wrapRef.current.style.opacity = String(ratio);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      {isDesktop && <DiagonalFlowBg className="absolute inset-0 w-full h-full opacity-70" />}
      <img
        src="/diagonal-flow-static.svg"
        alt=""
        aria-hidden="true"
        className="lg:hidden absolute inset-0 w-full h-full object-cover opacity-35"
      />
    </div>
  );
}
