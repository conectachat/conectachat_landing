import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, LifeBuoy } from "lucide-react";

import { appLoginUrl, appSignupUrl, contactEmail } from "@/config/brand";

// Moldura das páginas da Central de Ajuda (públicas, sem login).
// Vive na LANDING (conectachat.online/ajuda) e usa os mesmos tokens do site.
export function HelpShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Cabeçalho */}
      <header className="sticky top-0 z-20 border-b border-hairline bg-card/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center gap-3 px-4 py-3">
          <Link to="/ajuda" className="flex items-center gap-2">
            <img src="/ConectaChat_horizontal.svg" alt="ConectaChat" className="h-7 w-auto" />
            <span className="hidden text-sm font-medium text-muted-foreground sm:inline">Ajuda</span>
          </Link>
          <div className="ml-auto flex items-center gap-1.5">
            <Link
              to="/"
              className="hidden items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar ao site
            </Link>
            <a
              href={appLoginUrl}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Entrar
            </a>
            <a
              href={appSignupUrl}
              className="rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Criar conta
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* Rodapé */}
      <footer className="border-t border-hairline bg-panel-2">
        <div className="mx-auto w-full max-w-5xl px-4 py-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-sm font-semibold text-foreground">
                Não encontrou o que precisava?
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Já é cliente? Fale com o suporte pelo botão “Suporte”, no menu lateral do app.
              </p>
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-hairline bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <LifeBuoy className="h-4 w-4" />
              Falar com o suporte
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} ConectaChat. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

/** Caminho de navegação (Ajuda › Categoria › Artigo). */
export function Breadcrumb({
  items,
}: {
  items: { label: string; to?: string; params?: Record<string, string> }[];
}) {
  return (
    <nav className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
      {items.map((it, i) => (
        <span key={`${it.label}-${i}`} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden>›</span>}
          {it.to ? (
            <Link
              to={it.to}
              params={it.params as never}
              className="hover:text-foreground hover:underline"
            >
              {it.label}
            </Link>
          ) : (
            <span className="text-foreground">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
