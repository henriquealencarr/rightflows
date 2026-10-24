import type { Locale } from "@/lib/i18n";
import {
  MessageCircle,
  FileSearch,
  Phone,
  Target,
  ListChecks,
  RefreshCw,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";

export interface ServiceTranslation {
  title: string;
  lead?: string;
  description?: string;
  sections?: ServiceSection[];
}

export interface ServiceSection {
  label?: string;
  icon?: "send" | "plug";
  intro?: string;
  bullets?: string[];
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
        title: "AI Agents in Chatbots",
        description:
          "Speed-to-lead or SDR agents that welcome the lead, qualify, share business information, book appointments, log customer data, and re-engage with follow-ups on WhatsApp, Telegram, or any communication channel. Your team monitors, the AI executes, 24/7, no days off.",
      },
      pt: {
        title: "Qualificação e Atendimento",
        lead: "Quem responde primeiro, vende mais. Nosso agente de IA pesquisa, qualifica e inicia uma conversa com o lead em menos de 1 minuto.",
        sections: [
          {
            label: "Com o lead",
            intro:
              "Antes da primeira mensagem, o agente já pesquisou o lead e avaliou se o perfil dele tem Fit com o seu negócio. Depois manda um áudio personalizado no WhatsApp ou no canal que você preferir, pergunta só o que falta para qualificar, marca a reunião com o próximo vendedor da fila e faz o follow-up sozinho se o lead sumir.",
          },
          {
            label: "No seu CRM",
            intro:
              "O vendedor recebe o lead com o Fit calculado (cargo, setor, tamanho da empresa e os critérios do seu nicho) e tudo o que ele respondeu organizado numa nota só. A negociação avança de etapa no funil automaticamente, do primeiro contato à reunião marcada.",
          },
        ],
      },
    },
  },
  {
    id: "lead-generation",
    icon: Target,
    translations: {
      en: {
        title: "Lead Generation & Prospecting",
        description:
          "Automated pipelines that scrape data on potential leads and enrich that data at scale, delivering segmented lists ready for your team to prospect. An AI agent goes further: creates different personalized messages for each lead, with no need for your team to write anything from scratch.",
      },
      pt: {
        title: "Geração e Prospecção de Leads",
        lead: "Não espere o cliente ideal te encontrar. Vá até ele com a mensagem certa.",
        sections: [
          {
            label: "Do perfil ao envio",
            icon: "send",
            intro:
              "Encontramos os decisores com o perfil do seu cliente ideal e entregamos a lista limpa no seu CRM, com contato completo e uma mensagem para cada um. Você aprova e nós disparamos, ou sua equipe envia.",
          },
          {
            label: "Prefere rodar internamente?",
            icon: "plug",
            intro:
              "No plug and play, instalamos no seu ambiente um sistema que gera as listas e as mensagens prontas. Seu time usa quando quiser, sem depender da gente.",
          },
        ],
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
          "Your dashboard 100% automated without you having to press a single button. AI agents that fill in the dashboard fields, move tasks across the kanban with no one lifting a finger, generate weekly reports, and sync every interaction in real time. Your pipeline always up to date, without your team touching a single row.",
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
          "AI-driven qualification flows that assess a lead's FIT: company size, industry, the person's role, whether they use the right tools, whether they likely have budget. An objective analysis of how well this lead matches your ICP, the ideal customer profile, that plugs into any sales flow you already have. Ideal for outbound.",
      },
      pt: {
        title: "Sistemas de Qualificação",
        description:
          "Fluxos de qualificação com IA que avaliam o FIT do lead: tamanho da empresa, setor, cargo da pessoa, se usa as ferramentas certas, se tem orçamento provável. Uma análise objetiva de quanto esse lead se encaixa no seu ICP, o perfil de cliente ideal, e que se integra a qualquer fluxo comercial que você já tenha. Ideal para outbound.",
      },
    },
  },
  {
    id: "meeting-assistants",
    icon: MessagesSquare,
    translations: {
      en: {
        title: "Meeting Assistants",
        description:
          "Agents that analyze your sales meetings and automatically evaluate team performance. They log meeting data straight into the CRM, keeping the lead's history up to date. And they generate a ready-to-send proposal based on what was discussed.",
      },
      pt: {
        title: "Assistentes de Reunião",
        lead: "Saiba como seu time vende sem precisar assistir a cada call.",
        sections: [
          {
            intro:
              "Agentes que analisam suas reuniões de vendas e avaliam o desempenho do time automaticamente. Registram os dados da reunião direto no CRM, mantendo o histórico do lead atualizado. E geram a proposta comercial pronta, com base no que foi discutido.",
          },
        ],
      },
    },
  },
  {
    id: "document-assistants",
    icon: FileSearch,
    translations: {
      en: {
        title: "Support Assistants",
        description:
          "Assistants that read your internal documents and external information using RAG (Retrieval-Augmented Generation) technology and answer any question on the spot, with the right context. Ideal for customer support or internal helpdesk teams.",
      },
      pt: {
        title: "Assistentes de Suporte",
        description:
          "Assistentes que leem seus documentos internos e informações externas usando tecnologia de RAG (Retrieval-Augmented Generation) e respondem qualquer pergunta na hora, com o contexto certo. Ideal para SAC ou Suporte interno da empresa.",
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
