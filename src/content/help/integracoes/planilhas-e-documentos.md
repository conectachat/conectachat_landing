Esta é, para muita gente, a integração mais útil do sistema: uma **planilha do Google vira a fonte de verdade do seu agente de IA**. Você mantém preço e informação onde já mantém — na planilha — e o agente passa a responder com o dado novo sozinho.

## Como funciona

1. Conecte a conta Google (a mesma do [Google Agenda](/ajuda/integracoes/google-agenda); uma autorização cobre tudo).
2. Abra o agente em **Agentes** → card **Base de conhecimento** → **Fontes do Google**.
3. Cole o link da planilha ou do documento.
4. Pronto: o conteúdo passa a fazer parte do que o agente sabe.

**O conteúdo é relido a cada 5 minutos.** Mudou o preço na planilha? Em poucos minutos o agente responde o valor novo, sem ninguém tocar no ConectaChat. Também há o botão **Atualizar agora** para quem não quer esperar.

## O que é lido

**Planilhas** — até 5 abas, com no máximo 300 linhas por aba. Cada linha vira uma frase com as colunas separadas.

**Documentos** — os parágrafos e as tabelas.

Cada fonte entra com até 30 mil caracteres, e o "cérebro" do agente comporta 100 mil no total (somando texto colado, arquivos e fontes do Google). Veja [base de conhecimento](/ajuda/agentes-ia/base-de-conhecimento).

## Montando uma planilha que o agente entende bem

Uma linha de cabeçalho e uma linha por item:

| Produto | Preço | Prazo | Observação |
|---|---|---|---|
| Camiseta básica | R$ 49,90 | 2 dias úteis | Tamanhos P ao GG |
| Camiseta estampada | R$ 69,90 | 3 dias úteis | Estampas sob consulta |

Dicas que fazem diferença:

- **Cabeçalho claro.** "Preço" é melhor que "Vlr".
- **Uma informação por célula.** Não junte preço e prazo no mesmo campo.
- **Sem célula mesclada nem planilha cheia de fórmula visual** — o agente lê o valor exibido, não a intenção do layout.
- **Deixe explícito o que não fazem** numa coluna de observação. É o que impede o agente de prometer o que não existe.

## Casos que funcionam bem

- **Tabela de preços** que muda toda semana.
- **Estoque e disponibilidade** ("temos", "sob encomenda").
- **Perguntas frequentes** num documento, com uma pergunta por parágrafo.
- **Regras de entrega por região.**

## Cuidados

**A planilha inteira vai para a IA a cada resposta.** Planilha gigante deixa o agente mais lento e mais caro. Mantenha só o que responde dúvida de cliente — histórico e controle interno não precisam estar lá.

**Não coloque dado sigiloso** (custo, margem, dados pessoais de terceiros): tudo que estiver ali pode ser dito ao cliente se ele perguntar do jeito certo.

**Erro não apaga o que já foi lido.** Se a leitura falhar (link quebrado, permissão removida), o agente continua com a última versão lida e a fonte mostra o erro na tela.

## Testando

Depois de ligar a fonte, use **[Testar agente](/ajuda/agentes-ia/testar-o-agente)** e pergunte o preço de um item. Mude o valor na planilha, espere alguns minutos e pergunte de novo — ver o agente responder o valor novo sozinho costuma ser o momento em que a ficha cai.
