export interface Dictionary {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    logo: string;
    services: string;
    cases: string;
    about: string;
    contact: string;
    menuFooter: string;
  };
  hero: {
    badge: string;
    headlineLine1: string;
    headlineLine2: string;
    subhead: string;
    ctaCases: string;
    ctaContact: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    subhead: string;
  };
  cases: {
    eyebrow: string;
    heading: string;
  };
  process: {
    eyebrow: string;
    heading: string;
    steps: { title: string; description: string }[];
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    stackLabel: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    headingHighlight: string;
    subhead: string;
  };
  footer: {
    tagline: string;
  };
  case: {
    overview: string;
    technicalHighlights: string;
    techStack: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    nextCase: string;
    titleSuffix: string;
  };
}
