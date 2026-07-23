Gatilho é o que faz o fluxo começar. Todo fluxo tem exatamente um — é o primeiro bloco do desenho, na cor âmbar. Sem gatilho, o fluxo existe mas nunca roda.

Ao criar um fluxo, o quadro nasce vazio com o aviso para **arrastar um gatilho da paleta**. A categoria **Gatilhos** é a primeira da lista.

## Os sete tipos

### Palavras-chave
Começa quando o cliente escreve alguma das palavras ou frases que você cadastrar. Cada uma vira uma linha.

Ex.: `orçamento`, `preço`, `quanto custa`, `2ª via`.

É o gatilho mais usado. Cadastre também os erros de digitação comuns e as formas alternativas ("orcamento", "valor").

### Primeira mensagem
Roda quando a pessoa fala com você **pela primeira vez**. Perfeito para boas-vindas e menu inicial.

### Qualquer mensagem
Roda para qualquer mensagem que não tenha caído em outro fluxo. É o "padrão da casa" — bom para um menu geral.

### Tag adicionada
Roda quando alguém recebe uma [etiqueta](/ajuda/contatos/etiquetas-e-listas). Você escolhe qual.

Muito útil: marcar o contato como `Orçamento enviado` dispara sozinho a mensagem com a proposta e o agendamento de retorno.

### Etapa do CRM
Roda quando um cartão chega numa etapa do funil. Você escolhe funil e etapa.

Ex.: arrastou o cartão para *Proposta enviada* → o cliente recebe a proposta e um lembrete dois dias depois.

### Webhook (HTTP)
Para quem tem site ou sistema próprio. O ConectaChat gera uma **URL secreta**; seu sistema chama essa URL e o fluxo começa.

Enviando o telefone da pessoa, o contato é criado se não existir, a conversa é aberta se não houver, e o fluxo roda. É assim que um formulário do site vira atendimento automático em segundos.

O botão **Gerar novo token** invalida a URL antiga — use se ela vazar.

### Somente manual
O fluxo não começa sozinho. Só quando alguém [aciona na conversa](/ajuda/fluxos/acionar-fluxo-manualmente).

Bom para roteiro de cobrança, pesquisa de satisfação, script de venda — coisas que o atendente dispara na hora certa.

## Qual fluxo ganha quando mais de um serve?

A ordem de prioridade é:

1. **Palavras-chave**
2. **Primeira mensagem**
3. **Qualquer mensagem**

Assim, quem escreve "orçamento" na primeira mensagem cai no fluxo de orçamento, não nas boas-vindas genéricas.

## Escolhendo o canal

Todo gatilho pode valer para **todos os canais** ou só para um. Útil quando o WhatsApp comercial e o Oficial atendem públicos diferentes.

## Regras de convivência que evitam dor de cabeça

**Fluxo em andamento manda.** Se a pessoa já está no meio de um fluxo, uma nova mensagem continua de onde parou — não reinicia nem dispara outro.

**Gatilhos de tag e CRM não atropelam fluxo ativo.** Se já existe fluxo rodando naquela conversa, eles são ignorados. É o que impede o loop clássico: um fluxo que adiciona etiqueta disparando a si mesmo.

**Acionar manualmente é diferente:** é ordem explícita de um humano, então encerra o fluxo em andamento e começa o novo.

**Agente de IA só entra quando nenhum fluxo trata a mensagem.** Fluxo tem preferência sobre IA.

## Fluxos antigos

Fluxos criados antes dessa tela continuam funcionando com o gatilho que tinham. Ao abrir e editar o bloco de início, ele passa a usar o formato novo.
