import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";

import { searchArticles } from "@/content/help/help-catalog";

// Busca da Central de Ajuda — 100% no navegador (o conteúdo já vem no bundle),
// então o resultado aparece enquanto digita, sem servidor.
export function HelpSearch({ autoFocus = false }: { autoFocus?: boolean }) {
  const [term, setTerm] = useState("");
  const hits = useMemo(() => searchArticles(term), [term]);
  const searching = term.trim().length >= 2;

  return (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        value={term}
        autoFocus={autoFocus}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Busque por uma dúvida (ex.: conectar WhatsApp, transferir conversa…)"
        aria-label="Buscar na central de ajuda"
        className="h-12 w-full rounded-xl border border-hairline bg-card pl-10 pr-4 text-sm shadow-[var(--shadow-card)] outline-none focus:border-primary"
      />

      {searching && (
        <div className="absolute left-0 right-0 top-14 z-30 overflow-hidden rounded-xl border border-hairline bg-card shadow-[var(--shadow-glow)]">
          {hits.length === 0 ? (
            <p className="px-4 py-5 text-center text-sm text-muted-foreground">
              Nada encontrado para “{term}”. Tente outra palavra.
            </p>
          ) : (
            <ul className="max-h-80 divide-y divide-hairline overflow-y-auto">
              {hits.slice(0, 8).map(({ article, category }) => (
                <li key={`${article.category}/${article.slug}`}>
                  <Link
                    to="/ajuda/$categoria/$slug"
                    params={{ categoria: article.category, slug: article.slug }}
                    className="block px-4 py-3 hover:bg-muted"
                  >
                    <p className="text-sm font-medium text-foreground">{article.title}</p>
                    <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                      {category.title} · {article.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
