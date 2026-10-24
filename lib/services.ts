import type { Locale } from "@/lib/i18n";
import {
  MessageCircle,
  FileSearch,
  Target,
  MessagesSquare,
  ShoppingCart,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

export interface ServiceTranslation {
  title: string;
  lead?: string;
  description?: string;
  sections?: ServiceSection[];
  closing?: string;
  cta?: string;
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
        cta: "I want a free diagnosis",
        description:
          "Speed-to-lead or SDR agents that welcome the lead, qualify, share business information, book appointments, log customer data, and re-engage with follow-ups on WhatsApp, Telegram, or any communication channel. Your team monitors, the AI executes, 24/7, no days off.",
      },
      pt: {
        title: "Qualificação e Atendimento",
        cta: "Quero um diagnóstico gratuito",
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
        cta: "I want a free diagnosis",
        description:
          "Automated pipelines that scrape data on potential leads and enrich that data at scale, delivering segmented lists ready for your team to prospect. An AI agent goes further: creates different personalized messages for each lead, with no need for your team to write anything from scratch.",
      },
      pt: {
        title: "Geração e Prospecção de Leads",
        cta: "Quero um diagnóstico gratuito",
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
    id: "meeting-assistants",
    icon: MessagesSquare,
    translations: {
      en: {
        title: "Meeting Assistants",
        cta: "I want a free diagnosis",
        description:
          "Agents that analyze your sales meetings and automatically evaluate team performance. They log meeting data straight into the CRM, keeping the lead's history up to date. And they generate a ready-to-send proposal based on what was discussed.",
      },
      pt: {
        title: "Assistentes de Reunião",
        cta: "Quero um diagnóstico gratuito",
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
        cta: "I want a free diagnosis",
        description:
          "Assistants that read your internal documents and external information using RAG (Retrieval-Augmented Generation) technology and answer any question on the spot, with the right context. Ideal for customer support or internal helpdesk teams.",
      },
      pt: {
        title: "Assistentes de Suporte",
        cta: "Quero um diagnóstico gratuito",
        lead: "Seu time para de responder a mesma pergunta todo dia.",
        sections: [
          {
            intro:
              "Assistentes que consultam os documentos da sua empresa e as fontes que você definir, e respondem na hora as dúvidas de clientes ou do próprio time, com a informação certa. Funcionam no SAC ou no suporte interno.",
          },
        ],
      },
    },
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    translations: {
      en: {
        title: "E-commerce Automation",
        lead: "The sale left in the cart comes back through WhatsApp.",
        sections: [
          {
            label: "Recovers sales",
            intro:
              "When a customer abandons the cart or doesn't pay the Pix or boleto, the agent sends a personalized WhatsApp message with the product and the payment link. If they don't come back, the agent follows up on its own.",
          },
          {
            label: "Supports and builds loyalty",
            intro:
              "The agent instantly answers \"where's my order?\" by checking the store and the carrier. After delivery, it asks for a review and lets the customer know when it's time to buy again. Connects to your store's platform.",
          },
        ],
        cta: "I want a free diagnosis",
      },
      pt: {
        title: "Automação para E-commerce",
        lead: "A venda que ficou no carrinho volta pelo WhatsApp.",
        sections: [
          {
            label: "Recupera vendas",
            intro:
              "Quando o cliente abandona o carrinho ou não paga o Pix ou o boleto, o agente manda uma mensagem personalizada no WhatsApp com o produto e o link de pagamento. Se ele não voltar, o agente faz o follow-up sozinho.",
          },
          {
            label: "Atende e fideliza",
            intro:
              "O agente responde na hora o \"cadê meu pedido?\", consultando a loja e a transportadora. Depois da entrega, pede a avaliação e avisa o cliente quando for hora de comprar de novo. Conecta com a plataforma da sua loja.",
          },
        ],
        cta: "Quero um diagnóstico gratuito",
      },
    },
  },
  {
    id: "base-reactivation",
    icon: RefreshCw,
    translations: {
      en: {
        title: "Database Reactivation",
        lead: "Your CRM is full of forgotten sales.",
        sections: [
          {
            label: "Revives dormant contacts",
            intro:
              "The agent goes through your base of old leads and inactive customers, updates data that has changed, like job title and company, and separates who still fits your ideal customer profile.",
          },
          {
            label: "Restarts the conversation",
            intro:
              "Each contact gets a personalized message on WhatsApp or by email, based on their history. Whoever replies is qualified by the agent and leaves with a meeting booked with the next rep in line.",
          },
        ],
        cta: "I want a free diagnosis",
      },
      pt: {
        title: "Reativação de Base",
        lead: "Seu CRM está cheio de venda esquecida.",
        sections: [
          {
            label: "Revive os contatos parados",
            intro:
              "O agente percorre sua base de leads antigos e clientes inativos, atualiza os dados que mudaram, como cargo e empresa, e separa quem ainda tem o perfil do seu cliente ideal.",
          },
          {
            label: "Retoma a conversa",
            intro:
              "Cada contato recebe uma mensagem personalizada no WhatsApp ou por e-mail, com base no histórico dele. Quem responde é qualificado pelo agente e já sai com a reunião marcada com o próximo vendedor da fila.",
          },
        ],
        cta: "Quero um diagnóstico gratuito",
      },
    },
  },
];

export function getServices(locale: Locale) {
  return services.map((s) => ({ id: s.id, icon: s.icon, ...s.translations[locale] }));
}
