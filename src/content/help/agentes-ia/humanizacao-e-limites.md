Um robô que responde no mesmo segundo, sempre em um parágrafo perfeito, 40 vezes seguidas, chama atenção — do cliente e do WhatsApp. O card **Humanização e segurança**, dentro do agente, existe para evitar os dois problemas.

## Humanização

Ligando a opção, o agente passa a se comportar como gente:

- **Espera alguns segundos antes de começar** — o campo *Tempo antes de começar a responder*. Serve também para juntar mensagens: quando o cliente escreve em três pedaços seguidos, ele lê tudo e responde uma vez só, em vez de tríplice resposta atropelada.
- **Mostra "digitando…"** enquanto prepara a resposta. O tempo é proporcional ao tamanho do texto, com teto configurável (padrão 12 segundos).
- **Quebra a resposta em 1 a 3 balões**, com pausas naturais entre eles — como uma pessoa escrevendo.

Vale ligar. Custa alguns segundos e muda bastante a percepção de quem está do outro lado.

> Nota: no canal WhatsApp Oficial não existe o aviso "digitando…" — a API da Meta não oferece isso. As pausas e a quebra em balões continuam funcionando.

## Ler áudios do cliente

Também nesse card. Ligado (padrão), o agente entende áudios: eles são [transcritos](/ajuda/caixa-de-entrada/audios-e-transcricao) e tratados como mensagem de texto. Desligue só se preferir que áudio sempre caia para um humano.

## Anti-loop: máximo de respostas por conversa

O campo *Máx. de respostas do agente por conversa* limita quantas vezes ele responde a mesma pessoa em 24 horas.

Para que serve: conversa que não anda (cliente confuso, ou dois robôs conversando entre si) pode virar um ping-pong infinito, caro e inútil. Batendo o limite, o agente **transfere para um humano** — ou se cala, se a transferência estiver desligada.

Um número entre 10 e 20 costuma ser suficiente. Em branco, não há limite.

## Proteção anti-bloqueio (sempre ligada)

Independente da sua configuração, o sistema segura o agente quando o volume fica anormal:

- **Máximo de 6 mensagens por contato a cada 10 minutos.**
- **Máximo de 20 mensagens por minuto na empresa inteira.**

Estourando, o agente fica em silêncio até a poeira baixar. Não dá para desligar — é o que protege seu número em picos e em ataques de spam. Isso vale principalmente para o [canal por QR Code](/ajuda/conexoes/qr-ou-oficial), onde bloqueio é risco real.

## Silêncio depois do humano

Regra automática e muito útil: **se um atendente respondeu, o agente fica 10 minutos calado** naquela conversa. Isso inclui resposta dada pelo celular, direto no WhatsApp.

Evita a cena clássica de o robô atropelar a pessoa no meio de um atendimento delicado.

Além disso, o agente **nunca** fala em conversa já atribuída a um atendente ou que já foi transferida para humano.

## Desligar a IA num contato específico

Na conversa, o botão **Chatbot** desliga o agente só para aquele contato. Útil para o cliente que odeia robô ou para uma negociação que você quer conduzir pessoalmente.

## Quando a IA falha

Falha (chave inválida, provedor fora do ar, resposta vazia) não some no silêncio: a conversa ganha o selo **⚠️ IA** na lista e um aviso vermelho no topo, explicando o motivo. Você lê, resolve e dispensa o aviso. A mensagem do cliente **nunca** se perde por causa disso.
