import type { SVGProps } from "react";

export interface AnimatedIconProps extends SVGProps<SVGSVGElement> {
  strokeWidth?: number;
}

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function AnimatedMessageCircle({ strokeWidth = 1.75, style, ...props }: AnimatedIconProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} style={{ transformOrigin: "12px 12px", animation: "mc-pop 0.4s cubic-bezier(.2,.9,.3,1) 0.05s both", ...style }} {...props}>
      <path
        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
        pathLength="1"
        style={{ strokeDasharray: "1 1", animation: "mc-draw 0.6s ease-out 0.15s both" }}
      />
    </svg>
  );
}

export function AnimatedFileSearch({ strokeWidth = 1.75, style, ...props }: AnimatedIconProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} style={style} {...props}>
      <path
        d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
        pathLength="1"
        style={{ strokeDasharray: "1 1", animation: "fs-draw 0.6s ease-out 0.05s both" }}
      />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" style={{ opacity: 0, animation: "fs-fade 0.3s ease-out 0.55s both" }} />
      <circle cx="11.5" cy="14.5" r="2.5" style={{ transformOrigin: "11.5px 14.5px", opacity: 0, animation: "fs-pop 0.35s cubic-bezier(.2,.9,.3,1) 0.75s both" }} />
      <path d="M13.3 16.3 15 18" pathLength="1" style={{ strokeDasharray: "1 1", animation: "fs-draw 0.2s ease-out 1.05s both" }} />
    </svg>
  );
}

export function AnimatedPhone({ strokeWidth = 1.75, style, ...props }: AnimatedIconProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} style={{ transformOrigin: "12px 12px", animation: "ph-ring 0.9s ease-in-out 0.5s both", ...style }} {...props}>
      <path
        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        style={{ opacity: 0, animation: "ph-pop 0.45s cubic-bezier(.2,.9,.3,1) 0.05s both" }}
      />
    </svg>
  );
}

export function AnimatedTarget({ strokeWidth = 1.75, style, ...props }: AnimatedIconProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} style={style} {...props}>
      <circle cx="12" cy="12" r="10" style={{ transformOrigin: "12px 12px", animation: "tg-in 0.5s cubic-bezier(.2,.9,.3,1) 0s both" }} />
      <circle cx="12" cy="12" r="6" style={{ transformOrigin: "12px 12px", animation: "tg-in 0.5s cubic-bezier(.2,.9,.3,1) 0.15s both" }} />
      <circle cx="12" cy="12" r="2" style={{ transformOrigin: "12px 12px", animation: "tg-in 0.5s cubic-bezier(.2,.9,.3,1) 0.3s both" }} />
    </svg>
  );
}

export function AnimatedListChecks({ strokeWidth = 1.75, style, ...props }: AnimatedIconProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} style={style} {...props}>
      <path d="m3 7 2 2 4-4" pathLength="1" style={{ strokeDasharray: "1 1", animation: "lc-draw 0.3s ease-out 0.05s both" }} />
      <path d="M13 5h8" pathLength="1" style={{ strokeDasharray: "1 1", animation: "lc-draw 0.3s ease-out 0.3s both" }} />
      <path d="m3 17 2 2 4-4" pathLength="1" style={{ strokeDasharray: "1 1", animation: "lc-draw 0.3s ease-out 0.55s both" }} />
      <path d="M13 12h8" pathLength="1" style={{ strokeDasharray: "1 1", animation: "lc-draw 0.3s ease-out 0.8s both" }} />
      <path d="M13 19h8" pathLength="1" style={{ strokeDasharray: "1 1", animation: "lc-draw 0.3s ease-out 1.05s both" }} />
    </svg>
  );
}

export function AnimatedRefreshCw({ strokeWidth = 1.75, style, ...props }: AnimatedIconProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} style={{ transformOrigin: "center", transformBox: "fill-box", animation: "rc-spin 1.3s ease-out 0s 1 both", ...style }} {...props}>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" pathLength="1" style={{ strokeDasharray: "1 1", animation: "rc-draw 0.7s ease-out 0.1s both" }} />
      <path d="M21 3v5h-5" pathLength="1" style={{ strokeDasharray: "1 1", animation: "rc-draw 0.3s ease-out 0.75s both" }} />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" pathLength="1" style={{ strokeDasharray: "1 1", animation: "rc-draw 0.7s ease-out 0.35s both" }} />
      <path d="M8 16H3v5" pathLength="1" style={{ strokeDasharray: "1 1", animation: "rc-draw 0.3s ease-out 1s both" }} />
    </svg>
  );
}
