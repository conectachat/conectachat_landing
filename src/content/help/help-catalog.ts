import {
  Rocket,
  Plug,
  Inbox,
  Bot,
  Workflow,
  SquareKanban,
  Megaphone,
  Blocks,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

// =====================================================================
//  CENTRAL DE AJUDA — manifesto do conteúdo (espelha integration-catalog).
//  O CORPO de cada artigo vive em src/content/help/<categoria>/<slug>.md
//  e é carregado por import.meta.glob (entra no bundle → busca instantânea,
//  sem backend). Para publicar um artigo novo: criar o .md e registrar aqui.
// =====================================================================

export type HelpCategory = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
};

export type HelpArticle = {
  slug: string;
  category: string;
  title: string;
  description: string;
};

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    slug: "primeiros-passos",
    title: "Primeiros passos",
    description: "Crie sua conta, conheça a tela e comece a atender.",
    icon: Rocket,
    color: "#0055A6",
  },
  {
    slug: "conexoes",
    title: "Conexões",
    description: "Ligue seu WhatsApp ao ConectaChat — por QR Code ou pela API oficial.",
    icon: Plug,
    color: "#8FC549",
  },
  {
    slug: "caixa-de-entrada",
    title: "Caixa de entrada",
    description: "Atender, transferir, usar respostas rápidas e organizar as conversas.",
    icon: Inbox,
    color: "#0891B2",
  },
  {
    slug: "agentes-ia",
    title: "Agentes de IA",
    description: "Crie um atendente virtual que responde sozinho e chama um humano quando precisa.",
    icon: Bot,
    color: "#7C3AED",
  },
  {
    slug: "fluxos",
    title: "Fluxos (chatbot)",
    description: "Monte atendimentos automáticos: menus, perguntas, condições e ações.",
    icon: Workflow,
    color: "#EA580C",
  },
  {
    slug: "crm",
    title: "CRM",
    description: "Funil de vendas, cartões, tarefas e pontuação de leads.",
    icon: SquareKanban,
    color: "#DC2626",
  },
  {
    slug: "campanhas",
    title: "Campanhas",
    description: "Disparo em massa com segurança, sem colocar seu número em risco.",
    icon: Megaphone,
    color: "#D97706",
  },
  {
    slug: "integracoes",
    title: "Integrações",
    description: "Conecte agenda, IA, API e outras ferramentas ao ConectaChat.",
    icon: Blocks,
    color: "#0F766E",
  },
  {
    slug: "planos",
    title: "Planos e cobrança",
    description: "Limites de cada plano, upgrade, teste grátis e formas de pagamento.",
    icon: CreditCard,
    color: "#475569",
  },
];

export const HELP_ARTICLES: HelpArticle[] = [
  // --- Primeiros passos ---
  {
    slug: "criando-sua-conta",
    category: "primeiros-passos",
    title: "Criando sua conta e os primeiros ajustes",
    description: "Do cadastro ao primeiro atendimento: o caminho mais curto para começar.",
  },
  {
    slug: "conhecendo-a-tela",
    category: "primeiros-passos",
    title: "Conhecendo a tela do ConectaChat",
    description: "O que é cada item do menu e onde ficam as configurações.",
  },
  {
    slug: "convidando-sua-equipe",
    category: "primeiros-passos",
    title: "Convidando sua equipe",
    description: "Adicione atendentes, defina permissões e organize por departamento.",
  },

  // --- Conexões ---
  {
    slug: "conectar-whatsapp-qr",
    category: "conexoes",
    title: "Conectar o WhatsApp por QR Code",
    description: "A forma mais rápida de começar — e os cuidados para não ser bloqueado.",
  },
  {
    slug: "conectar-whatsapp-oficial",
    category: "conexoes",
    title: "Conectar o WhatsApp Oficial (API da Meta)",
    description: "Passo a passo completo: app na Meta, número, token e webhook.",
  },
  {
    slug: "qr-ou-oficial",
    category: "conexoes",
    title: "QR Code ou WhatsApp Oficial: qual escolher?",
    description: "As diferenças de custo, risco e recursos entre os dois canais.",
  },

  // --- Caixa de entrada ---
  {
    slug: "atendendo-conversas",
    category: "caixa-de-entrada",
    title: "Atendendo conversas",
    description: "Assumir, responder, anexar arquivos, gravar áudio e encerrar.",
  },
  {
    slug: "transferir-e-filas",
    category: "caixa-de-entrada",
    title: "Transferir conversas e usar filas",
    description: "Passe o atendimento para outra pessoa ou para um departamento.",
  },
  {
    slug: "respostas-rapidas",
    category: "caixa-de-entrada",
    title: "Respostas rápidas",
    description: "Salve mensagens que você repete todo dia e envie com dois cliques.",
  },

  // --- Agentes de IA ---
  {
    slug: "criando-um-agente",
    category: "agentes-ia",
    title: "Criando seu primeiro agente de IA",
    description: "Personalidade, base de conhecimento e quando ele deve atender.",
  },
  {
    slug: "quando-a-ia-chama-humano",
    category: "agentes-ia",
    title: "Quando a IA passa a conversa para um humano",
    description: "Transferência automática, palavras-gatilho e o botão de desligar.",
  },

  // --- Fluxos ---
  {
    slug: "montando-um-fluxo",
    category: "fluxos",
    title: "Montando seu primeiro fluxo",
    description: "Gatilho, mensagens, menu de opções e ações — na prática.",
  },

  // --- CRM ---
  {
    slug: "usando-o-funil",
    category: "crm",
    title: "Usando o funil de vendas",
    description: "Cartões, etapas, valores, tarefas e como marcar ganho ou perdido.",
  },
  {
    slug: "pontuacao-de-leads",
    category: "crm",
    title: "Pontuação de leads",
    description: "Descubra quais negócios estão quentes e atenda primeiro quem importa.",
  },

  // --- Campanhas ---
  {
    slug: "primeira-campanha",
    category: "campanhas",
    title: "Enviando sua primeira campanha",
    description: "Escolher o público, escrever a mensagem e acompanhar o envio.",
  },
  {
    slug: "evitando-bloqueio",
    category: "campanhas",
    title: "Como não ter seu número bloqueado",
    description: "As regras de ouro do disparo em massa no WhatsApp.",
  },

  // --- Integrações ---
  {
    slug: "conectando-ferramentas",
    category: "integracoes",
    title: "Conectando outras ferramentas",
    description: "IA, Calendly, Google Agenda, planilhas e a API para o seu sistema.",
  },

  // --- Planos ---
  {
    slug: "planos-e-limites",
    category: "planos",
    title: "Planos, limites e upgrade",
    description: "O que cada plano libera e como mudar quando sua operação crescer.",
  },
];

// Corpo dos artigos (markdown cru), carregado em tempo de build.
const RAW = import.meta.glob("./**/*.md", { query: "?raw", import: "default", eager: true }) as Record<
  string,
  string
>;

/** Markdown do artigo, ou null se o arquivo ainda não existe. */
export function articleBody(category: string, slug: string): string | null {
  return RAW[`./${category}/${slug}.md`] ?? null;
}

export function findCategory(slug: string): HelpCategory | null {
  return HELP_CATEGORIES.find((c) => c.slug === slug) ?? null;
}

export function findArticle(category: string, slug: string): HelpArticle | null {
  return HELP_ARTICLES.find((a) => a.category === category && a.slug === slug) ?? null;
}

export function articlesOf(category: string): HelpArticle[] {
  return HELP_ARTICLES.filter((a) => a.category === category);
}

/** Busca sem acento/maiúscula (mesma técnica do inbox e do CRM). */
export function normalizeSearch(s: string): string {
  return s
    .normalize("NFD")
    .replace(new RegExp("[\\u0300-\\u036f]", "g"), "")
    .toLowerCase();
}

export type HelpHit = { article: HelpArticle; category: HelpCategory };

/** Procura no título, na descrição E no corpo do artigo. */
export function searchArticles(term: string): HelpHit[] {
  const q = normalizeSearch(term.trim());
  if (q.length < 2) return [];
  const hits: HelpHit[] = [];
  for (const a of HELP_ARTICLES) {
    const body = articleBody(a.category, a.slug) ?? "";
    const haystack = normalizeSearch(`${a.title} ${a.description} ${body}`);
    if (haystack.includes(q)) {
      const cat = findCategory(a.category);
      if (cat) hits.push({ article: a, category: cat });
    }
  }
  return hits;
}
