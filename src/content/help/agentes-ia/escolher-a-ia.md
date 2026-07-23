Antes de o agente responder qualquer cliente, sua empresa precisa cadastrar uma **chave de API** de um provedor de inteligência artificial. A chave é sua, o consumo é cobrado direto de você pelo provedor — o ConectaChat não coloca nada no meio.

Cadastro em **Configurações → Integrações → Inteligência Artificial**.

## Os quatro provedores

| Provedor | A chave começa com | Onde criar |
|---|---|---|
| **Google Gemini** | `AIza` ou `AQ.` | aistudio.google.com/apikey |
| **OpenAI** (ChatGPT) | `sk-` | platform.openai.com/api-keys |
| **Anthropic Claude** | `sk-ant-` | console.anthropic.com |
| **Grok (xAI)** | `xai-` | console.x.ai |

## Qual escolher

**Comece pelo Google Gemini.** É o único com uso **gratuito de verdade, sem cartão** — hoje algo em torno de 10 pedidos por minuto e 250 por dia no modelo Flash. Para a maioria dos pequenos negócios, isso já atende. Se estourar, o agente volta a responder no dia seguinte ou você coloca um cartão.

Os outros três são pagos desde o primeiro uso. São excelentes, mas só faça sentido pagar quando o volume justificar.

> Chave do Gemini tem um bônus: com ela cadastrada, a [transcrição de áudios](/ajuda/caixa-de-entrada/audios-e-transcricao) usa a sua cota em vez da cota compartilhada da plataforma — ou seja, mais rápida nos horários de pico.

## Escolhendo o modelo

Dentro do agente, depois do provedor, você escolhe o modelo. Cada provedor tem três faixas:

- **Rápido e econômico** (Gemini Flash, GPT-4o mini, Claude Haiku, Grok 4.3) — a recomendação para atendimento. Responde rápido e custa pouco.
- **Equilibrado / mais capaz** — vale quando o agente precisa raciocinar sobre regras complicadas.
- **O mais capaz** (Claude Opus, Gemini Pro) — caro para atendimento comum. Use só se testar e ver diferença real no seu caso.

O primeiro da lista sempre é o recomendado. Se surgir um modelo novo que ainda não está na lista, dá para digitar o nome técnico dele à mão.

## Quanto custa na prática

Depende de quanto texto vai e volta. Uma conversa curta de atendimento custa frações de centavo nos modelos econômicos. O que faz a conta crescer:

- **Base de conhecimento grande.** O conteúdo dos [arquivos e planilhas](/ajuda/agentes-ia/base-de-conhecimento) vai junto em **cada** resposta. Documento de 100 páginas encarece toda mensagem.
- **Histórico longo** — quantas mensagens anteriores o agente relê a cada resposta.
- **Respostas longas** — o campo *Máx. de tokens por resposta* limita isso.

Comece econômico. Só suba de modelo se a qualidade realmente não estiver dando conta.

## Segurança

A chave fica guardada criptografada e **nunca mais aparece na tela** — depois de salva, você vê só os últimos caracteres, para conferir qual cadastrou. Ninguém da ConectaChat lê a sua chave.

Se ela vazar ou você quiser trocar, apague no provedor e cadastre outra aqui.

## Sem chave, o que acontece?

O agente não responde e a conversa fica marcada com um selo **⚠️ IA** na lista, com um aviso explicando o motivo no topo da conversa. Nada é perdido: a mensagem do cliente entra normalmente e um humano pode assumir.
