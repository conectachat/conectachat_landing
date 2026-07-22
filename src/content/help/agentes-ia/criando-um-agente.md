Um agente de IA é um atendente virtual que responde seus clientes no WhatsApp com as suas informações e no seu tom de voz. Ele não é um menu de opções — entende o que a pessoa escreveu e responde com texto.

## Antes de começar

O agente usa uma inteligência artificial de fora (OpenAI, Google Gemini, Anthropic Claude ou Grok). Você precisa cadastrar uma **chave de API** dessa empresa — é como uma senha que autoriza o uso e faz o consumo cair na sua conta lá.

Cadastre em **Configurações** → **Integrações** → **Inteligência Artificial**. Sem a chave, o agente não responde (e o editor avisa isso em amarelo).

## Criando o agente

1. No menu, abra **Agentes** e clique em **Novo agente**.
2. Escolha um dos dois caminhos:
   - **Criar com entrevista (IA)** — você descreve o seu negócio em texto livre, a IA faz até 6 perguntas críticas (você pode pular as que não souber) e monta sozinha o nome, a saudação, a personalidade e a base de conhecimento. Tudo aparece para você revisar e editar antes de salvar.
   - **Começar do zero** — você preenche tudo na mão.
3. Depois de criado, o editor do agente abre.

> A entrevista consome duas chamadas de IA na sua própria chave. É barato, mas não é grátis.

## Personalidade

É a parte mais importante. Aqui você escreve quem é o agente, o tom de voz e as regras dele. Se estiver em branco, o botão **Usar um exemplo pronto** preenche um modelo que você adapta.

Regra prática: sempre inclua uma linha proibindo inventar preço, prazo e política. A IA inventa quando não sabe, e isso vira problema com o cliente.

Ainda nesse bloco você define o **tamanho das respostas** (curtas no estilo WhatsApp, médias ou longas) e se ele pode **usar emojis**.

## Base de conhecimento

É o que o agente sabe sobre a sua empresa. Existem três formas de alimentar, e elas se somam:

| Forma | Como funciona |
|---|---|
| Texto colado | Você escreve direto na caixa: horários, entrega, formas de pagamento, perguntas frequentes |
| Arquivos | Anexe até 2 arquivos de 10 MB (PDF, TXT ou MD). O texto é lido na hora do envio |
| Google Sheets / Docs | Cole o link de uma planilha ou documento. O conteúdo é relido a cada ~5 minutos, ou na hora se você clicar em **Atualizar agora** |

As fontes do Google exigem que a conta Google da empresa esteja conectada em Integrações.

> Não adianta anexar um catálogo de 100 MB: tudo isso entra na conversa com a IA a cada mensagem. Textos muito grandes são cortados e encarecem o uso. Prefira o essencial, bem escrito.

## Modelo de IA

No topo do editor você escolhe o **provedor** (a empresa de IA) e o **modelo** (a versão). Modelos maiores respondem melhor e custam mais.

Dois ajustes ficam ao lado:

- **Criatividade** — perto de 0 o agente é previsível e fiel à base; perto de 1 é mais solto. Para atendimento, quanto mais baixo, melhor.
- **Máximo de tokens** — o teto de tamanho de cada resposta.

Pode deixar os dois no padrão.

## Quando o agente atende

Escolha uma das três situações:

- **Sempre** — assume a conversa assim que chega.
- **Quando ninguém atende** — só se não houver atendente na conversa.
- **Fora do horário comercial** — você define a grade de dias e horários.

Em todos os modos, o agente se cala assim que uma pessoa da sua equipe assume a conversa. Veja [quando a IA passa para um humano](/ajuda/agentes-ia/quando-a-ia-chama-humano).

## Testar antes de soltar no cliente

No fim do editor existe o painel **Testar agente**: um chat de mentira, que não toca em nenhuma conversa real. Converse com ele, tente confundi-lo, pergunte preço. O botão **Ver prompt gerado** mostra exatamente as instruções que o motor monta — útil para entender por que ele respondeu daquele jeito.

## Ligar o agente num canal

O agente só entra em ação depois de dois passos:

1. No bloco **Onde o agente atua**, marque as conexões (canais) em que ele responde. Cada conexão tem no máximo um agente.
2. Ligue a chave **Ativo** na barra do topo e clique em **Salvar**.

Pronto. A partir daí, as mensagens que chegarem por aquela conexão passam pelo agente.
