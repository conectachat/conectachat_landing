Conectando o Calendly, o botão **Agendar** aparece dentro da conversa: você marca a reunião sem sair do atendimento, e o cliente recebe confirmação e lembrete pelo WhatsApp.

Conexão em **Configurações → Integrações → Calendly** → **Conectar**. Você autoriza na página do Calendly e volta pronto.

## Conta grátis e conta paga funcionam diferente

O ConectaChat detecta seu plano do Calendly automaticamente e mostra o selo:

| | **Light** (Calendly grátis) | **Pro** (Calendly pago) |
|---|---|---|
| Agendar na conversa | Pela página do Calendly embutida | Nativo: você escolhe o horário e preenche o formulário sem sair do app |
| Cancelar pelo app | ✅ | ✅ |
| Remarcar | Página do Calendly embutida | Página do Calendly embutida |
| Sincronização quando o cliente mexe | A cada 5 minutos | Instantânea |
| Mensagens automáticas | ✅ | ✅ |

O agendamento nativo do plano Pro é bem melhor no celular: lista os horários livres, e o formulário (nome, e-mail, perguntas obrigatórias) fica dentro da conversa.

## Mensagens automáticas

É a parte que mais economiza tempo. Você configura **cinco tipos** de mensagem, no próprio card do Calendly:

**Imediatas:**
- **Agendado** — sai na hora em que o horário é marcado.
- **Remarcado**
- **Cancelado**

**Por tempo:**
- **Confirmação** — ex.: um dia antes.
- **Lembrete** — ex.: duas horas antes.

Cada texto aceita variáveis como `{{primeiro_nome}}`, e as mensagens saem pelo WhatsApp, no seu canal.

É o que derruba o não comparecimento sem ninguém precisar lembrar de avisar.

## No atendimento

No painel **Dados do contato**, o painel de agendamentos mostra:

- O botão **Agendar**.
- Os compromissos daquele contato, com data e hora.
- Botões de **cancelar** e **remarcar**.

Se você também conectou o [Google Agenda](/ajuda/integracoes/google-agenda), o botão vira um menu para escolher qual usar. Cada compromisso mostra de onde veio.

## Uma limitação honesta

Se o cliente **remarcar direto no Calendly** (pelo link do e-mail, fora do app), a mensagem automática de "remarcado" não sai: para a Calendly, aquilo é um convidado novo, sem ligação com a conversa. Remarcando pelo app, sai normalmente.

Cancelamento feito pelo cliente **é** detectado e dispara a mensagem.

## Desconectar

Botão **Desconectar** no mesmo card. Ele remove o acesso e apaga a inscrição de sincronização. Compromissos já registrados continuam visíveis no histórico.

## Calendly ou Google Agenda?

- **Calendly** — quando você já usa e tem seus tipos de evento montados lá, com regras de disponibilidade.
- **[Google Agenda](/ajuda/integracoes/google-agenda)** — quando quer tudo dentro do ConectaChat, sem assinar mais um serviço, com link do Meet criado automaticamente.

Os dois podem coexistir.
