"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";

const flags: Record<Locale, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
};

export function LanguageSwitcher({ locale, className }: { locale: Locale; className?: string }) {
  const pathname = usePathname();

  function hrefFor(target: Locale) {
    const rest = pathname.replace(new RegExp(`^/(${locales.join("|")})`), "") || "/";
    return `/${target}${rest === "/" ? "" : rest}`;
  }

  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      {locales.map((l) => (
        <a
          key={l}
          href={hrefFor(l)}
          aria-label={l}
          onClick={(e) => {
            document.cookie = `NEXT_LOCALE=${l};path=/;max-age=${60 * 60 * 24 * 365}`;
            const hash = window.location.hash;
            if (hash) {
              e.preventDefault();
              window.location.href = `${hrefFor(l)}${hash}`;
            }
          }}
          className={
            l === locale
              ? "text-base leading-none opacity-100"
              : "text-base leading-none opacity-50 hover:opacity-80 transition-opacity"
          }
        >
          {flags[l]}
        </a>
      ))}
    </div>
  );
}
