O maior medo de quem liga um atendente de IA é ele atropelar a equipe ou ficar respondendo besteira sozinho. O ConectaChat tem várias travas para isso. Vale conhecer todas.

## A regra de ouro

**O agente só responde quando não há humano atendendo aquela conversa.**

Assim que alguém da sua equipe assume a conversa (ela fica atribuída a um atendente), o agente para de responder ali. Isso vale mesmo se você tiver escolhido o modo "Sempre" na ativação. Não existe cenário em que o agente escreve por cima do seu atendente.

## Silêncio depois de um humano responder

Se alguém da equipe mandar uma mensagem na conversa, o agente fica calado por **10 minutos** — mesmo que a conversa não esteja formalmente atribuída a ninguém.

Isso vale inclusive quando a resposta é dada **pelo celular**, fora do app. O ConectaChat enxerga a mensagem que saiu do aparelho e entende que tem gente cuidando.

## Passar a conversa para um humano (handoff)

No editor do agente, o bloco **Passar para um humano** liga essa possibilidade. Você configura:

- **Departamento de destino** — para qual fila a conversa vai. Ou mantenha o departamento atual.
- **Mensagem ao cliente** — o que ele lê na hora da transferência (ex.: "Vou chamar um atendente do nosso time, um momento").
- **Palavras que pedem um humano** — separadas por vírgula, ex.: `atendente, falar com humano, pessoa`. Se o cliente escrever uma delas, o agente transfere na hora, sem discutir.

Além das palavras, o próprio agente pode decidir transferir quando não souber responder — desde que você tenha instruído isso na personalidade dele.

Depois do handoff, a conversa aparece na aba **Aguardando** da Caixa de entrada e o agente não volta a falar naquela conversa.

## Desligar a IA num contato específico

No cabeçalho da conversa existe o botão **Chatbot**. Ele liga e desliga a IA **só para aquele contato**.

Como a IA já vem ligada por padrão em todos os contatos, na prática esse botão serve para **desligar pontualmente** — aquele cliente chato que a IA não está entendendo, ou uma negociação delicada que você quer conduzir na mão. O contato fica sem IA até você religar.

## Anti-loop: limite de respostas por conversa

Ainda no editor, o campo **Máximo de respostas do agente por conversa** evita que ele fique dando voltas com o mesmo cliente. Ao atingir o número (contado nas últimas 24 horas), o agente:

- transfere para um humano, se o handoff estiver ligado; ou
- fica em silêncio, se não estiver.

Deixe em branco para não ter limite. Se você está começando, um número entre 10 e 20 é um bom seguro.

## Proteção anti-banimento (sempre ligada)

Independente da sua configuração, o agente nunca dispara em rajada:

- no máximo **6 mensagens a cada 10 minutos** por contato;
- no máximo **20 mensagens por minuto** na empresa inteira.

Num pico de movimento, ele simplesmente fica em silêncio por alguns minutos. É proposital: protege o seu número de bloqueio no WhatsApp. Veja mais em [como não ter seu número bloqueado](/ajuda/campanhas/evitando-bloqueio).

## Quando a IA falha

A IA pode falhar por motivos bobos: chave de API não cadastrada, crédito acabou no provedor, o modelo saiu do ar. Quando isso acontece, o cliente fica sem resposta — e você precisa saber.

O ConectaChat mostra:

- um selo **⚠️ IA** no cartão da conversa na lista;
- um **aviso vermelho no topo da conversa** com o motivo da falha.

O aviso pode ser dispensado com um clique. Ele volta se a falha acontecer de novo.

> Esse aviso só aparece em falha de verdade. Silêncio por anti-banimento, contato com o Chatbot desligado ou conversa com atendente humano **não** são erros e não geram alerta.

## Resumo de quem manda

| Situação | O agente responde? |
|---|---|
| Conversa sem atendente, contato com Chatbot ligado | Sim |
| Conversa atribuída a um atendente | Não |
| Alguém da equipe respondeu nos últimos 10 min | Não |
| Contato com o botão Chatbot desligado | Não |
| Conversa já transferida por handoff | Não |
| Limite de respostas (anti-loop) atingido | Não |
