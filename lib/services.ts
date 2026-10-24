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
        lead: "From cart to delivery, your store running with no one at the keyboard.",
        sections: [
          {
            intro: "A few examples of what can be automated:",
            bullets: [
              "Abandoned cart: the customer leaves without paying and gets the product and a link to finish on WhatsApp",
              "Forgotten Pix or boleto: before it's due, a reminder arrives with the payment ready",
              "\"Where's my order?\": the agent answers instantly with the status and tracking",
              "Paid order: shipping label, ERP and customer notice happen on their own",
              "New product: the supplier's spreadsheet becomes a ready page, with title, description and SEO",
              "Trickier case: the agent hands the conversation over to someone on the store's team",
            ],
          },
        ],
        cta: "I want a free diagnosis",
      },
      pt: {
        title: "Automação para E-commerce",
        lead: "Do carrinho à entrega, sua loja funcionando sem ninguém no teclado.",
        sections: [
          {
            intro: "Alguns exemplos do que dá para automatizar:",
            bullets: [
              "Carrinho abandonado: o cliente sai sem pagar e recebe no WhatsApp o produto e o link para finalizar",
              "Pix ou boleto esquecido: antes de vencer, chega um lembrete com o pagamento pronto",
              "\"Cadê meu pedido?\": o agente responde na hora com o status e o rastreio",
              "Pedido pago: a etiqueta de envio é gerada, o pedido entra no seu sistema de gestão e o cliente recebe o código de rastreio, sem ninguém mexer",
              "Produto novo: a planilha do fornecedor vira página pronta, com título, descrição e SEO",
              "Caso que precisa de gente: o agente passa a conversa para um atendente da loja, com todo o histórico",
            ],
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
              "O agente busca leads antigos e clientes inativos onde estiverem, seja no CRM, em planilhas ou em sistemas antigos, organiza os dados e monta uma base limpa, pronta para retomar o contato.",
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
