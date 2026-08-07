"use client";

export function HeroVisual() {
  return (
    <div className="w-full max-w-[440px] lg:max-w-[616px] aspect-[1.55] ml-auto lg:translate-x-12">
      <svg viewBox="0 0 400 300" width="100%" height="100%">
        <defs>
          <filter id="rf-glow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="rf-glow-snake" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="9" result="blur1" />
            <feGaussianBlur in="blur1" stdDeviation="5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <mask id="rf-line-mask">
            <rect x="0" y="0" width="400" height="300" fill="white" />
            <rect x="23" y="143" width="14" height="14" fill="black" />
            <circle cx="115" cy="150" r="7" fill="black" />
            <circle cx="200" cy="150" r="7" fill="black" />
            <circle cx="200" cy="80" r="7" fill="black" />
            <circle cx="200" cy="220" r="7" fill="black" />
            <circle cx="285" cy="80" r="7" fill="black" />
            <circle cx="285" cy="220" r="7" fill="black" />
            <circle cx="370" cy="80" r="7" fill="black" />
            <circle cx="370" cy="220" r="7" fill="black" />
          </mask>
        </defs>

        <g fill="none" stroke="#e8e8ee" strokeWidth="2.5" mask="url(#rf-line-mask)">
          <path d="M 30 150 L 200 150" />
          <path d="M 200 80 L 200 220" />
          <path d="M 200 80 L 370 80" />
          <path d="M 200 220 L 370 220" />
        </g>

        <path
          d="M 30 150 L 200 150 L 200 80 L 370 80"
          fill="none"
          stroke="#e0116f"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="30 3000"
          mask="url(#rf-line-mask)"
          className="rf-fork-a"
        />
        <path
          d="M 30 150 L 200 150 L 200 220 L 370 220"
          fill="none"
          stroke="#e0116f"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="30 3000"
          mask="url(#rf-line-mask)"
          className="rf-fork-b"
        />

        <rect x="22" y="142" width="16" height="16" fill="white" stroke="#e8e8ee" strokeWidth="3" style={{ filter: "url(#rf-glow)" }} />
        <circle cx="115" cy="150" r="8" fill="none" stroke="#e8e8ee" strokeWidth="3" style={{ filter: "url(#rf-glow)" }} />
        <circle cx="200" cy="150" r="8" fill="none" stroke="#e8e8ee" strokeWidth="3" style={{ filter: "url(#rf-glow)" }} />
        <circle cx="200" cy="80" r="8" fill="none" stroke="#e8e8ee" strokeWidth="3" style={{ filter: "url(#rf-glow)" }} />
        <circle cx="200" cy="220" r="8" fill="none" stroke="#e8e8ee" strokeWidth="3" style={{ filter: "url(#rf-glow)" }} />
        <circle cx="285" cy="80" r="8" fill="none" stroke="#e8e8ee" strokeWidth="3" style={{ filter: "url(#rf-glow)" }} />
        <circle cx="285" cy="220" r="8" fill="none" stroke="#e8e8ee" strokeWidth="3" style={{ filter: "url(#rf-glow)" }} />
        <circle cx="370" cy="80" r="8" fill="white" stroke="#e8e8ee" strokeWidth="3" style={{ filter: "url(#rf-glow)" }} />
        <circle cx="370" cy="220" r="8" fill="white" stroke="#e8e8ee" strokeWidth="3" style={{ filter: "url(#rf-glow)" }} />
      </svg>
    </div>
  );
}
