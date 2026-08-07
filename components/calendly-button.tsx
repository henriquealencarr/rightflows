"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

const CALENDLY_URL = "https://calendly.com/henrique-alencarr/30min";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function CalendlyButton({ children, className, ...props }: CalendlyButtonProps) {
  return (
    <button
      type="button"
      className={`cursor-pointer ${className ?? ""}`}
      onClick={() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })}
      {...props}
    >
      {children}
    </button>
  );
}
