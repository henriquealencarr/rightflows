import type { Locale } from "@/lib/i18n";
import {
  MessageCircle,
  FileSearch,
  Phone,
  Target,
  ListChecks,
  RefreshCw,
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
    id: "lead-generation",
    icon: Target,
    translations: {
      en: {
        title: "Lead Generation & Prospecting",
        description:
          "Automated pipelines that scrape data on potential leads and enrich that data at scale, delivering segmented lists ready for your team to prospect. An AI agent goes further: it takes over prospecting and sends personalized messages to each lead, with no manual outreach from your team.",
      },
      pt: {
        title: "Geração e Prospecção de Leads",
        description:
          "Pipelines automatizados que raspam dados de potenciais leads e enriquecem esses dados em escala, entregando listas segmentadas prontas pro seu time prospectar. Um agente de IA vai além: assume a prospecção e envia mensagens personalizadas pra cada lead, sem seu time precisar disparar manualmente.",
      },
    },
  },
  {
    id: "whatsapp-agents",
    icon: MessageCircle,
    translations: {
      en: {
        title: "AI Agents in Chatbots",
        description:
          "Speed-to-lead or SDR agents that welcome the lead, book appointments, take orders, and re-engage with follow-ups on WhatsApp, Telegram, or any communication channel. Your team monitors, the AI executes, 24/7, no days off.",
      },
      pt: {
        title: "Agentes de IA em Chatbots",
        description:
          "Agentes de resposta rápida ou agentes SDR que recepcionam o lead, qualificam, passam informações do negócio, fazem agendamentos, anotam dados do cliente e reengajam com follow-ups no WhatsApp, Telegram ou qualquer canal de comunicação. Seu time monitora, a IA executa, 24/7, sem folga.",
      },
    },
  },
  {
    id: "sdr-crm",
    icon: RefreshCw,
    translations: {
      en: {
        title: "CRM Automation",
        description:
          "AI agents that fill in the dashboard fields, move tasks across the kanban with no one lifting a finger, generate weekly reports, and sync every interaction in real time. Your pipeline always up to date, without your team touching a single row.",
      },
      pt: {
        title: "Automação de CRM",
        description:
          "Seu Dashboard 100% automatizado sem você precisar apertar um único botão. Agentes de IA que preenchem os campos do dashboard, movem tarefas no kanban sem depender de ninguém, geram relatórios semanais e sincronizam cada interação em tempo real. Seu pipeline sempre atualizado, sem seu time precisar tocar em uma linha.",
      },
    },
  },
  {
    id: "qualification-systems",
    icon: ListChecks,
    translations: {
      en: {
        title: "Qualification Systems",
        description:
          "AI-driven qualification flows that assess a lead's FIT: company size, industry, the person's role, whether they use the right tools, whether they likely have budget. An objective analysis of how well this lead matches your ICP, the ideal customer profile, that plugs into any sales flow you already have.",
      },
      pt: {
        title: "Sistemas de Qualificação",
        description:
          "Fluxos de qualificação com IA que avaliam o FIT do lead: tamanho da empresa, setor, cargo da pessoa, se usa as ferramentas certas, se tem orçamento provável. Uma análise objetiva de quanto esse lead se encaixa no seu ICP, o perfil de cliente ideal, e que se integra a qualquer fluxo comercial que você já tenha. Ideal para outbound.",
      },
    },
  },
  {
    id: "document-assistants",
    icon: FileSearch,
    translations: {
      en: {
        title: "Knowledge & Document Assistants",
        description:
          "Assistants that read your internal documents, contracts, manuals, tutorials, and regulations, and answer any question on the spot, with the right context. Ideal for departments dealing with a lot of scattered information that need fast answers, not manual search.",
      },
      pt: {
        title: "Assistentes de Equipes e Dados (RAG)",
        description:
          "Assistentes que leem seus documentos internos e informações externas usando tecnologia de RAG (Retrieval-Augmented Generation) e respondem qualquer pergunta na hora, com o contexto certo. Ideal pra departamentos que lidam com muita informação espalhada e precisam de resposta rápida, não de busca manual.",
      },
    },
  },
  {
    id: "voice-ai",
    icon: Phone,
    translations: {
      en: {
        title: "AI Voice Agents",
        description:
          "Outbound and inbound voice agents that hold real conversations, check availability, and book appointments during the call itself. Your company calls first or receives the call. The agent runs the conversation the same way either way.",
      },
      pt: {
        title: "Agentes de IA de Voz",
        description:
          "Agentes de voz outbound e inbound que conduzem conversas reais, verificam disponibilidade e agendam compromissos durante a própria ligação. Sua empresa liga primeiro ou recebe a chamada. O agente conduz a conversa do mesmo jeito.",
      },
    },
  },
];

export function getServices(locale: Locale) {
  return services.map((s) => ({ id: s.id, icon: s.icon, ...s.translations[locale] }));
}
