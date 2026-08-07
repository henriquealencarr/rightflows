"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";

export function LanguageSwitcher({ locale, className }: { locale: Locale; className?: string }) {
  const pathname = usePathname();

  function hrefFor(target: Locale) {
    const rest = pathname.replace(new RegExp(`^/(${locales.join("|")})`), "") || "/";
    return `/${target}${rest === "/" ? "" : rest}`;
  }

  return (
    <div className={`flex items-center gap-1 font-mono text-sm ${className ?? ""}`}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-zinc-600">/</span>}
          <a
            href={hrefFor(l)}
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
                ? "text-white font-semibold uppercase"
                : "text-zinc-500 hover:text-zinc-300 transition-colors uppercase"
            }
          >
            {l}
          </a>
        </span>
      ))}
    </div>
  );
}
