import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos e Condições — ConectaChat" },
      { name: "description", content: "Termos e Condições de uso da plataforma ConectaChat." },
    ],
  }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/" className="text-sm text-slate-500 hover:text-slate-900">← Voltar</Link>
        <h1 className="mt-6 text-4xl font-bold">Termos e Condições</h1>
        <p className="mt-2 text-sm text-slate-500">Última atualização: 8 de julho de 2026</p>

        <div className="mt-10 space-y-8 leading-relaxed text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Quem somos</h2>
            <p className="mt-2">
              Estes Termos regulam o uso da plataforma <strong>ConectaChat</strong> ("ConectaChat",
              "Serviço", "Plataforma"), disponível em app.conectachat.online, operada por{" "}
              <strong>R Drumond Santos LTDA</strong>, inscrita no CNPJ nº <strong>55.595.377/0001-22</strong>,
              com sede em São Luís/MA ("nós", "nosso"). Ao acessar ou usar o Serviço, você ("você",
              "Cliente") concorda com estes Termos. Se não concordar, não utilize o Serviço.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. Aceitação e capacidade</h2>
            <p className="mt-2">
              Ao criar uma conta, contratar um plano, iniciar um teste gratuito ou continuar usando o
              Serviço, você declara ter capacidade legal e poderes para celebrar este contrato —
              inclusive, quando aplicável, em nome da pessoa jurídica que representa — e concorda
              integralmente com estes Termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. Descrição do Serviço</h2>
            <p className="mt-2">
              O ConectaChat é uma plataforma de atendimento e vendas omnichannel (WhatsApp e,
              futuramente, outros canais), com caixa de entrada compartilhada, múltiplos atendentes,
              chatbot, agentes de inteligência artificial, CRM de vendas, campanhas, catálogo e
              integrações. Os recursos e as capacidades disponíveis (número de canais, usuários,
              agentes e funis) dependem do plano contratado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Teste gratuito</h2>
            <p className="mt-2">
              Podemos oferecer um período de teste gratuito (atualmente 14 dias, sem necessidade de
              cartão). Ao fim do período, o acesso poderá ser limitado até a contratação de um plano.
              Podemos alterar ou encerrar a oferta de teste a qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Canais de terceiros e WhatsApp</h2>
            <p className="mt-2">
              O ConectaChat conecta-se a serviços de terceiros, incluindo o WhatsApp. Você reconhece e
              aceita que:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>a conexão com o WhatsApp pode ocorrer por meio <strong>não oficial</strong> (leitura de QR Code), que <strong>não é homologado pela Meta/WhatsApp</strong>;</li>
              <li>a Meta pode, a seu critério, <strong>limitar, suspender ou banir números</strong>, inclusive sem aviso prévio, e o ConectaChat <strong>não tem controle nem responsabilidade</strong> sobre essas decisões;</li>
              <li>você é o único responsável por utilizar os canais em conformidade com os termos da Meta/WhatsApp e com a legislação aplicável (inclusive regras sobre mensagens em massa e consentimento dos destinatários);</li>
              <li>recomendamos o uso da <strong>API Oficial do WhatsApp</strong> quando disponível, para reduzir riscos.</li>
            </ul>
            <p className="mt-2">O uso de canais de terceiros é feito por sua conta e risco.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Uso aceitável</h2>
            <p className="mt-2">Você concorda em não:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>usar o Serviço para fins ilegais, fraudulentos ou abusivos;</li>
              <li>enviar spam ou mensagens não solicitadas, ou mensagens sem base legal/consentimento dos destinatários, em violação às leis aplicáveis;</li>
              <li>violar direitos de propriedade intelectual de terceiros;</li>
              <li>interferir na segurança do Serviço (malware, scraping, engenharia reversa, tentativas de acesso não autorizado);</li>
              <li>revender, sublicenciar ou redistribuir o Serviço sem autorização.</li>
            </ul>
            <p className="mt-2">
              O descumprimento pode resultar em suspensão ou encerramento imediato, sem prejuízo de
              outras medidas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">7. Suas responsabilidades sobre dados de terceiros (LGPD)</h2>
            <p className="mt-2">
              Ao usar o Serviço para tratar dados de seus próprios contatos e clientes, <strong>você atua
              como controlador</strong> desses dados pessoais e o ConectaChat atua como <strong>operador</strong>{" "}
              (processador), nos termos da LGPD (Lei nº 13.709/2018). Você declara possuir base legal
              adequada (consentimento ou outra hipótese legal) para tratar e enviar mensagens a esses
              contatos, e é responsável por atender às solicitações e aos direitos dos titulares.
              Detalhes em nossa <Link to="/privacidade" className="underline">Política de Privacidade</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">8. Propriedade intelectual</h2>
            <p className="mt-2">
              Todo o software, marca, layout, documentação e materiais do Serviço são de propriedade do
              ConectaChat ou de seus licenciadores. Concedemos a você uma licença limitada, não
              exclusiva e intransferível para usar o Serviço conforme o plano contratado. O conteúdo que
              você insere (mensagens, contatos, mídias, catálogos) permanece seu; você nos concede apenas
              a licença necessária para operar o Serviço em seu benefício.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">9. Pagamentos e assinaturas</h2>
            <p className="mt-2">
              Os pagamentos são processados por meio da <strong>Stripe</strong>, nossa processadora de
              pagamentos. Não armazenamos dados completos de cartão — eles são tratados diretamente pela
              Stripe, certificada no padrão PCI-DSS.
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>As assinaturas são cobradas conforme o plano e a periodicidade escolhidos (mensal ou anual) e <strong>renovam-se automaticamente</strong> até que sejam canceladas.</li>
              <li>Preços podem ser reajustados mediante aviso prévio; reajustes não afetam o período já pago.</li>
              <li>Impostos aplicáveis podem ser acrescidos ao valor.</li>
              <li>Em caso de falha no pagamento, podemos suspender o acesso após novas tentativas de cobrança.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">10. Cancelamento e reembolso</h2>
            <p className="mt-2">
              Você pode cancelar a assinatura a qualquer momento, pela sua conta ou pelo suporte,
              evitando renovações futuras. Os reembolsos seguem a nossa{" "}
              <Link to="/reembolso" className="underline">Política de Reembolso</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">11. Nível de serviço</h2>
            <p className="mt-2">
              Empenhamo-nos em manter o Serviço disponível, porém <strong>não garantimos operação
              ininterrupta ou livre de erros</strong>, especialmente por depender de serviços de
              terceiros (como WhatsApp/Meta). Garantias implícitas são excluídas na máxima extensão
              permitida pela legislação aplicável.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">12. Suspensão e encerramento</h2>
            <p className="mt-2">
              Podemos suspender ou encerrar o acesso em caso de: violação material destes Termos,
              inadimplência, risco de fraude ou segurança, ou violações repetidas das nossas políticas.
              Em encerramentos por sua iniciativa, você poderá exportar seus dados dentro do prazo
              informado antes da exclusão.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">13. Limitação de responsabilidade</h2>
            <p className="mt-2">
              Na máxima extensão permitida em lei, nossa responsabilidade total será limitada aos valores
              efetivamente pagos por você nos 12 meses anteriores ao evento. Não respondemos por danos
              indiretos, lucros cessantes ou perda de dados. As limitações desta cláusula não afastam
              direitos que a legislação consumerista assegure de forma inderrogável.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">14. Alterações destes Termos</h2>
            <p className="mt-2">
              Podemos atualizar estes Termos periodicamente. Mudanças relevantes serão comunicadas no
              Serviço. O uso continuado após a vigência implica concordância.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">15. Lei aplicável e foro</h2>
            <p className="mt-2">
              Estes Termos são regidos pelas leis do Brasil. Fica eleito o foro de <strong>São Luís/MA</strong>{" "}
              para dirimir controvérsias, ressalvado o direito do consumidor de ajuizar demandas no foro
              do seu próprio domicílio, nos termos do Código de Defesa do Consumidor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">16. Contato</h2>
            <p className="mt-2">
              Dúvidas sobre estes Termos: <strong>contato@conectachat.online</strong> ou pelos canais do
              Serviço.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
