import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — ConectaChat" },
      { name: "description", content: "Como o ConectaChat coleta, usa e protege dados pessoais, conforme a LGPD." },
    ],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/" className="text-sm text-slate-500 hover:text-slate-900">← Voltar</Link>
        <h1 className="mt-6 text-4xl font-bold">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-slate-500">Última atualização: 8 de julho de 2026</p>

        <p className="mt-6 leading-relaxed text-slate-700">
          Esta Política explica como o <strong>ConectaChat</strong>, operado por{" "}
          <strong>R Drumond Santos LTDA</strong>, CNPJ <strong>55.595.377/0001-22</strong> ("nós",
          "nosso"), trata dados pessoais, conforme a LGPD (Lei nº 13.709/2018) e demais leis
          aplicáveis.
        </p>

        <div className="mt-10 space-y-8 leading-relaxed text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Dois papéis diferentes: controlador e operador</h2>
            <p className="mt-2">
              O ConectaChat trata dados pessoais em <strong>dois papéis distintos</strong>, e isso
              define de quem é a responsabilidade:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li><strong>Como controlador</strong> — em relação aos dados de cadastro e cobrança do Cliente (a empresa que contrata o Serviço) e aos dados de uso da Plataforma. Aqui, definimos as finalidades e respondemos por esse tratamento.</li>
              <li><strong>Como operador (processador)</strong> — em relação aos dados dos contatos e clientes finais que o Cliente processa dentro da Plataforma (mensagens, contatos, mídias). Nesse caso, <strong>o Cliente é o controlador</strong> desses dados: é ele quem define as finalidades e quem deve garantir base legal e consentimento. Nós apenas processamos esses dados sob instrução do Cliente, para operar o Serviço.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. Dados que coletamos</h2>
            <p className="mt-2 font-medium text-slate-900">Como controlador (dados do Cliente):</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Cadastro: nome, e-mail, senha (armazenada com hash), telefone.</li>
              <li>Uso e telemetria: logs, IP, dispositivo, navegador.</li>
              <li>Suporte: conteúdo de tickets e comunicações.</li>
              <li>Cobrança: processada pela Stripe — <strong>não armazenamos dados completos de cartão</strong>.</li>
            </ul>
            <p className="mt-4 font-medium text-slate-900">Como operador (dados que o Cliente processa):</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Conteúdo de conversas, contatos, mídias e informações de CRM que o Cliente insere ou recebe pelos canais conectados.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. Finalidades e bases legais (para os dados dos quais somos controladores)</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Prestar o Serviço e cumprir o contrato (execução de contrato).</li>
              <li>Segurança, prevenção a fraudes e cumprimento de obrigações legais.</li>
              <li>Suporte ao cliente (execução de contrato).</li>
              <li>Melhorias do produto e analytics (legítimo interesse).</li>
              <li>Comunicações de marketing (consentimento, quando aplicável).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Inteligência Artificial</h2>
            <p className="mt-2">
              Quando o Cliente ativa recursos de agentes de IA, o conteúdo das mensagens tratadas por
              esse recurso pode ser enviado a <strong>provedores externos de IA</strong> (por exemplo,
              OpenAI, Google ou Anthropic), utilizando as <strong>credenciais/chave do próprio
              Cliente</strong>. Esse tratamento fica sujeito aos termos e políticas de privacidade do
              provedor escolhido. A ativação e o uso desse recurso são decididos pelo Cliente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Compartilhamento e subprocessadores</h2>
            <p className="mt-2">
              Compartilhamos dados apenas com prestadores necessários à operação do Serviço, incluindo:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li><strong>Stripe</strong> — processamento de pagamentos e assinaturas.</li>
              <li><strong>Supabase</strong> — banco de dados, autenticação e armazenamento (hospedagem).</li>
              <li><strong>Resend</strong> — envio de e-mails transacionais.</li>
              <li><strong>Provedor de infraestrutura de canais</strong> (servidor que conecta o WhatsApp e demais canais).</li>
              <li><strong>Provedores de IA</strong> — quando o Cliente ativa o recurso (ver item 4).</li>
              <li>Integrações ativadas pelo Cliente (ex.: Calendly), conforme a escolha do Cliente.</li>
              <li>Consultores profissionais (jurídico, contábil) quando necessário, e autoridades quando exigido por lei.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Retenção</h2>
            <p className="mt-2">
              Mantemos os dados pelo tempo necessário às finalidades descritas ou conforme exigido por
              lei. Encerrada a relação, os dados são excluídos ou anonimizados dentro dos prazos
              aplicáveis, ressalvadas obrigações legais de guarda.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">7. Seus direitos</h2>
            <p className="mt-2">
              Você pode solicitar acesso, correção, anonimização, portabilidade, eliminação, informações
              sobre compartilhamento e revogação de consentimento, nos termos da LGPD. Se os dados forem
              de contatos processados por um Cliente (situação em que somos operador), encaminharemos a
              solicitação ao Cliente controlador. Para exercer direitos, contate{" "}
              <strong>contato@conectachat.online</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">8. Segurança</h2>
            <p className="mt-2">
              Adotamos medidas técnicas e organizacionais adequadas (criptografia em trânsito, controles
              de acesso, isolamento de dados por empresa, monitoramento) para proteger os dados contra
              acessos não autorizados, perdas ou alterações. Nenhum sistema é 100% imune; em caso de
              incidente relevante, seguiremos as obrigações de comunicação previstas na LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">9. Cookies</h2>
            <p className="mt-2">
              Utilizamos cookies essenciais para autenticação e funcionamento do Serviço, e cookies de
              analytics para melhorar a experiência. Você pode gerenciar preferências no seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">10. Encarregado de dados (DPO)</h2>
            <p className="mt-2">
              Encarregado pelo tratamento de dados: <strong>contato@conectachat.online</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">11. Alterações</h2>
            <p className="mt-2">
              Esta Política pode ser atualizada periodicamente. Mudanças relevantes serão comunicadas no
              Serviço.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
