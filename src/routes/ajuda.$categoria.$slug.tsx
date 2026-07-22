import { createFileRoute, Link, useParams } from "@tanstack/react-router";

import { HelpShell, Breadcrumb } from "@/components/help/help-shell";
import { ArticleBody } from "@/components/help/article-body";
import { articleBody, articlesOf, findArticle, findCategory } from "@/content/help/help-catalog";

export const Route = createFileRoute("/ajuda/$categoria/$slug")({
  head: () => ({ meta: [{ title: "Central de Ajuda — ConectaChat" }] }),
  component: HelpArticlePage,
});

function HelpArticlePage() {
  const { categoria, slug } = useParams({ from: "/ajuda/$categoria/$slug" });
  const cat = findCategory(categoria);
  const article = findArticle(categoria, slug);
  const body = articleBody(categoria, slug);

  if (!cat || !article || !body) {
    return (
      <HelpShell>
        <div className="mx-auto w-full max-w-3xl px-4 py-16 text-center">
          <h1 className="font-display text-xl font-bold">Artigo não encontrado</h1>
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

  const related = articlesOf(cat.slug).filter((a) => a.slug !== article.slug);

  return (
    <HelpShell>
      <article className="mx-auto w-full max-w-3xl px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Ajuda", to: "/ajuda" },
            { label: cat.title, to: "/ajuda/$categoria", params: { categoria: cat.slug } },
            { label: article.title },
          ]}
        />

        <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight">
          {article.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{article.description}</p>

        <hr className="my-6 border-hairline" />

        <ArticleBody markdown={body} />

        {related.length > 0 && (
          <section className="mt-12 border-t border-hairline pt-6">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Continue lendo
            </h2>
            <ul className="mt-3 space-y-2">
              {related.map((a) => (
                <li key={a.slug}>
                  <Link
                    to="/ajuda/$categoria/$slug"
                    params={{ categoria: cat.slug, slug: a.slug }}
                    className="text-sm font-medium text-brand-text hover:underline"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </HelpShell>
  );
}
