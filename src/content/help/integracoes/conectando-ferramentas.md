O ConectaChat conversa com outras ferramentas para você não ficar pulando de sistema em sistema. Todas ficam em **Configurações → Integrações**.

## Como funciona a tela

Cada integração é um card. Os que estão disponíveis abrem uma página com explicação, o que dá para fazer e a configuração. Os marcados como **Em breve** ainda não estão prontos — estão ali para você saber o que vem pela frente.

Use os filtros por categoria (IA, Agendamento, CRM, Pagamentos, Automação) para achar mais rápido.

## Inteligência Artificial

É onde você cadastra a **chave de API** do provedor que vai alimentar seus [agentes de IA](/ajuda/agentes-ia/criando-um-agente): OpenAI, Google Gemini, Anthropic Claude ou Grok (xAI).

A chave é sua e o consumo é cobrado direto pelo provedor. Uma observação prática: o **Gemini tem uso gratuito** (com limites diários), o que costuma ser suficiente para começar sem colocar cartão.

> 🔒 A chave fica guardada criptografada e nunca mais aparece na tela — só o final dela, para você conferir qual cadastrou.

## Agendamento: Calendly e Google Agenda

Conectando uma das duas, aparece o botão **Agendar** dentro da conversa: você marca a reunião sem sair do atendimento, e o cliente recebe a confirmação no WhatsApp.

Dá para configurar mensagens automáticas de **agendado**, **lembrete**, **confirmação**, **remarcado** e **cancelado**. Se tiver as duas conectadas, o botão vira um menu e você escolhe qual usar.

No Google Agenda, você define a grade de horários (dias, horário e duração) e o sistema oferece só os horários realmente livres, checando sua agenda.

## Google Sheets e Google Docs

Servem para alimentar a **base de conhecimento do agente de IA**. Você cola o link de uma planilha ou documento e o conteúdo passa a ser consultado pelo agente nas respostas.

O conteúdo é relido a cada 5 minutos — então, editando a planilha, o agente passa a responder com a informação nova sozinho.

## API e webhooks (para quem tem sistema próprio)

Se sua empresa tem um sistema ou usa automação (n8n, Make, etc.), o módulo **API / Desenvolvedores** dá:

- **Chaves de API** para seu sistema enviar mensagens, criar contatos, mover cartões no CRM e disparar fluxos.
- **Webhooks de saída**: o ConectaChat avisa seu sistema quando algo acontece (mensagem recebida, conversa encerrada, cartão ganho, etc.).
- Documentação e um registro de uso para conferir o que foi chamado.

Isso fica em **Configurações → API**, e só o dono ou administradores enxergam.

## Uma integração que eu preciso não está aqui

A lista cresce conforme a demanda dos clientes. Se falta algo importante para o seu negócio, fale com o suporte — saber o que as empresas mais pedem é o que define a ordem do que construímos.
