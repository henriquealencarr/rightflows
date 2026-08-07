"use client";

export function StackGraphic() {
  return (
    <div className="flex items-center justify-center lg:justify-end">
      <style>{`
        @keyframes rf-floatpar {
          0%   { offset-distance: 0%;   opacity: 0; }
          10%, 90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
      `}</style>
      <svg className="w-full max-w-[680px]" viewBox="0 0 400 300">
        <defs>
          <linearGradient id="rf-g1a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1d4ed8"/>
            <stop offset="100%" stopColor="#3b82f6"/>
          </linearGradient>
        </defs>

        {/* linhas base */}
        <g fill="none" stroke="#4a4a5c" strokeWidth="1.5">
          <path d="M 60 150 L 160 90" />
          <path d="M 160 90 L 260 150" />
          <path d="M 260 150 L 340 90" />
          <path d="M 160 90 L 160 210" />
          <path d="M 260 150 L 260 230" />
          <path d="M 60 150 L 60 230" />
        </g>

        {/* linhas com gradiente (caminho principal) */}
        <g fill="none" stroke="url(#rf-g1a)" strokeWidth="2.5">
          <path d="M 60 150 L 160 90" />
          <path d="M 160 90 L 260 150" />
          <path d="M 260 150 L 340 90" />
        </g>

        {/* nós */}
        <circle cx="60" cy="150" r="5" fill="#e8e8ee"/>
        <circle cx="160" cy="90" r="7" fill="url(#rf-g1a)"/>
        <circle cx="260" cy="150" r="7" fill="url(#rf-g1a)"/>
        <circle cx="340" cy="90" r="5" fill="#e8e8ee"/>
        <circle cx="160" cy="210" r="5" fill="#e8e8ee"/>
        <circle cx="260" cy="230" r="5" fill="#e8e8ee"/>
        <circle cx="60" cy="230" r="5" fill="#e8e8ee"/>

        {/* partículas viajando */}
        <circle r="4" fill="#7ca8f0" style={{ offsetPath: "path('M 60 150 L 160 90')", animation: "rf-floatpar 2.4s linear infinite" }}/>
        <circle r="4" fill="#7ca8f0" style={{ offsetPath: "path('M 160 90 L 260 150')", animation: "rf-floatpar 2.4s linear infinite 0.8s" }}/>
        <circle r="4" fill="#7ca8f0" style={{ offsetPath: "path('M 260 150 L 340 90')", animation: "rf-floatpar 2.4s linear infinite 1.6s" }}/>
      </svg>
    </div>
  );
}
