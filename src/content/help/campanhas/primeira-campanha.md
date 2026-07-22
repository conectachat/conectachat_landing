Campanha é o envio da mesma mensagem para muitos contatos, um a um, no ritmo que você definir. Antes de criar a primeira, leia [como não ter seu número bloqueado](/ajuda/campanhas/evitando-bloqueio) — é o assunto mais importante aqui.

## Criando

No menu, abra **Campanhas** e clique em **Nova campanha**.

### 1. Nome

Só para você se achar depois na lista. Ex.: "Black Friday".

### 2. Canal de envio

Escolha por qual conexão a campanha sai. Ao escolher, aparece um **aviso de risco** logo abaixo, com cor conforme o canal — o QR Code é o de maior risco.

> **No canal Oficial (API da Meta) a campanha exige um modelo aprovado.** Não existe texto livre em disparo pelo Oficial: você escolhe um modelo já aprovado pela Meta na lista e preenche as variáveis dele. Se não houver nenhum modelo aprovado naquele canal, crie e aguarde a aprovação em Conexões → Modelos antes de continuar.

### 3. Público

Três opções:

- **Etiqueta** — todos os contatos com aquela etiqueta.
- **Lista** — uma lista de contatos criada na importação (Contatos → Importar, campo "Lista").
- **Todos** — todos os contatos da empresa.

Contatos **bloqueados** — os que pediram para parar de receber — são sempre excluídos, em qualquer opção.

Comece pequeno. Crie uma etiqueta com um ou dois números seus e teste antes de mandar para a base inteira.

### 4. Mensagem

Escreva o texto. Use os botões de variável abaixo da caixa para personalizar:

| Variável | Vira |
|---|---|
| `{primeiro_nome}` | O primeiro nome do contato |
| `{nome}` | O nome completo |
| `{saudacao}` | Bom dia / boa tarde / boa noite |
| `{data}` e `{hora}` | Data e hora do envio |
| `{empresa}` | O nome da sua empresa |
| `{conexao}` | O nome da conexão usada |

Se você já tem o texto salvo em **Respostas rápidas**, use o seletor "Usar resposta rápida…" para trazer texto e anexo prontos.

### 5. Anexos e áudio

Você pode **Anexar** imagem, vídeo ou documento, ou **Gravar áudio** direto no navegador.

O áudio é enviado como **nota de voz, sem texto junto** — se gravar, o texto da campanha não vai. E áudio gravado no navegador não é aceito no canal Oficial.

### 6. Ritmo de envio

É a trava anti-banimento. Três opções:

| Ritmo | Por minuto | Por dia |
|---|---|---|
| Conservador | ~8 | 300 |
| Normal | ~15 | 800 |
| Personalizado | você define | você define |

Mais rápido = mais risco. Se está em dúvida, fique no Conservador.

No canal Oficial o risco é outro: uma conta Meta **sem verificação de negócio** entrega até **250 conversas em 24h**. Acima do seu limite, a Meta simplesmente recusa os envios — o app já ajusta o teto diário para 250 quando você escolhe um preset.

### 7. Horário e agendamento

- **Só em horário comercial** — envia apenas entre 8h e 20h, no fuso da sua empresa. Deixe ligado.
- **Humanizar envio** — dá uma pequena variação de tempo entre as mensagens, para não parecer robô.
- **Quando enviar** — deixe em branco para começar agora, ou escolha data e hora para agendar.

Clique em **Criar campanha**. O app informa quantos contatos entraram.

## Acompanhando

Na lista, cada campanha mostra o status (Rascunho, Agendada, Enviando, Pausada, Concluída, Cancelada), o contador `enviadas/total`, as falhas e uma barra de progresso.

Você pode:

- **Pausar** uma campanha que está enviando ou agendada;
- **Retomar** uma pausada (ela continua de onde parou);
- **Cancelar** definitivamente.

> Não dá para "despausar o que já foi". Mensagem enviada é mensagem entregue — se você errou o texto, pause imediatamente e cancele.

A campanha se conclui sozinha quando o último contato é processado.
