import { createFileRoute } from "@tanstack/react-router";
import { brand, appLoginUrl, appSignupUrl, contactEmail } from "@/config/brand";
import { useEffect, useState } from "react";
import {
  Check,
  MessageSquareText,
  Bot,
  KanbanSquare,
  Star,
  ArrowRight,
  Plus,
  Minus,
  Sparkles,
  Sun,
  Moon,
  LayoutGrid,
  Share2,
  Inbox,
  MonitorSmartphone,
  Megaphone,
  ShoppingBag,
  BarChart3,
  Puzzle,
  MessageCircle,
  Instagram,
  Facebook,
  Send,
} from "lucide-react";


export const Route = createFileRoute("/")({
  ssr: false,
  head: () => {
    const title = `${brand.name} — Atendimento e vendas pelo WhatsApp com IA e CRM`;
    const description =
      "Caixa de entrada compartilhada, chatbot, IA e CRM de vendas no WhatsApp. Teste 14 dias grátis, sem cartão. Planos a partir de R$ 27/mês.";
    const image = "https://conectachat.online/conectachat-512.png";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://conectachat.online" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
    };
  },
  component: Landing,
});

function Landing() {
  function cta(path: "/entrar" | "/cadastro" | "/demo/dashboard" | "#planos") {
    if (path === "#planos") {
      const el = document.getElementById("planos");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    // Login e cadastro vivem no app (domínio separado).
    if (path === "/entrar") {
      window.location.href = appLoginUrl;
      return;
    }
    // "/cadastro" e o legado "/demo/dashboard" levam ao cadastro do app.
    window.location.href = appSignupUrl;
  }

  useScrollReveal();
  const { isDark, toggle } = useTheme();

  return (
    <div
      className={`lp-root ${isDark ? "is-dark" : "is-light"} min-h-screen w-full antialiased overflow-x-hidden`}
      style={{ fontFamily: "'Montserrat', system-ui, sans-serif" }}
    >
      {/* radial glows — absolute (não fixed) e mais leves no mobile pra fluidez */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1400px] z-0 overflow-hidden">
        <div
          className="lp-glow-a hidden md:block absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #8FC549 0%, transparent 60%)" }}
        />
        <div
          className="lp-glow-b hidden md:block absolute top-[20%] -right-40 h-[700px] w-[700px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #0055A6 0%, transparent 65%)" }}
        />
        <div
          className="lp-glow-c md:hidden absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, #8FC549 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative z-10">
        <Header onCta={cta} isDark={isDark} onToggleTheme={toggle} />
        <Hero onCta={cta} />
        <Stats />
        <Pain />
        <HowItWorks />
        <Features />
        <Channels />
        <AiEdge />
        <Pricing onCta={cta} />
        <IncludedInAll />
        <Testimonials />
        <Faq />
        <FinalCta onCta={cta} />
        <Footer />
      </div>

      <style>{`
        html { scroll-behavior: smooth; }
        .lp-root { font-family: 'Montserrat', system-ui, sans-serif; }
        .font-display { font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; letter-spacing: -0.025em; }
        .font-brand { font-family: 'Montserrat', system-ui, sans-serif; font-weight: 900; letter-spacing: -0.04em; }
        .text-grad {
          background: linear-gradient(95deg, #8FC549 0%, #0055A6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .btn-glow {
          box-shadow: 0 10px 30px -12px rgba(143,197,73,0.55), 0 0 0 1px rgba(143,197,73,0.35) inset;
        }

        /* ===== LP tokens ===== */
        .lp-root.is-dark {
          --lp-bg: #04100A;
          --lp-fg-rgb: 255,255,255;
          --lp-fg-strong-rgb: 255,255,255;
          --lp-fg-inv: #0A1510;
          --lp-glass-bg: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          --lp-glass-bd: rgba(255,255,255,0.10);
          --lp-glass-strong-bg: linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03));
          --lp-glass-strong-bd: rgba(255,255,255,0.14);
          --lp-header-bg: rgba(4,16,10,0.55);
          --lp-header-bd: rgba(255,255,255,0.06);
          --lp-grid: rgba(255,255,255,0.04);
          --lp-bubble-left-bg: #1b2926;
          --lp-bubble-left-bd: rgba(255,255,255,0.05);
          --lp-bubble-left-fg: #FFFFFF;
          --lp-phone-shell: linear-gradient(180deg,#1a1f1d,#0b0f0d);
          --lp-phone-shell-bd: rgba(255,255,255,0.08);
          --lp-phone-screen: #0b1410;
          --lp-chat-header-bg: #111d18;
          --lp-chat-header-bd: rgba(255,255,255,0.05);
          --lp-input-bg: #111d18;
          --lp-input-pill: #0b1410;
          --lp-final-bg: linear-gradient(135deg,#0c3a23,#0a1a13);
          --lp-final-bd: rgba(143,197,73,0.30);
          --lp-final-shadow: 0 40px 120px -40px rgba(143,197,73,0.6);
        }
        .lp-root.is-light {
          --lp-bg: #F5F8F6;
          --lp-fg-rgb: 6,16,11;
          --lp-fg-strong-rgb: 0,0,0;
          --lp-fg-inv: #FFFFFF;
          --lp-glass-bg: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.78));
          --lp-glass-bd: rgba(10,21,16,0.12);
          --lp-glass-strong-bg: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,255,255,0.88));
          --lp-glass-strong-bd: rgba(10,21,16,0.16);
          --lp-header-bg: rgba(255,255,255,0.82);
          --lp-header-bd: rgba(10,21,16,0.10);
          --lp-grid: rgba(10,21,16,0.06);
          --lp-bubble-left-bg: #EEF3EF;
          --lp-bubble-left-bd: rgba(10,21,16,0.08);
          --lp-bubble-left-fg: #050D09;
          --lp-phone-shell: linear-gradient(180deg,#E2E8E4,#BFCAC3);
          --lp-phone-shell-bd: rgba(10,21,16,0.12);
          --lp-phone-screen: #F2F6F3;
          --lp-chat-header-bg: #FFFFFF;
          --lp-chat-header-bd: rgba(10,21,16,0.08);
          --lp-input-bg: #FFFFFF;
          --lp-input-pill: #EEF3EF;
          --lp-final-bg: linear-gradient(135deg,#E8F6EE,#FFFFFF);
          --lp-final-bd: rgba(143,197,73,0.30);
          --lp-final-shadow: 0 40px 120px -40px rgba(143,197,73,0.35);
        }

        .lp-root { background: var(--lp-bg); color: rgb(var(--lp-fg-strong-rgb)); }
        .lp-root .glass { background: var(--lp-glass-bg); border: 1px solid var(--lp-glass-bd); transition: border-color .35s ease, box-shadow .35s ease, transform .35s ease; }
        .lp-root .glass:hover { border-color: rgba(143,197,73,0.45); box-shadow: 0 14px 40px -18px rgba(143,197,73,0.35); }
        .lp-root .glass-strong { background: var(--lp-glass-strong-bg); border: 1px solid var(--lp-glass-strong-bd); transition: border-color .35s ease, box-shadow .35s ease, transform .35s ease; }
        .lp-root .glass-strong:hover { border-color: rgba(143,197,73,0.55); box-shadow: 0 18px 50px -18px rgba(143,197,73,0.45); }
        @media (min-width: 768px) {
          .lp-root .glass { backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
          .lp-root .glass-strong { backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
        }
        .lp-root .grid-bg {
          background-image:
            linear-gradient(var(--lp-grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--lp-grid) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .lp-header { background: var(--lp-header-bg); border-bottom: 1px solid var(--lp-header-bd); }

        /* override hardcoded white text/bg utilities inside LP — use stronger ink in light */
        .lp-root .text-white { color: rgb(var(--lp-fg-strong-rgb)) !important; }
        .lp-root .text-white\\/90 { color: rgba(var(--lp-fg-rgb),0.95) !important; }
        .lp-root .text-white\\/85 { color: rgba(var(--lp-fg-rgb),0.92) !important; }
        .lp-root .text-white\\/80 { color: rgba(var(--lp-fg-rgb),0.88) !important; }
        .lp-root .text-white\\/70 { color: rgba(var(--lp-fg-rgb),0.78) !important; }
        .lp-root .text-white\\/65 { color: rgba(var(--lp-fg-rgb),0.74) !important; }
        .lp-root .text-white\\/60 { color: rgba(var(--lp-fg-rgb),0.70) !important; }
        .lp-root .text-white\\/55 { color: rgba(var(--lp-fg-rgb),0.65) !important; }
        .lp-root .text-white\\/50 { color: rgba(var(--lp-fg-rgb),0.60) !important; }
        .lp-root .text-white\\/45 { color: rgba(var(--lp-fg-rgb),0.55) !important; }
        .lp-root .text-white\\/40 { color: rgba(var(--lp-fg-rgb),0.50) !important; }
        .lp-root .text-white\\/30 { color: rgba(var(--lp-fg-rgb),0.40) !important; }
        .lp-root .text-white\\/10 { color: rgba(var(--lp-fg-rgb),0.15) !important; }
        .lp-root .bg-white\\/10 { background-color: rgba(var(--lp-fg-rgb),0.10) !important; }
        .lp-root .bg-white\\/5 { background-color: rgba(var(--lp-fg-rgb),0.05) !important; }
        .lp-root .hover\\:bg-white\\/10:hover { background-color: rgba(var(--lp-fg-rgb),0.10) !important; }
        .lp-root .hover\\:text-white:hover { color: rgb(var(--lp-fg-strong-rgb)) !important; }
        .lp-root .border-white\\/5 { border-color: rgba(var(--lp-fg-rgb),0.10) !important; }
        .lp-root .border-white\\/10 { border-color: rgba(var(--lp-fg-rgb),0.12) !important; }
        .lp-root .divide-white\\/10 > :where(*) { border-color: rgba(var(--lp-fg-rgb),0.12) !important; }
        .lp-root.is-light .lp-glow-a { opacity: .22; }
        .lp-root.is-light .lp-glow-b { opacity: .10; }
        .lp-root.is-light .lp-glow-c { opacity: .16; }
        .lp-root.is-dark .lp-glow-a { opacity: .40; }
        .lp-root.is-dark .lp-glow-b { opacity: .25; }
        .lp-root.is-dark .lp-glow-c { opacity: .30; }

        /* clickable safety — make sure CTA buttons aren't blocked by glow overlays */
        .lp-root button, .lp-root a { position: relative; z-index: 1; cursor: pointer; }

        .dot-pulse { position: relative; }
        .dot-pulse::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: 9999px;
          background: #8FC549;
          animation: dot-pulse 1.8s ease-out infinite;
          opacity: 0.6;
        }
        @keyframes dot-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          80%, 100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float-y 6s ease-in-out infinite; will-change: transform; }
        @media (max-width: 640px) { .animate-float { animation: none; } }
        .reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s ease, transform .7s ease; will-change: opacity, transform; }
        .reveal.in { opacity: 1; transform: translateY(0); }
        @keyframes border-sheen {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .border-sheen {
          position: relative;
        }
        .border-sheen::before {
          content: '';
          position: absolute; inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(120deg, transparent 30%, rgba(143,197,73,0.6) 50%, transparent 70%);
          background-size: 200% 100%;
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          animation: border-sheen 6s linear infinite;
          pointer-events: none;
          opacity: 0;
          transition: opacity .35s ease;
        }
        .border-sheen:hover::before { opacity: 1; }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
          .animate-float { animation: none; }
          .border-sheen::before { animation: none; }
        }
      `}</style>
    </div>
  );
}

/* ===================== HEADER ===================== */
function Header({
  onCta,
  isDark,
  onToggleTheme,
}: {
  onCta: (p: "/entrar" | "/cadastro" | "/demo/dashboard" | "#planos", plano?: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}) {
  return (
    <header className="lp-header sticky top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 h-[4.5rem] md:h-20 flex items-center justify-between gap-3">
        <a href="/" className="flex items-center gap-2.5" aria-label="ConectaChat — início">
          {isDark ? (
            <>
              <img src="/ConectaChat_icon.svg" alt="" className="h-9 w-9 md:h-10 md:w-10" />
              <span className="font-brand text-[1.5rem] md:text-[1.7rem] leading-none text-white">
                Conecta<span style={{ color: "#8FC549" }}>Chat</span>
              </span>
            </>
          ) : (
            <img src="/ConectaChat_horizontal.svg" alt="ConectaChat" className="h-8 md:h-9 w-auto" />
          )}
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-white/70">
          <a href="#recursos" className="hover:text-white transition">Funcionalidades</a>
          <a href="#planos" className="hover:text-white transition">Preços</a>
          <a href="#faq" className="hover:text-white transition">Perguntas</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Alternar tema"
            title={isDark ? "Tema claro" : "Tema escuro"}
            className="size-10 grid place-items-center rounded-xl glass text-white/80 hover:text-white transition"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            onClick={() => onCta("/entrar")}
            className="hidden sm:inline text-[15px] font-semibold px-4 py-2.5 rounded-xl glass-strong text-white/85 hover:text-white transition"
          >
            Entrar
          </button>
          <button
            onClick={() => onCta("/cadastro")}
            className="text-[15px] font-bold px-5 py-3 rounded-xl text-black btn-glow"
            style={{ background: "linear-gradient(135deg,#8FC549,#79b23a)" }}
          >
            Começar grátis
          </button>
        </div>
      </div>
    </header>
  );
}


/* ===================== HERO ===================== */
function Hero({ onCta }: { onCta: (p: "/entrar" | "/cadastro" | "/demo/dashboard" | "#planos", plano?: string) => void }) {
  return (
    <section className="relative px-4 sm:px-6 md:px-8 pt-12 md:pt-28 pb-16 md:pb-24">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-[13px] px-3.5 py-1.5 rounded-full glass">
            <span className="relative inline-block size-2 rounded-full bg-[#8FC549] dot-pulse" />
            <span className="text-white/80 font-semibold">WhatsApp · IA · Chatbot · CRM em um só app</span>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,7.5vw,5.5rem)] leading-[0.95] mt-6 tracking-tight font-black">
            Atenda e venda pelo WhatsApp com toda a sua equipe em <span className="text-grad">uma só tela</span>.
          </h1>

          <p className="mt-6 text-[17px] sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Caixa de entrada compartilhada, chatbot, inteligência artificial e CRM de vendas — num app
            que instala no celular e no computador. Feito para quem está começando e para quem já vende
            todo dia.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
            <button
              onClick={() => onCta("/cadastro")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-black font-bold text-[16px] btn-glow"
              style={{ background: "linear-gradient(135deg,#8FC549,#79b23a)" }}
            >
              Começar 14 dias grátis
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => onCta("#planos")}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl glass-strong text-white/90 hover:bg-white/10 transition text-[16px] font-semibold cursor-pointer"
            >
              Ver planos
            </button>
          </div>

          <ul className="mt-7 flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-white/65 font-medium">
            <li className="flex items-center gap-1.5"><Check className="size-4 text-[#8FC549]" /> 14 dias grátis</li>
            <li className="flex items-center gap-1.5"><Check className="size-4 text-[#8FC549]" /> sem cartão</li>
            <li className="flex items-center gap-1.5"><Check className="size-4 text-[#8FC549]" /> cancele quando quiser</li>
          </ul>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="relative animate-float">
      {/* glow */}
      <div
        className="absolute -inset-10 rounded-[3rem] blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle, #8FC549 0%, transparent 60%)" }}
      />
      {/* phone */}
      <div
        className="relative w-[270px] sm:w-[320px] md:w-[340px] h-[560px] sm:h-[620px] md:h-[640px] rounded-[2.5rem] p-3 shadow-2xl"
        style={{ background: "var(--lp-phone-shell)", border: "1px solid var(--lp-phone-shell-bd)" }}
      >
        <div
          className="relative w-full h-full rounded-[2rem] overflow-hidden flex flex-col"
          style={{ background: "var(--lp-phone-screen)" }}
        >
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-2 text-[10px] text-white/60">
            <span>9:41</span>
            <span>●●● 5G</span>
          </div>
          {/* chat header */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ background: "var(--lp-chat-header-bg)", borderBottom: "1px solid var(--lp-chat-header-bd)" }}>
            <div className="grid place-items-center size-9 rounded-full text-black font-bold" style={{ background: "linear-gradient(135deg,#8FC549,#79b23a)" }}>
              C
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate">ConectaChat • IA</div>
              <div className="text-[10px] text-[#8FC549] flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[#8FC549]" /> online agora
              </div>
            </div>
          </div>
          {/* messages */}
          <div className="flex-1 px-3 py-4 space-y-3 overflow-hidden">
            <Bubble side="left" delay="0s">Oi! Vi o anúncio do site. Vocês ainda têm vaga pra essa semana?</Bubble>
            <Bubble side="right" delay=".4s">Oi Marina, tudo bem? 👋 Temos sim! Pra qual serviço você tá pensando?</Bubble>
            <Bubble side="left" delay=".8s">Quero fazer design de sobrancelha + cílios</Bubble>
            <Bubble side="right" delay="1.2s">
              Perfeito 🤌 Tenho quinta 15h ou sexta 10h. Qual prefere?
            </Bubble>
            <div className="flex items-center gap-2 text-[10px] text-white/50 pl-2 reveal" style={{ animationDelay: "1.6s" }}>
              <Sparkles className="size-3 text-[#8FC549]" />
              respondido pela IA na hora
            </div>
          </div>
          {/* input */}
          <div className="px-3 py-3 flex items-center gap-2" style={{ background: "var(--lp-chat-header-bg)" }}>
            <div className="flex-1 h-9 rounded-full px-4 text-xs text-white/40 grid place-items-start content-center" style={{ background: "var(--lp-input-pill)" }}>
              Mensagem
            </div>
            <div className="size-9 rounded-full grid place-items-center" style={{ background: "#8FC549" }}>
              <ArrowRight className="size-4 text-black" />
            </div>
          </div>
        </div>
      </div>


      {/* floating CRM card — escondido em telas muito pequenas pra não estourar */}
      <div className="hidden sm:block absolute -left-10 sm:-left-16 bottom-20 glass-strong rounded-2xl p-3.5 w-[220px] shadow-2xl animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/50 font-semibold">
          <KanbanSquare className="size-3 text-[#8FC549]" />
          CRM atualizado
        </div>
        <div className="mt-2 flex items-center gap-2.5">
          <div className="size-9 rounded-full grid place-items-center font-bold text-black" style={{ background: "#8FC549" }}>M</div>
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate">Marina</div>
            <div className="text-[11px] text-white/55 truncate">Novo lead → Negociando</div>
          </div>
        </div>
        <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-2/3" style={{ background: "linear-gradient(90deg,#8FC549,#0055A6)" }} />
        </div>
      </div>

      {/* floating badge top */}
      <div className="hidden sm:flex absolute -right-6 sm:-right-10 top-12 glass-strong rounded-xl px-3 py-2 items-center gap-2 shadow-2xl animate-float" style={{ animationDelay: "3s" }}>
        <span className="size-2 rounded-full bg-[#8FC549] dot-pulse relative" />
        <span className="text-xs font-medium">Lead respondido</span>
      </div>
    </div>
  );
}

function Bubble({ children, side, delay }: { children: React.ReactNode; side: "left" | "right"; delay: string }) {
  const isRight = side === "right";
  return (
    <div
      className={`reveal flex ${isRight ? "justify-end" : "justify-start"}`}
      style={{ transitionDelay: delay, animationDelay: delay }}
      data-reveal
    >
      <div
        className={`max-w-[78%] px-3 py-2 text-[13px] leading-snug rounded-2xl ${isRight ? "rounded-br-sm text-black" : "rounded-bl-sm"}`}
        style={
          isRight
            ? { background: "linear-gradient(135deg,#8FC549,#79b23a)", boxShadow: "0 8px 24px -8px rgba(143,197,73,0.5)" }
            : { background: "var(--lp-bubble-left-bg)", border: "1px solid var(--lp-bubble-left-bd)", color: "var(--lp-bubble-left-fg)" }
        }
      >

        {children}
      </div>
    </div>
  );
}

/* ===================== STATS ===================== */
function Stats() {
  const items = [
    { icon: <LayoutGrid className="size-5" />, n: "13 módulos", l: "prontos e no ar" },
    { icon: <Share2 className="size-5" />, n: "Multicanal", l: "WhatsApp hoje; Instagram e Messenger a caminho" },
    { icon: <Inbox className="size-5" />, n: "1 caixa de entrada", l: "para toda a equipe" },
    { icon: <MonitorSmartphone className="size-5" />, n: "PWA", l: "instala no celular e no PC" },
  ];
  return (
    <section className="px-5 md:px-8 py-12 md:py-16">
      <div className="mx-auto max-w-6xl glass rounded-3xl grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 reveal" data-reveal>
        {items.map((it) => (
          <div key={it.n} className="px-6 py-8 text-center flex flex-col items-center">
            <div className="size-11 rounded-xl grid place-items-center mb-3" style={{ background: "rgba(143,197,73,0.15)", color: "#8FC549" }}>
              {it.icon}
            </div>
            <div className="font-display text-2xl md:text-[1.75rem] text-grad leading-tight">{it.n}</div>
            <div className="text-[12px] text-white/55 mt-2 font-medium leading-snug">{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===================== PAIN ===================== */
function Pain() {
  return (
    <section className="px-5 md:px-8 py-24 md:py-28">
      <div className="mx-auto max-w-3xl text-center reveal" data-reveal>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
          Sua operação inteira de atendimento e vendas, <span className="text-grad">sem gambiarra</span>.
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/65 leading-relaxed">
          Pare de pular entre WhatsApp, planilha e caderninho. O ConectaChat junta atendimento,
          chatbot, inteligência artificial e CRM de vendas num só lugar.
        </p>
      </div>
    </section>
  );
}

/* ===================== HOW IT WORKS ===================== */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "Conecte o WhatsApp",
      d: "Leia o QR Code, como no WhatsApp Web. Conecta em minutos, com o número que você já usa.",
      icon: <MessageSquareText className="size-5" />,
    },
    {
      n: "02",
      t: "Monte seu atendimento",
      d: "Chatbot visual arrastando e soltando, mais um atendente de IA com a sua própria chave (OpenAI, Gemini ou Claude).",
      icon: <Bot className="size-5" />,
    },
    {
      n: "03",
      t: "A equipe atende numa só tela",
      d: "Caixa de entrada compartilhada com filas e transferência, e cada negócio organizado no CRM Kanban.",
      icon: <KanbanSquare className="size-5" />,
    },
  ];
  return (
    <section id="como" className="px-5 md:px-8 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Como funciona" title={<>Do primeiro "oi" ao fechamento, em <span className="text-grad">3 passos</span>.</>} />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="glass border-sheen rounded-2xl p-7 relative reveal" data-reveal>
              <div className="font-display text-5xl text-white/10 absolute right-5 top-4">{s.n}</div>
              <div className="size-11 rounded-xl grid place-items-center" style={{ background: "rgba(143,197,73,0.15)", color: "#8FC549" }}>
                {s.icon}
              </div>
              <h3 className="font-display text-xl mt-4">{s.t}</h3>
              <p className="text-white/65 text-sm mt-2 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== FEATURES ===================== */
function Features() {
  const items = [
    { t: "Caixa de entrada única", d: "Toda a equipe atende do mesmo lugar, com filas, transferência e abas (IA / Aguardando / Minhas / Todas).", icon: <Inbox className="size-5" /> },
    { t: "Chatbot visual", d: "Monte fluxos de atendimento arrastando e soltando, sem programar.", icon: <Share2 className="size-5" /> },
    { t: "Atendente de IA", d: "Robôs com a personalidade da sua empresa, usando OpenAI, Gemini ou Claude com a sua própria chave.", icon: <Bot className="size-5" /> },
    { t: "CRM de vendas (Kanban)", d: "Acompanhe cada negócio, do primeiro “oi” ao fechamento, num quadro visual.", icon: <KanbanSquare className="size-5" /> },
    { t: "Campanhas em massa", d: "Dispare mensagens para listas com proteção anti-banimento e agendamento.", icon: <Megaphone className="size-5" /> },
    { t: "Catálogo de produtos", d: "Envie produtos com foto e preço direto na conversa.", icon: <ShoppingBag className="size-5" /> },
    { t: "Relatórios", d: "Veja atendimentos por dia, por atendente e por canal.", icon: <BarChart3 className="size-5" /> },
    { t: "Integrações", d: "Conecte os apps que você já usa no dia a dia e automatize seu fluxo de trabalho.", icon: <Puzzle className="size-5" /> },
  ];
  return (
    <section id="recursos" className="px-5 md:px-8 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Funcionalidades" title={<>Tudo em <span className="text-grad">um só lugar</span>.</>} />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.t} className="glass border-sheen rounded-2xl p-6 hover:-translate-y-1 transition-transform reveal" data-reveal>
              <div className="size-11 rounded-xl grid place-items-center" style={{ background: "rgba(143,197,73,0.15)", color: "#8FC549" }}>
                {it.icon}
              </div>
              <h3 className="font-display text-lg mt-4">{it.t}</h3>
              <p className="text-white/65 text-sm mt-2 leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== CHANNELS ===================== */
function Channels() {
  const channels = [
    { t: "WhatsApp (QR)", icon: <MessageCircle className="size-5" />, label: "Disponível", color: "#8FC549", bg: "rgba(143,197,73,0.15)" },
    { t: "WhatsApp Oficial (API Meta)", icon: <MessageCircle className="size-5" />, label: "Em entrega", color: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
    { t: "Instagram Direct", icon: <Instagram className="size-5" />, label: "Em breve", color: null as string | null, bg: null as string | null },
    { t: "Messenger", icon: <Facebook className="size-5" />, label: "Em breve", color: null as string | null, bg: null as string | null },
    { t: "Telegram", icon: <Send className="size-5" />, label: "Em breve", color: null as string | null, bg: null as string | null },
  ];
  return (
    <section className="px-5 md:px-8 py-24 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle
          eyebrow="Canais"
          title={<>Comece pelo WhatsApp. Cresça para <span className="text-grad">onde seu cliente estiver</span>.</>}
        />
        <p className="mt-6 text-lg text-white/65 leading-relaxed max-w-2xl mx-auto reveal" data-reveal>
          Conecte seu WhatsApp em minutos, lendo um QR Code. Em breve, também Instagram Direct,
          Facebook Messenger e Telegram — todos na mesma caixa de entrada. E, para quem quer a via
          oficial, o WhatsApp Oficial (API da Meta) está em entrega.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 reveal" data-reveal>
          {channels.map((c) => (
            <div key={c.t} className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
              <span
                className="size-9 rounded-xl grid place-items-center shrink-0"
                style={{ background: c.bg ?? "rgba(var(--lp-fg-rgb),0.08)", color: c.color ?? "rgba(var(--lp-fg-rgb),0.5)" }}
              >
                {c.icon}
              </span>
              <div className="text-left">
                <div className="text-sm font-semibold">{c.t}</div>
                <div className="text-[11px] font-semibold flex items-center gap-1.5" style={{ color: c.color ?? "rgba(var(--lp-fg-rgb),0.5)" }}>
                  <span className="size-1.5 rounded-full" style={{ background: c.color ?? "rgba(var(--lp-fg-rgb),0.4)" }} />
                  {c.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== AI EDGE ===================== */
function AiEdge() {
  const benefits = [
    "Responde na hora",
    "Entende áudios do cliente",
    "Passa para um humano quando precisa",
  ];
  const providers = ["OpenAI", "Google Gemini", "Anthropic Claude"];
  return (
    <section className="px-4 sm:px-5 md:px-8 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div
          className="glass-strong rounded-[2rem] p-8 sm:p-12 md:p-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center reveal"
          data-reveal
        >
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#8FC549] font-bold">
              <Sparkles className="size-3.5" /> Inteligência artificial
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.02] tracking-tight mt-5">
              IA que trabalha por você — <span className="text-grad">sem custo escondido</span>.
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Crie um atendente de IA que responde na hora, entende áudios do cliente e passa para um
              humano quando precisa. A IA usa a chave da sua própria conta (OpenAI, Google Gemini ou
              Anthropic Claude), então você paga o provedor direto, pelo seu uso — sem taxa extra nossa
              por cima.
            </p>
            <div className="mt-7 inline-flex items-center gap-2.5 rounded-2xl px-4 py-3 glass">
              <span className="size-8 rounded-xl grid place-items-center shrink-0" style={{ background: "rgba(143,197,73,0.15)", color: "#8FC549" }}>
                <Bot className="size-4" />
              </span>
              <span className="text-sm font-semibold">
                Sua chave, seu custo — <span className="text-[#8FC549]">0% de taxa</span> por cima.
              </span>
            </div>
          </div>
          <div className="space-y-7">
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="size-6 rounded-full grid place-items-center shrink-0" style={{ background: "rgba(143,197,73,0.2)" }}>
                    <Check className="size-3.5 text-[#8FC549]" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] font-medium text-white/85">{b}</span>
                </li>
              ))}
            </ul>
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-bold mb-3">Funciona com</div>
              <div className="flex flex-wrap gap-2.5">
                {providers.map((p) => (
                  <span key={p} className="glass rounded-xl px-4 py-2.5 text-sm font-semibold">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== PRICING ===================== */
function Pricing({ onCta }: { onCta: (p: "/entrar" | "/cadastro" | "/demo/dashboard" | "#planos", plano?: string) => void }) {
  const plans = [
    {
      slug: "solo",
      n: "Solo / MEI",
      from: "R$ 49",
      p: "R$ 27",
      d: "Para o autônomo ou MEI começando a organizar o atendimento.",
      f: [
        "1 canal (WhatsApp)",
        "1 usuário",
        "1.000 conversas/mês",
        "1.000 contatos",
        "1 agente de IA",
        "1 funil de CRM",
      ],
      cta: "Começar grátis",
    },
    {
      slug: "essencial",
      n: "Essencial",
      from: "R$ 97",
      p: "R$ 47",
      d: "Para o pequeno negócio com uma equipe enxuta.",
      f: [
        "1 canal (WhatsApp)",
        "3 usuários",
        "3.000 conversas/mês",
        "5.000 contatos",
        "3 agentes de IA",
        "1 funil de CRM",
      ],
      cta: "Começar grátis",
    },
    {
      slug: "professional",
      n: "Professional",
      from: "R$ 197",
      p: "R$ 97",
      d: "Para o time que já vende todo dia. O mais escolhido.",
      f: [
        "4 canais",
        "10 usuários",
        "10.000 conversas/mês",
        "15.000 contatos",
        "Agentes de IA ilimitados",
        "5 funis de CRM",
      ],
      highlight: true,
      cta: "Quero o Professional",
    },
    {
      slug: "avancado",
      n: "Avançado",
      from: "R$ 397",
      p: "R$ 297",
      d: "Para operação de alta performance e várias equipes.",
      f: [
        "Canais ilimitados*",
        "20+ usuários",
        "40.000 conversas/mês",
        "50.000 contatos",
        "Agentes de IA ilimitados",
        "Funis ilimitados",
      ],
      cta: "Começar grátis",
    },
  ];
  const notes = [
    "Canal = cada número de WhatsApp, conta de Instagram ou página de Messenger conectada.",
    "*Planos “ilimitados” seguem política de uso justo.",
    "Preço de fundador travado por 12 meses para quem entrar entre os 100 primeiros.",
    "Pague no anual via Pix e economize ~17%.",
    "Cartão exigido só na contratação após o teste. Cancele em até 30 dias e devolvemos seu dinheiro.",
  ];
  return (
    <section id="planos" className="px-5 md:px-8 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Planos" title={<>Preço de <span className="text-grad">fundador</span>. Só para os 100 primeiros.</>} />
        <p className="text-center text-white/60 max-w-2xl mx-auto mt-5 text-[15px] leading-relaxed">
          Todos os planos incluem <strong className="text-white/85">todas as funcionalidades</strong>. A diferença é o quanto você usa — não o que
          pode usar. Preço de fundador travado por 12 meses.
        </p>
        <p className="text-center text-[13px] font-semibold text-[#8FC549] mt-3">Todos os planos têm 14 dias grátis, sem cartão.</p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {plans.map((pl) => (
            <div
              key={pl.n}
              className={`relative rounded-2xl p-7 flex flex-col reveal ${pl.highlight ? "glass-strong" : "glass"}`}
              data-reveal
              style={pl.highlight ? { boxShadow: "0 20px 60px -20px rgba(143,197,73,0.5), 0 0 0 1px rgba(143,197,73,0.4) inset" } : undefined}
            >
              {pl.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full text-black whitespace-nowrap" style={{ background: "linear-gradient(135deg,#8FC549,#79b23a)" }}>
                  Mais popular
                </div>
              )}
              <div className="text-sm text-white/60 font-semibold uppercase tracking-wider">{pl.n}</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-sm text-white/40 line-through">{pl.from}</span>
                <span className="text-[11px] uppercase tracking-wider text-[#8FC549] font-bold">fundador</span>
              </div>
              <div className="font-display text-4xl mt-1">
                {pl.p}
                <span className="text-base text-white/50 font-normal">/mês</span>
              </div>
              <p className="text-sm text-white/60 mt-3 min-h-[56px]">{pl.d}</p>
              <ul className="mt-5 space-y-2.5 text-sm flex-1">
                {pl.f.map((x) => (
                  <li key={x} className="flex gap-2.5">
                    <span className="mt-0.5 size-4 rounded-full grid place-items-center shrink-0" style={{ background: "rgba(143,197,73,0.2)" }}>
                      <Check className="size-2.5 text-[#8FC549]" strokeWidth={3} />
                    </span>
                    <span className="text-white/80">{x}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onCta("/cadastro", pl.slug)}
                className={`mt-7 w-full px-4 py-3 rounded-xl font-semibold transition ${
                  pl.highlight ? "text-black btn-glow" : "glass-strong text-white hover:bg-white/10"
                }`}
                style={pl.highlight ? { background: "linear-gradient(135deg,#8FC549,#79b23a)" } : undefined}
              >
                {pl.cta}
              </button>
            </div>
          ))}
        </div>
        <ul className="mt-8 max-w-3xl mx-auto space-y-1.5 text-xs text-white/45 leading-relaxed">
          {notes.map((n) => (
            <li key={n} className="flex gap-2">
              <span className="text-[#8FC549]">•</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ===================== INCLUDED IN ALL PLANS ===================== */
function IncludedInAll() {
  const items = [
    "Caixa de entrada omnichannel",
    "Chatbot visual",
    "Atendente de IA",
    "CRM completo",
    "Campanhas em massa",
    "Catálogo",
    "Contatos e etiquetas",
    "Relatórios",
    "Agendamento",
    "Chat interno da equipe",
    "Integrações",
    "App instalável (PWA)",
  ];
  return (
    <section className="px-5 md:px-8 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Incluído em todos os planos" title={<>O que muda é a <span className="text-grad">capacidade</span>.</>} />
        <p className="text-center text-white/60 max-w-2xl mx-auto mt-5 text-[15px]">As funções são as mesmas para todos.</p>
        <div className="mt-10 glass rounded-3xl p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 reveal" data-reveal>
          {items.map((it) => (
            <div key={it} className="flex items-center gap-3">
              <span className="size-6 rounded-full grid place-items-center shrink-0" style={{ background: "rgba(143,197,73,0.2)" }}>
                <Check className="size-3.5 text-[#8FC549]" strokeWidth={3} />
              </span>
              <span className="text-[15px] font-medium text-white/85">{it}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== TESTIMONIALS ===================== */
function Testimonials() {
  const items = [
    {
      n: "Camila — Studio de Estética",
      t: "Eu atendia entre clientes e perdia muita agenda. Agora a IA marca sozinha. Faturei 32% a mais no segundo mês.",
    },
    {
      n: "Rafael — Loja de Suplementos",
      t: "A galera me chamava no WhatsApp 1h da manhã. Hoje todo mundo é respondido na hora. CRM organizado sem eu tocar.",
    },
    {
      n: "Marina — Agência de Marketing",
      t: "Tirei o lead frio do operacional do time. A IA filtra e só passa quem é quente. Salvou minha sanidade.",
    },
  ];
  return (
    <section className="px-5 md:px-8 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Quem usa" title={<>Times que pararam de perder venda <span className="text-grad">no 'oi, sumiu'</span>.</>} />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.n} className="glass border-sheen rounded-2xl p-6 reveal" data-reveal>
              <div className="flex gap-1 text-[#facc15]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="text-white/85 mt-4 leading-relaxed text-[15px]">"{it.t}"</p>
              <div className="mt-5 text-sm text-white/55">{it.n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== FAQ ===================== */
function Faq() {
  const items = [
    {
      q: "Preciso de cartão para testar?",
      a: "Não. São 14 dias grátis, sem cartão. O cartão só entra se você decidir continuar.",
    },
    {
      q: "Como funciona a conexão com o WhatsApp?",
      a: "Hoje, você conecta lendo um QR Code, como no WhatsApp Web. É rápido, mas é uma conexão não oficial: você é responsável por seguir as regras da Meta e evitar spam. Para quem quer a via 100% oficial, o WhatsApp Oficial (API da Meta) está em entrega.",
    },
    {
      q: "O que conta como “canal”?",
      a: "Cada número de WhatsApp, conta de Instagram ou página de Messenger que você conectar conta como um canal.",
    },
    {
      q: "A inteligência artificial tem custo extra?",
      a: "A IA usa a chave da sua própria conta (OpenAI, Gemini ou Claude). Você paga o provedor pelo seu uso, e não cobramos nada por cima disso.",
    },
    {
      q: "Posso cancelar quando quiser?",
      a: "Sim. Você cancela a qualquer momento e evita as próximas cobranças. E temos garantia de reembolso de 30 dias.",
    },
    {
      q: "Meus dados e os dos meus clientes estão seguros?",
      a: "Sim. Cada empresa tem seus dados isolados dos demais, e tratamos tudo conforme a LGPD.",
    },
    {
      q: "O preço de fundador é para sempre?",
      a: "O preço de fundador fica travado por 12 meses a partir da sua contratação, enquanto você for cliente ativo.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-5 md:px-8 py-24 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionTitle eyebrow="Dúvidas" title={<>Antes de você perguntar.</>} />
        <div className="mt-10 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="glass border-sheen rounded-2xl overflow-hidden reveal" data-reveal>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left">
                  <span className="font-semibold">{it.q}</span>
                  <span className="size-7 grid place-items-center rounded-full shrink-0" style={{ background: "rgba(143,197,73,0.15)", color: "#8FC549" }}>
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                {isOpen && <div className="px-5 pb-5 text-white/70 text-sm leading-relaxed">{it.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===================== FINAL CTA ===================== */
function FinalCta({ onCta }: { onCta: (p: "/entrar" | "/cadastro" | "/demo/dashboard" | "#planos", plano?: string) => void }) {
  return (
    <section className="px-4 sm:px-5 md:px-8 py-20 md:py-28">
      <div
        className="mx-auto max-w-6xl rounded-[2rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden reveal"
        data-reveal
        style={{
          background: "var(--lp-final-bg)",
          border: "1px solid var(--lp-final-bd)",
          boxShadow: "var(--lp-final-shadow)",
        }}
      >

        <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[500px] rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle,#8FC549,transparent 60%)" }} />
        <div className="relative">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.0] tracking-tight max-w-3xl mx-auto">
            Comece hoje. Leva <span className="text-grad">menos de 5 minutos</span> para conectar seu WhatsApp.
          </h2>
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => onCta("/cadastro")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-black font-bold text-base sm:text-lg btn-glow"
              style={{ background: "linear-gradient(135deg,#8FC549,#79b23a)" }}
            >
              Começar 14 dias grátis <ArrowRight className="size-5" />
            </button>
          </div>
          <p className="mt-5 text-sm text-white/60 font-medium">Sem cartão • Cancele quando quiser</p>
        </div>
      </div>
    </section>
  );
}

/* ===================== FOOTER ===================== */
function Footer() {
  return (
    <footer className="px-5 md:px-8 pt-16 md:pt-20 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:gap-8 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="/" className="flex items-center gap-2.5" aria-label="ConectaChat — início">
              <img src="/ConectaChat_icon.svg" alt="" className="h-9 w-9" />
              <span className="font-brand text-[1.4rem] leading-none">
                Conecta<span style={{ color: "#8FC549" }}>Chat</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-white/55 leading-relaxed max-w-xs">
              Atendimento e vendas pelo WhatsApp.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/45 font-bold">Produto</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              <li><a href="#recursos" className="hover:text-white">Funcionalidades</a></li>
              <li><a href="#planos" className="hover:text-white">Preços</a></li>
              <li><a href={appLoginUrl} className="hover:text-white">Entrar</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/45 font-bold">Legal</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              <li><a href="/termos" className="hover:text-white">Termos e Condições</a></li>
              <li><a href="/privacidade" className="hover:text-white">Política de Privacidade</a></li>
              <li><a href="/reembolso" className="hover:text-white">Política de Reembolso</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/45 font-bold">Contato</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              <li><a href={`mailto:${contactEmail}`} className="hover:text-white">{contactEmail}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/40 leading-relaxed">
          © {new Date().getFullYear()} {brand.name}. Operado por R Drumond Santos LTDA — CNPJ 55.595.377/0001-22.
        </div>
      </div>
    </footer>
  );
}

/* ===================== HELPERS ===================== */
function SectionTitle({ eyebrow, title }: { eyebrow: string; title: React.ReactNode; center?: boolean }) {
  // Padronizado: sempre centralizado, maior, com eyebrow em destaque.
  return (
    <div className="reveal text-center" data-reveal>
      <div className="inline-flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#8FC549] font-bold">
        <span className="h-px w-10 bg-[#8FC549]/60" />
        {eyebrow}
        <span className="h-px w-10 bg-[#8FC549]/60" />
      </div>
      <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.98] tracking-tight mt-5 max-w-4xl mx-auto">
        {title}
      </h2>
    </div>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" },
    );
    // single pass — todos os elementos já estão no markup ao montar
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);
  function toggle() {
    const next = !isDark;
    setIsDark(next);
    const root = document.documentElement;
    if (next) root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }
  return { isDark, toggle };
}

