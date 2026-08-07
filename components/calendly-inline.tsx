"use client";

const CALENDLY_URL = "https://calendly.com/henrique-alencarr/30min";

export function CalendlyInline() {
  return (
    <div
      className="calendly-inline-widget rounded-2xl overflow-hidden"
      data-url={CALENDLY_URL}
      style={{ width: "100%", minWidth: 320, height: 700, marginBottom: -140 }}
    />
  );
}
