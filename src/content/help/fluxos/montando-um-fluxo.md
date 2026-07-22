Um fluxo é um atendimento automático desenhado por você: o cliente escreve, o robô responde, mostra um menu, guarda a resposta e faz alguma coisa com ela. Diferente do [agente de IA](/ajuda/agentes-ia/criando-um-agente), o fluxo é 100% previsível — ele faz exatamente o que você montou, nada além.

Use fluxo quando o caminho é sempre o mesmo (menu de setores, coleta de dados, confirmação). Use IA quando as perguntas são abertas.

## Criando o fluxo

1. No menu, abra **Fluxos** e clique em **Novo fluxo**.
2. Dê um nome e o editor abre com o quadro **vazio**, mostrando o aviso "arraste um GATILHO da paleta para começar".

## Passo 1: o gatilho (sempre primeiro)

O gatilho é o que faz o fluxo começar. Ele é a primeira categoria da paleta, em laranja. Arraste um para o quadro — só pode existir **um** por fluxo.

| Gatilho | Dispara quando |
|---|---|
| Palavras-chave | A mensagem do cliente contém uma das palavras/frases que você listar |
| Primeira mensagem | É a primeira vez que a pessoa fala com a empresa |
| Qualquer mensagem | Toda mensagem que nenhum outro gatilho pegou (fluxo padrão) |
| Tag adicionada | Alguém marca uma etiqueta escolhida no contato |
| Etapa do CRM | Um cartão entra numa etapa específica do funil |
| Webhook (HTTP) | Um sistema de fora chama uma URL exclusiva do fluxo |
| Somente manual | Nunca sozinho — só pelo botão "Acionar fluxo" |

Clique no nó do gatilho para configurá-lo. Nos gatilhos por mensagem você também escolhe **em quais conexões** ele vale (todas ou uma só).

> Se dois fluxos podem pegar a mesma mensagem, a ordem de precedência é: **palavra-chave** vence **primeira mensagem**, que vence **qualquer mensagem**.

Nos gatilhos por evento (tag e CRM), se o contato não tiver conversa aberta, o ConectaChat cria uma.

## Passo 2: falar com o cliente

Arraste os nós da categoria **Mensagens** e ligue-os um no outro puxando a bolinha da borda:

- **Mensagem** — envia um texto.
- **Mídia** — envia imagem, vídeo ou arquivo.
- **Pergunta** — envia um texto e **espera** a resposta, guardando o que a pessoa escreveu.
- **Validação** — confere se a resposta tem o formato certo.
- **Modelo (Oficial)** — envia um modelo aprovado pela Meta (só faz sentido no canal Oficial).

Na categoria **Menus** você tem três formas de dar opções: **Menu Texto** (o clássico "digite 1, 2 ou 3"), **Botões** e **Lista**.

## Passo 3: decidir o caminho

A categoria **Lógica** ramifica o fluxo:

- **Condição** — segue por um caminho ou outro dependendo do que foi respondido.
- **Horário** — caminho diferente dentro e fora do expediente.
- **Delay** — espera um tempo antes de continuar.
- **Variável** — guarda ou altera um valor.

Em **Integrações** existem ainda o **HTTP Request** (chama um sistema de fora) e o nó de **IA**, que pode inclusive usar um dos seus agentes já configurados.

## Passo 4: fazer alguma coisa

A categoria **Ações**, em verde, é onde o fluxo produz resultado:

- **Adicionar Tag** / **Remover Tag** — etiqueta o contato.
- **CRM (cartão)** — cria ou move o cartão no funil.
- **Fila / Departamento** — joga a conversa numa fila.
- **Atendente** — atribui a conversa a uma pessoa.
- **Trocar Fluxo** — pula para outro fluxo.

E em **Finalização**, o nó **Encerrar conversa**.

> Cuidado com laço: se um fluxo adiciona uma tag que é gatilho dele mesmo, ele se chamaria para sempre. O ConectaChat já barra isso (um fluxo não dispara por evento se já houver outro em andamento), mas evite desenhar assim.

## Passo 5: salvar e ativar

1. Clique em **Salvar** no editor. É nesse momento que o gatilho passa a valer.
2. Volte para a lista de fluxos e ligue a chave **Ativo**.

Sem esses dois passos, o fluxo não roda.

## Disparar um fluxo na mão

Em qualquer conversa da Caixa de entrada, abra o painel **Dados do contato** e clique em **Acionar fluxo**. Você escolhe entre os fluxos **ativos** e ele começa naquela conversa na hora.

Isso encerra qualquer fluxo que já estivesse rodando ali. É o único jeito de usar um fluxo com gatilho **Somente manual**.
