import {
  Rocket,
  Plug,
  Inbox,
  Contact,
  Bot,
  Workflow,
  SquareKanban,
  Megaphone,
  BarChart3,
  Package,
  Users,
  MessagesSquare,
  Blocks,
  Code2,
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
    slug: "contatos",
    title: "Contatos",
    description: "Cadastrar, importar, etiquetar e organizar quem fala com você.",
    icon: Contact,
    color: "#2563EB",
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
    slug: "relatorios",
    title: "Relatórios",
    description: "Os números do atendimento e das vendas, sem planilha.",
    icon: BarChart3,
    color: "#4F46E5",
  },
  {
    slug: "catalogo",
    title: "Catálogo",
    description: "Seus produtos e serviços prontos para enviar na conversa.",
    icon: Package,
    color: "#B45309",
  },
  {
    slug: "equipe-e-organizacao",
    title: "Equipe e organização",
    description: "Departamentos, filas, distribuição, horários e permissões.",
    icon: Users,
    color: "#0369A1",
  },
  {
    slug: "ferramentas-da-equipe",
    title: "Ferramentas da equipe",
    description: "Chat interno entre colegas e como falar com o nosso suporte.",
    icon: MessagesSquare,
    color: "#9333EA",
  },
  {
    slug: "integracoes",
    title: "Integrações",
    description: "Conecte agenda, IA, API e outras ferramentas ao ConectaChat.",
    icon: Blocks,
    color: "#0F766E",
  },
  {
    slug: "api",
    title: "API e desenvolvedores",
    description: "Ligue o ConectaChat ao seu sistema com chaves e webhooks.",
    icon: Code2,
    color: "#334155",
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

  {
    slug: "instalar-o-app",
    category: "primeiros-passos",
    title: "Instalar o aplicativo no celular e no computador",
    description: "Tela cheia, ícone próprio e notificações melhores — sem loja de aplicativos.",
  },
  {
    slug: "notificacoes",
    category: "primeiros-passos",
    title: "Notificações: som, push e o sininho",
    description: "As três formas de aviso, quem recebe cada uma e como ativar em cada aparelho.",
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

  {
    slug: "modelos-aprovados",
    category: "conexoes",
    title: "Modelos aprovados pela Meta",
    description: "Criar, aprovar e usar os templates — obrigatórios fora da janela de 24 horas.",
  },
  {
    slug: "janela-de-24-horas",
    category: "conexoes",
    title: "A janela de 24 horas do WhatsApp Oficial",
    description: "A regra que mais confunde: quando dá para escrever livre e quando só modelo.",
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

  {
    slug: "organizando-a-caixa",
    category: "caixa-de-entrada",
    title: "Abas, filtros e número de chamado",
    description: "Como não perder cliente quando o volume de conversas cresce.",
  },
  {
    slug: "buscar-conversas-e-mensagens",
    category: "caixa-de-entrada",
    title: "Buscar conversas e mensagens",
    description: "Ache a pessoa, a conversa ou aquela mensagem específica — até dentro de áudios.",
  },
  {
    slug: "agendar-mensagem",
    category: "caixa-de-entrada",
    title: "Agendar uma mensagem",
    description: "Programe o envio para a data e a hora certas, com anexo se precisar.",
  },
  {
    slug: "audios-e-transcricao",
    category: "caixa-de-entrada",
    title: "Áudios e transcrição",
    description: "Áudio do cliente vira texto — para você ler rápido e a IA entender.",
  },

  // --- Contatos ---
  {
    slug: "cadastrar-e-importar",
    category: "contatos",
    title: "Cadastrar e importar contatos",
    description: "Um a um ou uma planilha inteira, com validação de número e sem duplicar.",
  },
  {
    slug: "etiquetas-e-listas",
    category: "contatos",
    title: "Etiquetas e listas",
    description: "As duas formas de agrupar gente — e quando usar cada uma.",
  },
  {
    slug: "bloquear-e-descadastro",
    category: "contatos",
    title: "Bloquear contatos e descadastro automático",
    description: "Quem responde “sair” para de receber na hora. Por que isso protege seu número.",
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

  {
    slug: "escolher-a-ia",
    category: "agentes-ia",
    title: "Escolher a IA e cadastrar a chave",
    description: "Gemini, OpenAI, Claude ou Grok: qual usar, quanto custa e onde tem opção grátis.",
  },
  {
    slug: "base-de-conhecimento",
    category: "agentes-ia",
    title: "Base de conhecimento do agente",
    description: "O que ele sabe: texto, arquivos e planilhas que se atualizam sozinhas.",
  },
  {
    slug: "criar-com-entrevista",
    category: "agentes-ia",
    title: "Criar um agente por entrevista",
    description: "Descreva seu negócio e a IA monta personalidade e base de conhecimento.",
  },
  {
    slug: "testar-o-agente",
    category: "agentes-ia",
    title: "Testar o agente antes de ligar",
    description: "Simule uma conversa, veja o prompt gerado e corrija o que estiver errado.",
  },
  {
    slug: "humanizacao-e-limites",
    category: "agentes-ia",
    title: "Humanização, anti-loop e proteção do número",
    description: "Pausas, “digitando…”, limite de respostas e o silêncio depois do humano.",
  },

  // --- Fluxos ---
  {
    slug: "montando-um-fluxo",
    category: "fluxos",
    title: "Montando seu primeiro fluxo",
    description: "Gatilho, mensagens, menu de opções e ações — na prática.",
  },

  {
    slug: "gatilhos-do-fluxo",
    category: "fluxos",
    title: "Gatilhos: o que faz o fluxo começar",
    description: "Palavra-chave, primeira mensagem, etiqueta, etapa do CRM, webhook ou manual.",
  },
  {
    slug: "tipos-de-blocos",
    category: "fluxos",
    title: "Os blocos disponíveis",
    description: "Mensagens, menus, condições, ações e integrações — o mapa da paleta.",
  },
  {
    slug: "acionar-fluxo-manualmente",
    category: "fluxos",
    title: "Acionar um fluxo na conversa",
    description: "Dispare um roteiro pronto — cobrança, pesquisa, coleta de dados — quando quiser.",
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

  {
    slug: "tarefas-e-historico",
    category: "crm",
    title: "Tarefas, histórico e arquivos do negócio",
    description: "O próximo passo com data e responsável, e tudo que já aconteceu registrado.",
  },
  {
    slug: "campos-personalizados",
    category: "crm",
    title: "Campos personalizados",
    description: "Guarde as informações que só o seu negócio precisa, no contato ou no negócio.",
  },
  {
    slug: "automatizar-com-fluxos",
    category: "crm",
    title: "Automatizar o funil",
    description: "Conversa nova vira lead, e o fluxo cria, move e fecha cartões sozinho.",
  },
  {
    slug: "relatorio-de-vendas",
    category: "crm",
    title: "Relatório de vendas",
    description: "Taxa de fechamento, valor ganho, ciclo médio e os motivos de perda.",
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

  {
    slug: "publicos-e-listas",
    category: "campanhas",
    title: "Escolhendo o público",
    description: "Etiqueta, lista ou todos — e as variáveis que personalizam a mensagem.",
  },
  {
    slug: "campanha-no-canal-oficial",
    category: "campanhas",
    title: "Campanha pelo canal Oficial",
    description: "Só com modelo aprovado, com teto diário da Meta e custo por mensagem.",
  },

  // --- Relatórios ---
  {
    slug: "entendendo-o-dashboard",
    category: "relatorios",
    title: "Entendendo os números do Dashboard",
    description: "O que cada indicador diz e as combinações que revelam problema na operação.",
  },
  {
    slug: "filtrar-e-exportar",
    category: "relatorios",
    title: "Períodos, filtros e exportação",
    description: "Faça a pergunta certa aos dados e leve os números para fora em CSV.",
  },

  // --- Catálogo ---
  {
    slug: "montando-o-catalogo",
    category: "catalogo",
    title: "Montando o catálogo",
    description: "Cadastre produtos e serviços com foto, preço, categoria e link de pagamento.",
  },
  {
    slug: "enviar-produto-na-conversa",
    category: "catalogo",
    title: "Enviar um produto na conversa",
    description: "Foto, preço e link em dois cliques, sempre com a mesma apresentação.",
  },

  // --- Equipe e organização ---
  {
    slug: "departamentos-e-filas",
    category: "equipe-e-organizacao",
    title: "Departamentos e filas",
    description: "Separe o atendimento por assunto e faça a conversa chegar no time certo.",
  },
  {
    slug: "distribuicao-automatica",
    category: "equipe-e-organizacao",
    title: "Distribuição automática de conversas",
    description: "Rodízio ou por carga de trabalho, respeitando quem está no horário.",
  },
  {
    slug: "horarios-de-atendimento",
    category: "equipe-e-organizacao",
    title: "Horários de atendimento",
    description: "O seu horário, o do departamento e a mensagem de fora do expediente.",
  },
  {
    slug: "papeis-e-permissoes",
    category: "equipe-e-organizacao",
    title: "Papéis e permissões",
    description: "Proprietário, administrador e atendente: o que cada um vê e pode fazer.",
  },

  // --- Ferramentas da equipe ---
  {
    slug: "chat-interno",
    category: "ferramentas-da-equipe",
    title: "Chat interno da equipe",
    description: "Converse com os colegas dentro do app, sem misturar com o WhatsApp pessoal.",
  },
  {
    slug: "falar-com-o-suporte",
    category: "ferramentas-da-equipe",
    title: "Falar com o suporte da ConectaChat",
    description: "Onde abrir chamado, o que informar e como ser atendido mais rápido.",
  },

  // --- Integrações ---
  {
    slug: "conectando-ferramentas",
    category: "integracoes",
    title: "Conectando outras ferramentas",
    description: "IA, Calendly, Google Agenda, planilhas e a API para o seu sistema.",
  },
  {
    slug: "calendly",
    category: "integracoes",
    title: "Calendly",
    description: "Agende na conversa e mande confirmação, lembrete e cancelamento pelo WhatsApp.",
  },
  {
    slug: "google-agenda",
    category: "integracoes",
    title: "Google Agenda",
    description: "Mostra só os horários livres, cria o evento com Meet e avisa o cliente.",
  },
  {
    slug: "planilhas-e-documentos",
    category: "integracoes",
    title: "Planilhas e documentos do Google",
    description: "Sua tabela de preços vira a fonte do agente — e se atualiza sozinha.",
  },
  {
    slug: "n8n-e-automacoes",
    category: "integracoes",
    title: "n8n e outras automações",
    description: "Ligue o ConectaChat ao seu ERP, loja ou planilha sem programar.",
  },

  // --- API ---
  {
    slug: "chaves-de-api",
    category: "api",
    title: "Chaves de API",
    description: "Crie chaves com permissões específicas para o seu sistema usar o ConectaChat.",
  },
  {
    slug: "webhooks-de-saida",
    category: "api",
    title: "Webhooks de saída",
    description: "O ConectaChat avisa o seu sistema quando algo acontece, com assinatura segura.",
  },

  // --- Planos ---
  {
    slug: "planos-e-limites",
    category: "planos",
    title: "Planos, limites e upgrade",
    description: "O que cada plano libera e como mudar quando sua operação crescer.",
  },
  {
    slug: "gerenciar-assinatura",
    category: "planos",
    title: "Gerenciar a assinatura",
    description: "Teste grátis, assinar, trocar de plano, mudar o cartão e cancelar.",
  },
  {
    slug: "limite-atingido",
    category: "planos",
    title: "Quando o limite do plano é atingido",
    description: "O que trava, o que nunca trava e o que fazer antes de subir de plano.",
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
