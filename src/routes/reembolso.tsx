import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/reembolso")({
  head: () => ({
    meta: [
      { title: "Política de Reembolso — ConectaChat" },
      { name: "description", content: "Teste grátis de 14 dias e garantia de satisfação de 30 dias. Saiba como solicitar reembolso." },
    ],
  }),
  component: ReembolsoPage,
});

function ReembolsoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/" className="text-sm text-slate-500 hover:text-slate-900">← Voltar</Link>
        <h1 className="mt-6 text-4xl font-bold">Política de Reembolso</h1>
        <p className="mt-2 text-sm text-slate-500">Última atualização: 8 de julho de 2026</p>

        <div className="mt-10 space-y-8 leading-relaxed text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Teste grátis primeiro</h2>
            <p className="mt-2">
              Antes de qualquer cobrança, você pode avaliar o ConectaChat com um <strong>teste gratuito
              de 14 dias, sem cartão</strong>. Aproveite esse período para confirmar que a plataforma
              atende às suas necessidades.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Garantia de 30 dias</h2>
            <p className="mt-2">
              O ConectaChat oferece uma <strong>garantia de satisfação de 30 dias</strong>. Se você não
              estiver satisfeito com sua compra, pode solicitar reembolso integral em até <strong>30 dias
              a partir da data do pagamento</strong>.
            </p>
            <p className="mt-3 border-l-4 border-slate-200 pl-4 text-slate-600">
              Independentemente desta garantia, o Código de Defesa do Consumidor assegura ao consumidor o
              direito de arrependimento em até <strong>7 dias</strong> a partir da contratação em compras
              feitas pela internet. Nossa garantia de 30 dias é mais ampla que o mínimo legal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Como solicitar</h2>
            <p className="mt-2">
              Os pagamentos são processados pela <strong>Stripe</strong>, e os reembolsos são feitos por
              nós diretamente. Para solicitar:
            </p>
            <ol className="mt-2 list-decimal pl-6 space-y-1">
              <li>Entre em contato com nosso suporte por <strong>contato@conectachat.online</strong>, informando o e-mail da conta e o motivo.</li>
              <li>Confirmada a elegibilidade, processamos o estorno pela Stripe.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Prazo de processamento</h2>
            <p className="mt-2">
              Após a aprovação, o estorno costuma aparecer no método de pagamento original em até{" "}
              <strong>5 a 10 dias úteis</strong>, conforme as regras do emissor do cartão ou do meio de
              pagamento utilizado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Assinaturas e renovações</h2>
            <p className="mt-2">
              Você pode cancelar sua assinatura a qualquer momento, pela sua conta ou pelo suporte, para
              evitar renovações futuras. Cobranças de renovação são elegíveis a reembolso quando a
              solicitação ocorrer dentro do período de <strong>30 dias da fatura correspondente</strong>,
              conforme esta política.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Planos anuais pagos via Pix</h2>
            <p className="mt-2">
              Para planos anuais pagos via Pix, aplica-se a mesma garantia de 30 dias a partir do
              pagamento. Reembolsos de Pix são processados para a conta de origem, conforme as regras
              aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Contato</h2>
            <p className="mt-2">
              Dúvidas sobre reembolsos: <strong>contato@conectachat.online</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
