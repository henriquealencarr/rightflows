import { en } from "@/lib/dictionaries/en";
import { pt } from "@/lib/dictionaries/pt";
import type { Dictionary } from "@/lib/dictionaries/types";

export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const dictionaries: Record<Locale, Dictionary> = { en, pt };

export type { Dictionary };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
