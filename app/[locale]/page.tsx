import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { getCases } from "@/lib/cases";
import { getServices } from "@/lib/services";
import { getDictionary, hasLocale, type Locale } from "@/lib/i18n";
import { AnimateIn, AnimateInHero, AnimateInStagger, AnimateInCard } from "@/components/animate-in";
import { Nav } from "@/components/nav";
import { HeroVisual } from "@/components/hero-visual";

const stack = [
  "n8n", "Make", "GPT", "Claude", "Gemini",
  "Supabase", "PostgreSQL", "pgvector", "Redis",
  "VAPI", "Playwright", "FastAPI", "Docker",
  "AWS Lambda", "Python", "TypeScript", "React",
  "Meta API", "Airtable", "Notion", "Google Calendar",
  "HubSpot", "Clay", "LangChain", "LangGraph",
];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!hasLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);
  const cases = getCases(locale);
  const services = getServices(locale);

  return (
    <main className="relative overflow-hidden">
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
          { label: dict.nav.services, href: "#services" },
          { label: dict.nav.cases, href: "#cases" },
          { label: dict.nav.about, href: "#about" },
          { label: dict.nav.contact, href: "#contact" },
        ]}
        menuFooter={dict.nav.menuFooter}
      />

      {/* Hero */}
      <section className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 flex items-center" style={{ minHeight: "calc(100vh - 72px)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-12 lg:py-0">

          {/* Text */}
          <div className="text-center lg:text-left">
            <AnimateInHero delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs sm:text-sm font-mono mb-8 sm:mb-10">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                {dict.hero.badge}
              </div>
            </AnimateInHero>

            <AnimateInHero delay={0.22}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-6 sm:mb-8 text-center lg:text-left">
                <span className="block">{dict.hero.headlineLine1}</span>
                <span className="block gradient-text">{dict.hero.headlineLine2}</span>
              </h1>
            </AnimateInHero>

            <AnimateInHero delay={0.36}>
              <p className="text-base sm:text-xl text-zinc-400 leading-relaxed mb-8 sm:mb-12">
                {dict.hero.subhead}
              </p>
            </AnimateInHero>

            <AnimateInHero delay={0.48}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#cases"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:px-10 sm:py-5 rounded-lg font-medium text-base sm:text-lg text-white"
                  style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)" }}
                >
                  {dict.hero.ctaCases}
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=henrique.alencarr@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:px-10 sm:py-5 rounded-lg font-medium text-base sm:text-lg text-zinc-300 border border-zinc-700 hover:border-zinc-500 transition-colors"
                >
                  {dict.hero.ctaContact}
                </a>
              </div>
            </AnimateInHero>
          </div>

          {/* Hero visual — mobile: above text (handled by order), desktop: right column */}
          <AnimateInHero delay={0.3} className="flex items-center justify-center lg:justify-end order-first lg:order-last">
            <HeroVisual />
          </AnimateInHero>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 py-20 sm:py-40">
        <AnimateIn className="mb-10 sm:mb-16 max-w-2xl">
          <p className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-3 sm:mb-4">{dict.services.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{dict.services.heading}</h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">{dict.services.subhead}</p>
        </AnimateIn>

        <AnimateInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <AnimateInCard key={s.id}>
                <div className="glass-card gradient-border rounded-2xl p-6 sm:p-8 flex flex-col gap-4 sm:gap-5 h-full">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-purple-500/10 text-purple-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-white leading-snug">{s.title}</h3>
                  <p className="text-base text-zinc-400 leading-relaxed">{s.description}</p>
                </div>
              </AnimateInCard>
            );
          })}
        </AnimateInStagger>
      </section>

      {/* Cases */}
      <section id="cases" className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 py-20 sm:py-40">
        <AnimateIn className="mb-10 sm:mb-16">
          <p className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-3 sm:mb-4">{dict.cases.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{dict.cases.heading}</h2>
        </AnimateIn>

        <AnimateInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((c) => (
            <AnimateInCard key={c.slug}>
              <Link
                href={`/${locale}/cases/${c.slug}`}
                className="glass-card gradient-border rounded-2xl p-6 sm:p-8 flex flex-col gap-5 sm:gap-6 hover:bg-white/[0.06] transition-all duration-300 group h-full"
              >
                <div className="flex items-start justify-between gap-3">
                  <Badge
                    variant="outline"
                    className="text-xs font-mono border-zinc-700 text-zinc-400"
                  >
                    {c.category}
                  </Badge>
                  <svg
                    className="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 transition-colors shrink-0 mt-0.5"
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">{c.title}</h3>
                  <p className="text-base text-zinc-400 leading-relaxed">{c.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {c.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded bg-zinc-800/80 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {c.stack.length > 4 && (
                    <span className="text-xs font-mono px-3 py-1 rounded bg-zinc-800/80 text-zinc-500">
                      +{c.stack.length - 4}
                    </span>
                  )}
                </div>
              </Link>
            </AnimateInCard>
          ))}
        </AnimateInStagger>
      </section>

      {/* How we work */}
      <section id="process" className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 py-20 sm:py-40">
        <AnimateIn className="mb-10 sm:mb-16">
          <p className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-3 sm:mb-4">{dict.process.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{dict.process.heading}</h2>
        </AnimateIn>

        <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {dict.process.steps.map((step, i) => (
            <AnimateInCard key={step.title}>
              <div className="glass-card rounded-2xl p-6 sm:p-7 h-full">
                <span className="text-sm font-mono text-purple-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-semibold text-white mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            </AnimateInCard>
          ))}
        </AnimateInStagger>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 py-20 sm:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          <AnimateIn>
            <div>
              <p className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-3 sm:mb-4">{dict.about.eyebrow}</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                {dict.about.heading}
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 leading-relaxed">
                {dict.about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15} direction="right">
            <div>
              <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4 sm:mb-5">{dict.about.stackLabel}</p>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm sm:text-base font-mono px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg glass-card text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 py-20 sm:py-40">
        <AnimateIn>
          <div className="glass-card rounded-2xl p-8 sm:p-16 lg:p-24 text-center glow-purple">
            <p className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-4 sm:mb-6">{dict.contact.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              {dict.contact.heading}{" "}
              <span className="gradient-text">{dict.contact.headingHighlight}</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-8 sm:mb-10">
              {dict.contact.subhead}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=henrique.alencarr@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:px-10 sm:py-5 rounded-lg font-medium text-base sm:text-lg text-white"
                style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)" }}
              >
                henrique.alencarr@gmail.com
              </a>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800/50 px-4 sm:px-8 py-10 sm:py-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <span className="font-mono text-sm sm:text-base text-zinc-400">Right<span className="text-white font-semibold">Flows</span></span>
          <span className="font-sans text-[0.8rem] sm:text-[0.95rem] text-zinc-400 font-bold tracking-wide">{dict.footer.tagline}</span>
        </div>
      </footer>
    </main>
  );
}
