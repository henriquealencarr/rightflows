import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getCaseSlugs } from "@/lib/cases";

const SITE_URL = "https://rightflows.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getCaseSlugs();

  const homeEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  const caseEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    slugs.map((slug) => ({
      url: `${SITE_URL}/${locale}/cases/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...homeEntries, ...caseEntries];
}
