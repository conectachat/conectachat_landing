import { createFileRoute, Link } from "@tanstack/react-router";

import { HelpShell } from "@/components/help/help-shell";
import { HelpSearch } from "@/components/help/help-search";
import { HELP_CATEGORIES, articlesOf } from "@/content/help/help-catalog";

export const Route = createFileRoute("/ajuda/")({
  head: () => ({
    meta: [
      { title: "Central de Ajuda — ConectaChat" },
      {
        name: "description",
        content:
          "Aprenda a usar o ConectaChat: conectar o WhatsApp, atender, automatizar com IA, CRM e campanhas.",
      },
    ],
  }),
  component: HelpHome,
});

function HelpHome() {
  return (
    <HelpShell>
      {/* Hero + busca */}
      <section className="border-b border-hairline bg-panel-2">
        <div className="mx-auto w-full max-w-5xl px-4 py-12 text-center sm:py-16">
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Como podemos ajudar?
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Encontre respostas rápidas sobre o ConectaChat — do primeiro acesso às automações.
          </p>
          <div className="mx-auto mt-6 max-w-2xl">
            <HelpSearch />
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="mx-auto w-full max-w-5xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HELP_CATEGORIES.map((c) => {
            const Icon = c.icon;
            const count = articlesOf(c.slug).length;
            return (
              <Link
                key={c.slug}
                to="/ajuda/$categoria"
                params={{ categoria: c.slug }}
                className="group rounded-xl border border-hairline bg-card p-5 shadow-[var(--shadow-card)] transition-colors hover:border-primary/50"
              >
                <span
                  className="grid size-10 place-items-center rounded-lg"
                  style={{ backgroundColor: `${c.color}1A`, color: c.color }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-3 font-display text-base font-semibold group-hover:text-brand-text">
                  {c.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {count} {count === 1 ? "artigo" : "artigos"}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </HelpShell>
  );
}
