"use client";

import { useRef, useState, useEffect, RefObject } from "react";

interface BarsGraphicProps {
  watchRef?: RefObject<HTMLElement | null>;
}

export function BarsGraphic({ watchRef }: BarsGraphicProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(0);
  const wasVisible = useRef(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    const setup = () => {
      const target = watchRef?.current ?? innerRef.current;
      if (!target) return;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio >= 0.99) {
            if (hideTimer.current) clearTimeout(hideTimer.current);
            if (!wasVisible.current) {
              wasVisible.current = true;
              setVisible(true);
              setKey((k) => k + 1);
            }
          } else if (entry.intersectionRatio === 0) {
            hideTimer.current = setTimeout(() => {
              wasVisible.current = false;
              setVisible(false);
            }, 400);
          }
        },
        { threshold: [0, 0.99, 1.0] }
      );

      observer.observe(target);
    };

    const timer = setTimeout(setup, 150);
    return () => {
      clearTimeout(timer);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      observer?.disconnect();
    };
  }, [watchRef]);

  return (
    <div ref={innerRef} className="inline-block" style={{ visibility: visible ? "visible" : "hidden" }}>
      <svg key={key} className="w-72" viewBox="0 0 200 220" overflow="visible">
        <g fill="none" stroke="#4a4a5c" strokeWidth="1">
          <line x1="20" y1="20" x2="20" y2="200"/>
          <line x1="20" y1="200" x2="190" y2="200"/>
        </g>
        <rect className="rf-bar" x="40" y="140" width="24" height="60" rx="4" fill="#5a5ab0" style={{ animationDelay: "0s" }}/>
        <rect className="rf-bar" x="80" y="100" width="24" height="100" rx="4" fill="#6f5fc4" style={{ animationDelay: "0.15s" }}/>
        <rect className="rf-bar" x="120" y="60" width="24" height="140" rx="4" fill="#8a5fd8" style={{ animationDelay: "0.3s" }}/>
        <rect className="rf-bar" x="160" y="30" width="24" height="170" rx="4" fill="#a862e8" style={{ animationDelay: "0.45s" }}/>
      </svg>
    </div>
  );
}
