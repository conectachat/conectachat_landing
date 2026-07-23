[Chave de API](/ajuda/api/chaves-de-api) é o seu sistema falando com o ConectaChat. **Webhook de saída** é o contrário: o ConectaChat avisando o seu sistema, na hora em que algo acontece.

Sem webhook, seu sistema teria que ficar perguntando "tem novidade?" a cada minuto. Com webhook, ele é avisado.

## Criando

Módulo **API** → aba **Webhooks** → novo webhook:

**URL** — o endereço do seu sistema que vai receber (precisa ser https).

**Eventos** — quais avisos você quer.

**Segredo** — usado para assinar cada envio (explicado abaixo).

O botão **Testar** dispara um envio de mentira, para você confirmar que chegou antes de contar com isso.

## Eventos disponíveis

| Evento | Quando dispara |
|---|---|
| `message.received` | Cliente mandou mensagem |
| `conversation.opened` | Conversa aberta |
| `conversation.closed` | Conversa encerrada |
| `contact.created` | Contato novo |
| `contact.tagged` | Contato recebeu etiqueta |
| `appointment.created` | Agendamento criado |
| `crm.card_created` | Cartão criado no funil |
| `crm.card_stage_changed` | Cartão mudou de etapa |
| `crm.card_won` | Negócio ganho |
| `crm.card_lost` | Negócio perdido |

Assine só o que vai usar. `message.received` numa operação movimentada gera muito volume.

## Segurança: confira a assinatura

Todo envio leva o cabeçalho **`x-conectachat-signature`**, que é o corpo da mensagem assinado com o seu segredo (HMAC-SHA256 — o padrão de mercado; n8n, Make e as bibliotecas comuns já validam isso nativamente).

**Sempre valide antes de confiar.** Sem validar, qualquer um que descubra sua URL pode fingir ser o ConectaChat.

## Usos que valem a pena

- **Negócio ganho → sistema financeiro.** Cartão marcado como ganho gera a cobrança automaticamente.
- **Contato etiquetado → outro sistema.** Marcou como `Cliente`, cadastra no seu ERP.
- **Conversa encerrada → pesquisa de satisfação** na sua ferramenta.
- **Mensagem recebida → painel próprio**, se você tem um dashboard interno.

## Acompanhando

Cada webhook mostra o histórico de entregas. Se seu sistema estiver fora do ar, o envio falha e fica registrado — bom lugar para começar a investigar quando "parou de chegar".

## E o n8n?

O n8n é o consumidor mais comum dessa API: ele recebe os webhooks e dispara as chamadas de volta, sem ninguém escrever código. O card do n8n, em Integrações, tem o exemplo pronto e o atalho para este módulo.

Também dá para usar Make, Zapier ou qualquer ferramenta que fale HTTP.
