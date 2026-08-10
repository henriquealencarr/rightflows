import Link from "next/link";
import { Users, BarChart2, Zap } from "lucide-react";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { getCases } from "@/lib/cases";
import { getServices } from "@/lib/services";
import { getDictionary, hasLocale, type Locale } from "@/lib/i18n";
import { AnimateIn, AnimateInHero, AnimateInStagger, AnimateInCard, AnimateInH2 } from "@/components/animate-in";
import { ServicesTabs } from "@/components/services-tabs";
import { NumbersSection } from "@/components/numbers-section";
import { LogoCarousel } from "@/components/logo-carousel";
import { CalendlyButton } from "@/components/calendly-button";
import { CalendlyInline } from "@/components/calendly-inline";
import { ProcessAccordion } from "@/components/process-accordion";
import { Nav } from "@/components/nav";
import { HeroVisual } from "@/components/hero-visual";
import { StackGraphic } from "@/components/stack-graphic";

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
    <main className="relative overflow-x-hidden">
      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[650px] bg-blue-600/18 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/12 rounded-full blur-[110px]" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-700/10 rounded-full blur-[120px]" />
      </div>

      {/* Nav */}
      <Nav
        locale={locale}
        links={[
          { label: dict.nav.services, href: "#services" },
          { label: dict.nav.cases, href: "#process" },
          { label: dict.nav.about, href: "#about" },
          { label: dict.nav.contact, href: "#contact" },
        ]}
        menuFooter={dict.nav.menuFooter}
      />

      {/* Hero */}
      <section className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 flex items-start lg:items-center" style={{ minHeight: "calc(100vh - 72px)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center w-full pt-32 pb-2 lg:py-0">

          {/* Text */}
          <div className="text-center lg:text-left">
            <AnimateInHero delay={0.22}>
              <h1 className="text-[1.974rem] sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-6 sm:mb-8 text-center lg:text-left">
                <span className="block">
                  {dict.hero.headlineLine1}
                </span>
                <span className="block lg:whitespace-nowrap">
                  <span className="gradient-text-gold italic pr-2">{dict.hero.headlineLine2}</span>
                </span>
              </h1>
            </AnimateInHero>

            <AnimateInHero delay={0.36}>
              <p className="text-[1.05rem] sm:text-[1.31rem] text-white leading-relaxed mb-12 sm:mb-12">
                {locale === "pt" ? (
                  <>
                    Prospecção, qualificação e atendimento, tudo com IA.
                    <br className="hidden lg:block" />{" "}
                    Sua equipe recebe o lead pronto pra fechar.
                  </>
                ) : (
                  <>
                    Prospecting, qualification, and support, all with AI.
                    <br className="hidden lg:block" />{" "}
                    Your team gets the lead ready to close.
                  </>
                )}
              </p>
            </AnimateInHero>

            <AnimateInHero delay={0.48}>
              <div className="flex justify-center lg:justify-start">
                <CalendlyButton
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:px-10 sm:py-5 rounded-lg font-medium text-lg sm:text-xl text-white"
                  style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)" }}
                >
                  {dict.hero.ctaContact}
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </CalendlyButton>
              </div>
            </AnimateInHero>
          </div>

          {/* Hero visual — mobile: above text (handled by order), desktop: right column */}
          <AnimateInHero delay={0.3} className="flex items-center justify-center lg:justify-end order-last lg:order-last px-8 sm:px-16 lg:px-0 mt-6 lg:mt-0">
            <HeroVisual />
          </AnimateInHero>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 py-4 sm:py-40">
        <div className="mb-10 sm:mb-16 max-w-2xl text-center lg:text-left">
          <AnimateIn delay={0}>
            <p className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-3 sm:mb-4">{dict.services.eyebrow}</p>
          </AnimateIn>
          <AnimateInH2 delay={0.1} className="text-[1.75rem] sm:text-[2.1rem] lg:text-[2.85rem] font-bold leading-tight">{dict.services.heading}</AnimateInH2>
        </div>
        <AnimateIn delay={0.15}>
          <ServicesTabs
            services={services.map(({ id, title, description }) => ({ id, title, description }))}
          />
        </AnimateIn>
      </section>

      {/* How we work */}
      <section id="process" className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 pt-48 pb-20 sm:py-40">
        <AnimateIn>
          <ProcessAccordion
            steps={dict.process.steps}
            heading={dict.process.heading}
            eyebrow={dict.process.eyebrow}
          />
        </AnimateIn>
      </section>

      {/* Scenario */}
      <section className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 pt-32 pb-20 sm:py-40">
        <AnimateIn className="mb-10 sm:mb-16 max-w-3xl text-center lg:text-left">
          <p className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-3 sm:mb-4">{dict.scenario.eyebrow}</p>
          <AnimateInH2 className="text-[1.75rem] sm:text-[2.1rem] lg:text-[2.85rem] font-bold leading-tight">{dict.scenario.heading}</AnimateInH2>
        </AnimateIn>

        <AnimateInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {dict.scenario.cards.map((card, i) => {
            const Icon = [Users, BarChart2, Zap][i];
            return (
              <AnimateInCard key={card.title}>
                <div className="glass-card rounded-2xl p-6 sm:p-8 h-full flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
                  <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-purple-600/25 text-purple-300 border border-purple-500/20">
                    <Icon className="w-[22px] h-[22px]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[1.05rem] sm:text-[1.18rem] font-semibold text-white">{card.title}</h3>
                  <p className="text-[1.05rem] text-white leading-relaxed">{card.description}</p>
                </div>
              </AnimateInCard>
            );
          })}
        </AnimateInStagger>

        <AnimateIn delay={0.2} className="flex justify-center">
          <CalendlyButton
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-lg text-white"
            style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)" }}
          >
            {dict.scenario.cta}
          </CalendlyButton>
        </AnimateIn>
      </section>

      {/* Numbers */}
      <section className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 py-20 sm:py-40">
        <AnimateIn className="mb-14 sm:mb-20">
          <LogoCarousel />
        </AnimateIn>
        <NumbersSection stats={dict.numbers.stats} />
      </section>


      {/* About */}
      <section id="about" className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 py-20 sm:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          <div className="text-center lg:text-left">
            <AnimateIn delay={0}>
              <p className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-3 sm:mb-4">{dict.about.eyebrow}</p>
            </AnimateIn>
            <AnimateInH2 delay={0.1} className="text-[1.75rem] sm:text-[2.1rem] lg:text-[2.85rem] font-bold leading-tight mb-8 sm:mb-8">
              {dict.about.heading}
            </AnimateInH2>
            <AnimateIn delay={0.2}>
              <div className="space-y-5 text-[1.05rem] sm:text-[1.18rem] text-white leading-relaxed">
                {dict.about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.15} className="hidden lg:block">
            <StackGraphic />
          </AnimateIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 py-20 sm:py-40">
        <AnimateIn>
          <div className="glass-card rounded-2xl pt-[4.4rem] sm:pt-[6.6rem] lg:pt-[8.8rem] px-8 sm:px-16 lg:px-24 pb-0 text-center glow-purple">
            <p className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-4 sm:mb-6">{dict.contact.eyebrow}</p>
            <AnimateInH2 className="text-[1.75rem] sm:text-[2.1rem] lg:text-[2.85rem] font-bold leading-tight mb-6 sm:mb-6">
              {dict.contact.heading}{" "}
              <span className="gradient-text">{dict.contact.headingHighlight}</span>
            </AnimateInH2>
            <p className="text-[1.05rem] sm:text-[1.18rem] text-white max-w-xl lg:max-w-none mx-auto mb-12 sm:mb-4 lg:mb-0 lg:whitespace-nowrap">
              {dict.contact.subhead}
            </p>
            <CalendlyInline />
          </div>
        </AnimateIn>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800/50 px-4 sm:px-8 pt-16 pb-10 sm:pt-12 sm:pb-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <span className="font-mono text-sm sm:text-base text-white mt-6 sm:mt-0">Right<span className="text-white font-semibold">Flows</span></span>
          <span className="font-sans text-[0.8rem] sm:text-[0.95rem] text-white font-bold tracking-wide">{dict.footer.tagline}</span>
        </div>
      </footer>
    </main>
  );
}
