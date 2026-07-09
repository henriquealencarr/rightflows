import type { Locale } from "@/lib/i18n";
import {
  MessageCircle,
  FileSearch,
  Phone,
  Target,
  Handshake,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface ServiceTranslation {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  translations: Record<Locale, ServiceTranslation>;
}

export const services: Service[] = [
  {
    id: "whatsapp-agents",
    icon: MessageCircle,
    translations: {
      en: {
        title: "WhatsApp AI Agents",
        description:
          "Speed-to-lead and customer support agents that handle scheduling, orders, and re-engagement on WhatsApp — with zero human intervention.",
      },
      pt: {
        title: "Agentes de IA no WhatsApp",
        description:
          "Agentes de resposta rápida e atendimento que cuidam de agendamento, pedidos e reengajamento no WhatsApp — sem intervenção humana.",
      },
    },
  },
  {
    id: "document-assistants",
    icon: FileSearch,
    translations: {
      en: {
        title: "Document & Knowledge Assistants",
        description:
          "RAG-powered assistants that read your contracts, manuals, and internal docs, and answer questions with the right context every time.",
      },
      pt: {
        title: "Assistentes de Documentos e Conhecimento",
        description:
          "Assistentes com RAG que leem seus contratos, manuais e documentos internos, e respondem perguntas com o contexto certo, sempre.",
      },
    },
  },
  {
    id: "voice-ai",
    icon: Phone,
    translations: {
      en: {
        title: "Voice AI Agents",
        description:
          "Outbound and inbound voice agents that hold real conversations, check availability, and book appointments during the call.",
      },
      pt: {
        title: "Agentes de IA de Voz",
        description:
          "Agentes de voz outbound e inbound que conduzem conversas reais, verificam disponibilidade e agendam compromissos durante a ligação.",
      },
    },
  },
  {
    id: "lead-generation",
    icon: Target,
    translations: {
      en: {
        title: "Lead Generation & Enrichment",
        description:
          "Automated pipelines that scrape, qualify, and enrich leads at scale, delivering ready-to-work lists straight to your team.",
      },
      pt: {
        title: "Geração e Enriquecimento de Leads",
        description:
          "Pipelines automatizados que raspam, qualificam e enriquecem leads em escala, entregando listas prontas para o seu time trabalhar.",
      },
    },
  },
  {
    id: "sdr-crm",
    icon: Handshake,
    translations: {
      en: {
        title: "SDR & Sales Automation",
        description:
          "AI SDRs that qualify and follow up with leads across channels, syncing every touchpoint straight into your CRM in real time.",
      },
      pt: {
        title: "SDR e Automação de Vendas",
        description:
          "SDRs de IA que qualificam e fazem follow-up com leads em vários canais, sincronizando cada interação com seu CRM em tempo real.",
      },
    },
  },
  {
    id: "multi-agent-systems",
    icon: Workflow,
    translations: {
      en: {
        title: "Multi-Agent Systems",
        description:
          "Orchestrated agent systems for complex operations — routing, specialist knowledge bases, and custom interfaces for your team.",
      },
      pt: {
        title: "Sistemas Multi-Agente",
        description:
          "Sistemas de agentes orquestrados para operações complexas — roteamento, bases de conhecimento especializadas e interfaces sob medida para seu time.",
      },
    },
  },
];

export function getServices(locale: Locale) {
  return services.map((s) => ({ id: s.id, icon: s.icon, ...s.translations[locale] }));
}
