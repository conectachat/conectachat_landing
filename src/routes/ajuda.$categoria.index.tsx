import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { HelpShell, Breadcrumb } from "@/components/help/help-shell";
import { articlesOf, findCategory } from "@/content/help/help-catalog";

export const Route = createFileRoute("/ajuda/$categoria/")({
  head: () => ({ meta: [{ title: "Central de Ajuda — ConectaChat" }] }),
  component: HelpCategoryPage,
});

function HelpCategoryPage() {
  const { categoria } = useParams({ from: "/ajuda/$categoria/" });
  const cat = findCategory(categoria);
  const articles = cat ? articlesOf(cat.slug) : [];

  if (!cat) {
    return (
      <HelpShell>
        <div className="mx-auto w-full max-w-3xl px-4 py-16 text-center">
          <h1 className="font-display text-xl font-bold">Categoria não encontrada</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            O endereço pode estar errado.{" "}
            <Link to="/ajuda" className="text-brand-text underline underline-offset-2">
              Voltar para a central de ajuda
            </Link>
          </p>
        </div>
      </HelpShell>
    );
  }

  const Icon = cat.icon;
  return (
    <HelpShell>
      <div className="mx-auto w-full max-w-3xl px-4 py-8">
        <Breadcrumb items={[{ label: "Ajuda", to: "/ajuda" }, { label: cat.title }]} />

        <div className="mt-4 flex items-start gap-3">
          <span
            className="grid size-11 shrink-0 place-items-center rounded-lg"
            style={{ backgroundColor: `${cat.color}1A`, color: cat.color }}
          >
            <Icon className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h1 className="font-display text-2xl font-extrabold tracking-tight">{cat.title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
          </div>
        </div>

        <ul className="mt-6 divide-y divide-hairline overflow-hidden rounded-xl border border-hairline bg-card">
          {articles.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-muted-foreground">
              Ainda não há artigos nesta categoria.
            </li>
          ) : (
            articles.map((a) => (
              <li key={a.slug}>
                <Link
                  to="/ajuda/$categoria/$slug"
                  params={{ categoria: cat.slug, slug: a.slug }}
                  className="flex items-center gap-3 px-4 py-3.5 hover:bg-muted"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-foreground">{a.title}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{a.description}</span>
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </HelpShell>
  );
}
