import type { Locale } from "@/lib/i18n";

export interface CaseTranslation {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  category: string;
}

export interface Case {
  slug: string;
  client?: string;
  stack: string[];
  accentColor: string;
  videos?: string[];
  images?: string[];
  translations: Record<Locale, CaseTranslation>;
}

export const cases: Case[] = [
  {
    slug: "clinic-crm",
    client: "Clínica Julia Campos",
    stack: ["n8n", "GPT", "Supabase", "Redis", "Meta API", "Google Calendar", "Next.js"],
    accentColor: "#7c3aed",
    videos: ["1200509787", "1200510980"],
    images: [
      "/cases/clinic-crm/Weekly_report_screen.png",
      "/cases/clinic-crm/data.png",
      "/cases/clinic-crm/fluxo_principal_pt1.png",
      "/cases/clinic-crm/fluxo_principal_pt2.png",
      "/cases/clinic-crm/fluxo_principal_pt3.png",
      "/cases/clinic-crm/fluxo_principal_pt4.png",
      "/cases/clinic-crm/fluxo_principal_pt5.png",
      "/cases/clinic-crm/Weekly_report.png",
    ],
    translations: {
      en: {
        title: "AI Agent for Appointment Scheduling with Real-Time CRM Integration",
        tagline: "Speed to Lead. End-to-end appointment automation with zero human intervention.",
        description:
          "Speed to Lead. We built an end-to-end AI appointment system for Clínica Julia Campos, deployed in production and used daily. The AI agent \"Ana I.A.\" handles the full client lifecycle via WhatsApp: scheduling, rescheduling, cancellations, post-sale follow-up, and re-engagement with zero human intervention. We built it across 7 n8n workflows with a custom MCP Server (5 tools), Redis buffering, GPT, and Postgres Chat Memory, and delivered it with a React/Next.js CRM dashboard (PWA) — kanban, calendar, reports, payments, automated weekly KPI reports, and real-time sync via Supabase Realtime. All data stored in PostgreSQL.",
        highlights: [
          "Redis buffer aggregates fragmented messages before LLM call",
          "Human takeover with auto-summary sent to agent via WhatsApp",
          "Dual write to Supabase + Google Calendar on every scheduling action",
          "Real-time kanban via Supabase Realtime — no page refresh",
          "Weekly HTML report auto-sent to clinic owner every Monday",
        ],
        category: "Speed to Lead AI Agent",
      },
      pt: {
        title: "Agente de IA para Agendamento com Integração de CRM em Tempo Real",
        tagline: "Speed to Lead. Automação de agendamento de ponta a ponta, sem intervenção humana.",
        description:
          "Speed to Lead. Desenvolvemos um sistema de agendamento com IA de ponta a ponta para a Clínica Julia Campos, em produção e usado diariamente. O agente de IA \"Ana I.A.\" cuida de todo o ciclo de vida do cliente via WhatsApp: agendamento, reagendamento, cancelamentos, follow-up pós-venda e reengajamento, sem intervenção humana. Construímos em 7 workflows n8n com um MCP Server customizado (5 ferramentas), buffer com Redis, GPT e memória de conversa via Postgres. Entregamos junto um dashboard de CRM em React/Next.js (PWA) com kanban, calendário, relatórios, pagamentos, relatórios semanais automáticos de KPI e sincronização em tempo real via Supabase Realtime. Todos os dados armazenados em PostgreSQL.",
        highlights: [
          "Buffer com Redis agrega mensagens fragmentadas antes de chamar o LLM",
          "Retomada humana com resumo automático enviado ao atendente via WhatsApp",
          "Escrita dupla no Supabase + Google Calendar em cada ação de agendamento",
          "Kanban em tempo real via Supabase Realtime — sem recarregar a página",
          "Relatório HTML semanal enviado automaticamente à proprietária toda segunda-feira",
        ],
        category: "Agente de IA para Resposta Rápida a Leads",
      },
    },
  },
  {
    slug: "real-estate-rag",
    stack: ["n8n", "GPT", "Supabase pgvector", "Airtable", "Google Drive", "React", "OpenAI Embeddings"],
    accentColor: "#2563eb",
    videos: ["1205973370"],
    images: [
      "/cases/real-estate-rag/1.jpg",
      "/cases/real-estate-rag/3.jpg",
      "/cases/real-estate-rag/4.jpg",
      "/cases/real-estate-rag/10.jpg",
      "/cases/real-estate-rag/11.jpg",
      "/cases/real-estate-rag/8.png",
      "/cases/real-estate-rag/5.png",
      "/cases/real-estate-rag/9.png",
      "/cases/real-estate-rag/6.png",
      "/cases/real-estate-rag/7.png",
    ],
    translations: {
      en: {
        title: "AI Document Assistant for Real Estate Brokerage with RAG Pipeline",
        tagline: "AI-powered case management system for a real estate brokerage with a React chat frontend.",
        description:
          "We built an AI-powered case management system for a real estate brokerage, with a React chat frontend. Agents query client records, upload PDFs and photos, and summarize property contracts via RAG — including multi-turn conversations extracting specific contract clauses like closing costs and seller disclosures. Built across 3 n8n workflows: Airtable as CRM, Google Drive as document storage with per-client folders, and a RAG pipeline using Supabase pgvector and OpenAI embeddings. Our PDF-replace logic deletes stale vectors before re-indexing. Weekly HTML report per agent, delivered via Gmail every Monday.",
        highlights: [
          "Folder-per-client structure in Google Drive — auto-created on first upload",
          "Duplicate file check prevents version conflicts before upload",
          "Stale vector deletion before re-embedding prevents outdated chunks in RAG",
          "Weekly HTML report with case breakdown sent to each agent individually",
          "React chat interface connected to n8n via webhook",
        ],
        category: "RAG System",
      },
      pt: {
        title: "Assistente de Documentos com IA para Corretora de Imóveis com Pipeline de RAG",
        tagline: "Sistema de gestão de casos com IA para uma corretora de imóveis, com frontend de chat em React.",
        description:
          "Desenvolvemos um sistema de gestão de casos com IA para uma corretora de imóveis, com frontend de chat em React. Os corretores consultam cadastros de clientes, enviam PDFs e fotos, e resumem contratos de imóveis via RAG — incluindo conversas multi-turno que extraem cláusulas específicas do contrato, como custos de fechamento e declarações do vendedor. Construído em 3 workflows n8n: Airtable como CRM, Google Drive como repositório de documentos com pastas por cliente, e um pipeline de RAG usando Supabase pgvector e embeddings da OpenAI. Nossa lógica de substituição de PDF apaga vetores desatualizados antes de reindexar. Relatório HTML semanal por corretor, enviado via Gmail toda segunda-feira.",
        highlights: [
          "Estrutura de pasta por cliente no Google Drive — criada automaticamente no primeiro upload",
          "Verificação de arquivo duplicado evita conflitos de versão antes do upload",
          "Exclusão de vetores desatualizados antes de reindexar evita trechos obsoletos no RAG",
          "Relatório HTML semanal com resumo de casos, enviado individualmente para cada corretor",
          "Interface de chat em React conectada ao n8n via webhook",
        ],
        category: "Sistema de RAG",
      },
    },
  },
  {
    slug: "lead-generation",
    stack: ["n8n", "Apify", "Playwright", "FastAPI", "Docker", "VPS", "Supabase", "Google Sheets", "GPT"],
    accentColor: "#dc2626",
    images: [
      "/cases/lead-generation/3.png",
      "/cases/lead-generation/4.png",
      "/cases/lead-generation/6.jpg",
      "/cases/lead-generation/GITHUB.png",
      "/cases/lead-generation/APIFY.png",
      "/cases/lead-generation/DOCKER.png",
      "/cases/lead-generation/1.png",
      "/cases/lead-generation/2.png",
    ],
    translations: {
      en: {
        title: "Async Lead Generation Agent with Playwright Web Scraping and Supabase",
        tagline: "AI-powered lead generation agent with a client-facing dashboard.",
        description:
          "We built an AI-powered lead generation agent with a client-facing dashboard. The client inputs business type, city, and number of leads; the system scrapes Google Maps via Apify, extracts emails from each website using a self-hosted Playwright API (FastAPI + Docker on VPS), and delivers a structured spreadsheet by email. Built across 3 n8n workflows: async polling prevents webhook timeouts on long scraping jobs, a Supabase lock mechanism prevents duplicate runs, and phone numbers are sanitized before saving. Results are delivered via branded HTML email with XLSX and CSV attachments. We improved the email extraction rate to 25%.",
        highlights: [
          "Self-hosted Playwright on VPS removes cloud timeout constraints (30s kill)",
          "Email extraction rate: ~3% (HTTP fetch) → ~25% (full JS rendering)",
          "Async Apify polling: fire-and-poll, never blocks the workflow",
          "Supabase lock state prevents duplicate concurrent scraping jobs",
          "AI Agent enriches leads with LinkedIn profile search on top of email scraping",
        ],
        category: "Lead Generation",
      },
      pt: {
        title: "Agente Assíncrono de Geração de Leads com Web Scraping em Playwright e Supabase",
        tagline: "Agente de geração de leads com IA e dashboard voltado ao cliente.",
        description:
          "Desenvolvemos um agente de geração de leads com IA e um dashboard voltado ao cliente. O cliente informa o tipo de negócio, cidade e número de leads; o sistema raspa o Google Maps via Apify, extrai emails de cada site usando uma API própria de Playwright (FastAPI + Docker em VPS), e entrega uma planilha estruturada por email. Construído em 3 workflows n8n: polling assíncrono evita timeout de webhook em jobs longos de raspagem, um mecanismo de lock no Supabase evita execuções duplicadas, e os telefones são higienizados antes de salvar. Os resultados são entregues por email HTML com identidade visual e anexos em XLSX e CSV. Elevamos a taxa de extração de emails para 25%.",
        highlights: [
          "Playwright auto-hospedado em VPS remove as restrições de timeout da nuvem (kill em 30s)",
          "Taxa de extração de email: ~3% (fetch HTTP) → ~25% (renderização JS completa)",
          "Polling assíncrono do Apify: dispara e consulta, nunca trava o workflow",
          "Estado de lock no Supabase evita jobs de raspagem concorrentes duplicados",
          "Agente de IA enriquece os leads com busca de perfil no LinkedIn, além da extração de email",
        ],
        category: "Geração de Leads",
      },
    },
  },
  {
    slug: "vapi-voice-agent",
    stack: ["VAPI", "n8n", "Google Calendar", "Meta API", "Supabase", "Tally"],
    accentColor: "#059669",
    images: ["/cases/vapi-voice-agent/VAPI.png"],
    translations: {
      en: {
        title: "VAPI Voice Agent",
        tagline: "Outbound voice AI that books appointments in real time during the call.",
        description:
          "We built an outbound voice agent that calls leads automatically after form submission, using Twilio. The agent checks Google Calendar availability, conducts the conversation via VAPI, schedules the appointment, sends a WhatsApp confirmation via Meta API, and registers everything in Supabase — no human intervention. Triggered by a Tally form, the flow covers lead creation, call parameters, and calendar event creation in a single pipeline.",
        highlights: [
          "Mid-call tool calling: agent calls n8n and waits for response before continuing",
          "Timezone handling with Intl.DateTimeFormat in America/Sao_Paulo",
          "Dual confirmation: Google Calendar event + WhatsApp sent before VAPI response",
          "Async tool execution — VAPI stays in conversation while n8n processes",
        ],
        category: "Voice AI",
      },
      pt: {
        title: "Agente de Voz VAPI",
        tagline: "IA de voz outbound que agenda compromissos em tempo real durante a ligação.",
        description:
          "Desenvolvemos um agente de voz outbound que liga automaticamente para leads após o envio de um formulário, usando Twilio. O agente verifica a disponibilidade no Google Calendar, conduz a conversa via VAPI, agenda o compromisso, envia confirmação por WhatsApp via Meta API e registra tudo no Supabase — sem intervenção humana. Disparado por um formulário Tally, o fluxo cobre criação de lead, parâmetros da ligação e criação do evento na agenda em um único pipeline.",
        highlights: [
          "Chamada de ferramenta durante a ligação: o agente aciona o n8n e aguarda a resposta antes de continuar",
          "Tratamento de fuso horário com Intl.DateTimeFormat em America/Sao_Paulo",
          "Confirmação dupla: evento no Google Calendar + WhatsApp enviados antes da resposta do VAPI",
          "Execução assíncrona de ferramentas — o VAPI segue na conversa enquanto o n8n processa",
        ],
        category: "IA de Voz",
      },
    },
  },
  {
    slug: "multi-agent-rag",
    stack: ["n8n", "GPT", "Supabase pgvector", "Jina AI", "OpenAI Embeddings"],
    accentColor: "#d97706",
    images: [
      "/cases/multi-agent-rag/2.png",
      "/cases/multi-agent-rag/3.png",
      "/cases/multi-agent-rag/4.png",
      "/cases/multi-agent-rag/5.png",
    ],
    translations: {
      en: {
        title: "Multi-Agent RAG Support System",
        tagline: "Orchestrator routes questions to specialist agents with isolated knowledge bases.",
        description:
          "We built a multi-agent system in n8n where a central Orchestrator Agent routes user queries to domain-specific Specialist Agents (n8n, Lovable, FlutterFlow). Each specialist queries its own dedicated Supabase Vector Store using OpenAI embeddings, enabling isolated RAG responses per knowledge domain. Our ingestion pipeline uses Jina AI to crawl documentation, runs two LLM calls per page to extract relevant links and clean content before indexing, deduplicates content, and loads embeddings into the vector store automatically. PostgreSQL memory persists conversation history per session.",
        highlights: [
          "Separate vector table per tool — prevents cross-contamination between knowledge bases",
          "Jina AI for clean Markdown extraction from documentation without browser rendering",
          "Two Information Extractor passes per page: links first, then content cleaning",
          "Orchestrator pattern decouples routing from specialist knowledge",
          "Adding a new tool only requires a new ingestion workflow + specialist sub-agent",
        ],
        category: "Multi-Agent",
      },
      pt: {
        title: "Sistema Multi-Agente de RAG para Suporte",
        tagline: "Orquestrador direciona perguntas para agentes especialistas com bases de conhecimento isoladas.",
        description:
          "Construímos um sistema multi-agente em n8n, onde um Agente Orquestrador central roteia as perguntas dos usuários para Agentes Especialistas por domínio (n8n, Lovable, FlutterFlow). Cada especialista consulta seu próprio Vector Store dedicado no Supabase, usando embeddings da OpenAI, permitindo respostas de RAG isoladas por domínio de conhecimento. Nosso pipeline de ingestão usa Jina AI para rastrear a documentação, faz duas chamadas de LLM por página para extrair links relevantes e limpar o conteúdo antes de indexar, deduplica o conteúdo e carrega os embeddings no vector store automaticamente. A memória em PostgreSQL mantém o histórico de conversa por sessão.",
        highlights: [
          "Tabela de vetores separada por ferramenta — evita contaminação cruzada entre bases de conhecimento",
          "Jina AI para extração limpa em Markdown da documentação, sem renderização de navegador",
          "Duas passagens de extração por página: primeiro os links, depois a limpeza do conteúdo",
          "Padrão orquestrador desacopla o roteamento do conhecimento especializado",
          "Adicionar uma nova ferramenta exige só um novo workflow de ingestão + sub-agente especialista",
        ],
        category: "Multi-Agente",
      },
    },
  },
  {
    slug: "sdr-agent",
    client: "Agent+",
    stack: ["n8n", "GPT", "Supabase", "Redis", "Notion", "Meta API", "MCP Server"],
    accentColor: "#7c3aed",
    images: [
      "/cases/sdr-agent/NOTION2.jpg",
      "/cases/sdr-agent/tally2.png",
      "/cases/sdr-agent/1.png",
      "/cases/sdr-agent/2.png",
      "/cases/sdr-agent/desativar_agente.png",
      "/cases/sdr-agent/followup.png",
      "/cases/sdr-agent/MCP.png",
      "/cases/sdr-agent/tally.png",
    ],
    translations: {
      en: {
        title: "SDR Agent — WhatsApp Sales Automation",
        tagline: "AI SDR agent that qualifies leads end-to-end via WhatsApp, creating a lead in Notion CRM simultaneously.",
        description:
          "We built an AI SDR agent that qualifies leads end-to-end via WhatsApp for Agent+. Triggered by a Tally form, the agent creates a lead in Supabase and Notion CRM simultaneously, then initiates outreach with a personalized first message. Built across 5 n8n workflows: Redis buffering aggregates fragmented messages before the LLM call, multi-format support handles text, image, audio, and PDF, human takeover pauses the bot with a conversation summary, scheduled follow-up runs 2 parallel AI agents with Postgres Chat Memory, and a custom MCP Server exposes 4 Notion CRM tools for real-time lead status updates.",
        highlights: [
          "Redis dual-purpose: message buffering + bot deactivation state via TTL",
          "MCP Server exposes 4 Notion CRM tools to the AI agent",
          "Human takeover: LLM summarizes full conversation, sends to human via WhatsApp",
          "Dual CRM: Supabase operational + Notion visual — synced on every action",
          "Follow-up workflow with 3 branches: cold leads, qualified, unresponsive",
        ],
        category: "SDR Agent",
      },
      pt: {
        title: "Agente SDR — Automação de Vendas no WhatsApp",
        tagline: "Agente SDR de IA que qualifica leads de ponta a ponta via WhatsApp, criando o lead no CRM Notion simultaneamente.",
        description:
          "Desenvolvemos um agente SDR com IA que qualifica leads de ponta a ponta via WhatsApp para a Agent+. Disparado por um formulário Tally, o agente cria o lead simultaneamente no Supabase e no CRM Notion, e então inicia a abordagem com uma primeira mensagem personalizada. Construído em 5 workflows n8n: buffer com Redis agrega mensagens fragmentadas antes da chamada ao LLM, suporte multi-formato lida com texto, imagem, áudio e PDF, retomada humana pausa o bot com um resumo da conversa, o follow-up agendado roda 2 agentes de IA em paralelo com memória via Postgres, e um MCP Server customizado expõe 4 ferramentas de CRM do Notion para atualização de status do lead em tempo real.",
        highlights: [
          "Redis com dupla função: buffer de mensagens + estado de desativação do bot via TTL",
          "MCP Server expõe 4 ferramentas de CRM do Notion para o agente de IA",
          "Retomada humana: o LLM resume a conversa inteira e envia ao atendente via WhatsApp",
          "CRM duplo: Supabase operacional + Notion visual — sincronizados a cada ação",
          "Workflow de follow-up com 3 ramificações: leads frios, qualificados e sem resposta",
        ],
        category: "Agente SDR",
      },
    },
  },
];

export function getCases(locale: Locale) {
  return cases.map((c) => resolveCase(c, locale));
}

export function getCaseBySlug(slug: string, locale: Locale) {
  const found = cases.find((c) => c.slug === slug);
  return found ? resolveCase(found, locale) : undefined;
}

export function getCaseSlugs() {
  return cases.map((c) => c.slug);
}

function resolveCase(c: Case, locale: Locale) {
  const { translations, ...shared } = c;
  return { ...shared, ...translations[locale] };
}

export type ResolvedCase = ReturnType<typeof resolveCase>;
