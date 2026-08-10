import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { getCases, getCaseBySlug, getCaseSlugs } from "@/lib/cases";
import { getDictionary, hasLocale, locales, type Locale } from "@/lib/i18n";
import { Nav } from "@/components/nav";
import { Lightbox } from "@/components/lightbox";
import { CalendlyButton } from "@/components/calendly-button";

export function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!hasLocale(rawLocale)) return {};
  const c = getCaseBySlug(slug, rawLocale);
  if (!c) return {};
  const dict = getDictionary(rawLocale);
  return {
    title: `${c.title} ${dict.case.titleSuffix}`,
    description: c.description,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/cases/${slug}`])),
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!hasLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);
  const c = getCaseBySlug(slug, locale);
  if (!c) notFound();

  const cases = getCases(locale);
  const currentIndex = cases.findIndex((x) => x.slug === slug);
  const next = cases[(currentIndex + 1) % cases.length];

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[650px] bg-blue-600/18 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/12 rounded-full blur-[110px]" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-700/10 rounded-full blur-[120px]" />
      </div>

      {/* Nav */}
      <Nav
        locale={locale}
        links={[
          { label: dict.nav.services, href: `/${locale}#services` },
          { label: dict.nav.cases, href: `/${locale}#process` },
          { label: dict.nav.about, href: `/${locale}#about` },
          { label: dict.nav.contact, href: `/${locale}#contact` },
        ]}
        menuFooter={dict.nav.menuFooter}
      />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 py-10 sm:py-20">
        {/* Header */}
        <div className="mb-10 sm:mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Badge variant="outline" className="text-xs font-mono border-zinc-700 text-white">
              {c.category}
            </Badge>
            {c.client && (
              <span className="text-xs font-mono text-zinc-500">{c.client}</span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.05] mb-4 sm:mb-6">
            {c.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10 sm:space-y-14">
            <section>
              <p className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-3 sm:mb-4">{dict.case.overview}</p>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">{c.description}</p>
            </section>

            {c.videos && c.videos.map((id) => (
              <div key={id} className="rounded-2xl overflow-hidden aspect-video">
                <iframe
                  src={`https://player.vimeo.com/video/${id}`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}

            {c.images && c.images.length > 0 && (
              <Lightbox images={c.images} alt={c.title} />
            )}

            <section>
              <p className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-4 sm:mb-6">{dict.case.technicalHighlights}</p>
              <ul className="space-y-4">
                {c.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 sm:gap-4 items-start text-zinc-300">
                    <span
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono mt-0.5"
                      style={{ background: `${c.accentColor}22`, color: c.accentColor }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-base sm:text-lg leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <div className="glass-card gradient-border rounded-2xl p-5 sm:p-6">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">{dict.case.techStack}</p>
              <div className="flex flex-wrap gap-2">
                {c.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <CalendlyButton className="glass-card gradient-border rounded-2xl p-5 sm:p-6 block w-full text-left hover:border-zinc-500 transition-colors">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                {dict.case.ctaTitle}
              </p>
              <p className="text-sm text-white mb-4 sm:mb-5">
                {dict.case.ctaSubtitle}
              </p>
              <span
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-lg font-medium text-sm text-white"
                style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)" }}
              >
                {dict.case.ctaButton}
              </span>
            </CalendlyButton>
          </div>
        </div>

        {/* Next case */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-zinc-800/50">
          <p className="text-base font-mono font-bold text-purple-400 uppercase tracking-widest mb-4">{dict.case.nextCase}</p>
          <Link
            href={`/${locale}/cases/${next.slug}`}
            className="glass-card gradient-border rounded-2xl p-6 sm:p-10 flex items-center justify-between gap-4 sm:gap-6 hover:bg-white/[0.06] transition-all duration-300 group"
          >
            <div>
              <p className="text-xs sm:text-sm font-mono text-purple-400 uppercase tracking-widest mb-1 sm:mb-2">{next.category}</p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{next.title}</h3>
              <p className="text-sm sm:text-base text-white">{next.tagline}</p>
            </div>
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-600 group-hover:text-zinc-300 transition-colors shrink-0"
              fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800/50 px-4 sm:px-8 pt-16 pb-10 sm:pt-12 sm:pb-12 mt-10 sm:mt-20">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <span className="font-mono text-sm sm:text-base text-white mt-6 sm:mt-0">Right<span className="text-white font-semibold">Flows</span></span>
          <span className="font-sans text-[0.8rem] sm:text-[0.95rem] text-white font-bold tracking-wide">{dict.footer.tagline}</span>
        </div>
      </footer>
    </main>
  );
}
