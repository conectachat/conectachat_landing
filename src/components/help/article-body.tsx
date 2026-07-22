import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Renderiza o markdown do artigo com a tipografia da casa.
// Tabelas e blocos de código rolam sozinhos (nunca empurram a página de lado).
export function ArticleBody({ markdown }: { markdown: string }) {
  return (
    <div className="text-[15px] leading-relaxed text-foreground">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-3 mt-8 font-display text-2xl font-extrabold tracking-tight first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mb-2 mt-8 font-display text-xl font-bold tracking-tight">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-2 mt-6 font-display text-base font-semibold">{children}</h3>
          ),
          p: ({ children }) => <p className="my-3">{children}</p>,
          ul: ({ children }) => <ul className="my-3 list-disc space-y-1.5 pl-5">{children}</ul>,
          ol: ({ children }) => <ol className="my-3 list-decimal space-y-1.5 pl-5">{children}</ol>,
          li: ({ children }) => <li className="pl-1">{children}</li>,
          a: ({ href, children }) => (
            <a
              href={href}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-medium text-brand-text underline underline-offset-2 hover:opacity-80"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
          blockquote: ({ children }) => (
            <blockquote className="my-4 rounded-r-lg border-l-4 border-primary bg-brand-soft px-4 py-2 text-sm">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-8 border-hairline" />,
          code: ({ className, children }) => {
            const isBlock = (className ?? "").includes("language-");
            if (isBlock) {
              return (
                <code className="block font-mono text-[13px] leading-relaxed">{children}</code>
              );
            }
            return (
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">{children}</code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-4 overflow-x-auto rounded-lg border border-hairline bg-panel-2 p-3">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="my-4 overflow-x-auto rounded-lg border border-hairline">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-panel-2">{children}</thead>,
          th: ({ children }) => (
            <th className="border-b border-hairline px-3 py-2 text-left font-semibold">{children}</th>
          ),
          td: ({ children }) => <td className="border-b border-hairline px-3 py-2 align-top">{children}</td>,
          img: ({ src, alt }) => (
            <img src={src} alt={alt ?? ""} className="my-4 max-w-full rounded-lg border border-hairline" />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
