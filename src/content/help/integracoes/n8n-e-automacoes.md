O n8n é uma ferramenta de automação em que você monta fluxos ligando serviços — sem programar. Conectado ao ConectaChat, ele faz o seu WhatsApp conversar com o resto dos seus sistemas.

Serve também para Make, Zapier e qualquer ferramenta parecida: a base é a mesma [API pública](/ajuda/api/chaves-de-api).

## Como ligar

1. Crie uma **chave de API** no módulo **API**, com as permissões que a automação precisa.
2. No n8n, use um nó **HTTP Request** com a chave no cabeçalho de autorização.
3. Para o caminho inverso, cadastre um **[webhook de saída](/ajuda/api/webhooks-de-saida)** apontando para a URL do n8n.

O card do n8n em **Configurações → Integrações** traz o exemplo pronto para colar.

## Automações que o pessoal mais monta

**Venda em loja virtual → mensagem no WhatsApp.** Pedido pago na Shopify/Nuvemshop, o n8n manda a confirmação e o código de rastreio.

**Formulário do site → atendimento.** O lead preenche, o n8n cria o contato e dispara um [fluxo](/ajuda/fluxos/gatilhos-do-fluxo) de boas-vindas. (Para esse caso específico, o gatilho **Webhook (HTTP)** do próprio editor de fluxos resolve sem n8n.)

**Negócio ganho → financeiro.** Cartão marcado como ganho gera a cobrança no seu sistema e manda o link de pagamento pelo WhatsApp.

**Planilha → campanha.** Linha nova na planilha vira contato etiquetado, pronto para a próxima [campanha](/ajuda/campanhas/publicos-e-listas).

**Aviso interno.** Cliente VIP escreveu → mensagem no Slack ou e-mail para o gerente.

## Antes de investir tempo nisso

Boa parte do que se automatiza com n8n já existe pronto aqui:

| Você quer | Já existe |
|---|---|
| Responder automaticamente | [Fluxos](/ajuda/fluxos/montando-um-fluxo) e [agentes de IA](/ajuda/agentes-ia/criando-um-agente) |
| Lead novo vira cartão | [Automação de CRM](/ajuda/crm/automatizar-com-fluxos) |
| Lembrete de compromisso | [Calendly](/ajuda/integracoes/calendly) e [Google Agenda](/ajuda/integracoes/google-agenda) |
| Mensagem programada | [Agendamentos](/ajuda/caixa-de-entrada/agendar-mensagem) |
| Disparo em massa | [Campanhas](/ajuda/campanhas/primeira-campanha) |

Use o n8n para o que é **específico do seu negócio** — ligar o ConectaChat ao seu ERP, ao seu sistema de pedidos, à sua régua de cobrança. Para o resto, o caminho nativo é mais simples e não quebra.

## Cuidados

- **Respeite o limite de envio.** A API aceita 30 mensagens por minuto por chave. Automação que dispara em rajada coloca seu número em risco — leia [como não ter o número bloqueado](/ajuda/campanhas/evitando-bloqueio).
- **Contato bloqueado continua protegido.** A API não fura descadastro, nem via automação.
- **Teste com o seu número** antes de ligar para valer.
- **Acompanhe o registro de uso** no módulo API quando algo parar de funcionar.
