Toda operação repete as mesmas frases o dia inteiro: a saudação, o horário de funcionamento, o endereço, a tabela de preços. Respostas rápidas são essas mensagens salvas, prontas para entrar na conversa com dois toques.

## Criando uma resposta rápida

1. Abra **Configurações** → **Respostas rápidas**.
2. Clique em **Nova Resposta**.
3. Preencha:
   - **Atalho** — o apelido curto que você vai digitar, ex.: `saudacao`. Sem espaços; letras, números, `-` e `_`.
   - **Título** (opcional) — o nome que aparece na lista, ex.: "Saudação inicial".
   - **Mensagem** — o texto que será inserido na conversa.
4. Clique em **Criar**.

O atalho precisa ser único. Se você tentar repetir um que já existe, o app avisa.

## Usando no atendimento

Na caixa de escrita da conversa, digite **/**. O menu abre na hora e vai filtrando conforme você continua digitando (`/sau` já mostra a saudação).

- **Setas ↑ ↓** navegam pela lista.
- **Enter** aplica a resposta selecionada.
- **Esc** fecha e limpa.

Você também pode clicar na resposta com o mouse.

> Aplicar a resposta **não envia** a mensagem: ela cai na caixa de texto para você conferir, editar e só então enviar. Isso é de propósito — dá tempo de acrescentar um detalhe do caso antes de mandar.

## Variáveis: a mensagem que se completa sozinha

Dentro da mensagem você pode inserir marcadores que viram o valor real no momento em que a resposta é aplicada. No modal de criação eles aparecem como botõezinhos — clique e ele entra na posição do cursor.

| Variável | Vira |
|---|---|
| `{{primeiro_nome}}` | O primeiro nome do contato |
| `{{nome}}` | O nome completo do contato |
| `{{atendente}}` | Seu nome |
| `{{saudacao}}` | Bom dia, Boa tarde ou Boa noite, conforme a hora |
| `{{data}}` | A data de hoje |
| `{{hora}}` | A hora atual |
| `{{setor}}` | O departamento da conversa |
| `{{conexao}}` | O nome do canal por onde a conversa chegou |

Exemplo de mensagem salva:

```
{{saudacao}}, {{primeiro_nome}}! Aqui é {{atendente}}, do ConectaChat.
Como posso ajudar?
```

Se o contato não tiver nome cadastrado, o sistema usa o que tem — normalmente o número. Vale conferir antes de enviar.

## Anexar mídia à resposta

Uma resposta rápida pode carregar um arquivo junto: a tabela de preços em PDF, a foto do cardápio, um áudio de boas-vindas.

No modal de criação, em **Anexar mídia**, você pode:

- **Anexar arquivo** — imagem, áudio, vídeo ou documento, até **16 MB**.
- **Gravar áudio** — grava direto ali, pelo microfone do aparelho.

Quando a resposta tem mídia e você a aplica na conversa, o app abre a **pré-visualização de envio** com o arquivo já carregado e o texto da resposta como **legenda**. Você confere e envia.

## Organizando a lista

Na tela de Respostas rápidas você vê quantas existem e quantas estão ativas. Cada linha tem:

- O selo **Ativa / Inativa** — clique para alternar. Resposta inativa não aparece no menu do **/** durante o atendimento, mas continua salva.
- O **lápis** para editar.
- A **lixeira** para excluir de vez.

Há também uma busca no topo, que procura no atalho, no título e no texto.

## Dicas práticas

- Use atalhos curtos e previsíveis: `oi`, `precos`, `horario`, `pix`, `endereco`. Quem atende não vai lembrar de `mensagem-padrao-cliente-novo-v2`.
- Crie as respostas junto com a equipe. Quem responde o dia todo sabe quais frases se repetem.
- Prefira `{{primeiro_nome}}` a `{{nome}}` nas saudações: soa mais natural.
- Respostas rápidas também podem ser reaproveitadas na hora de montar uma [campanha](/ajuda/campanhas/primeira-campanha).
