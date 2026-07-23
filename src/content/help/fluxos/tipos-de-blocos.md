A paleta do editor de fluxos tem seis grupos de blocos. Este é o mapa: o que cada um faz e quando usar.

## Gatilhos
O começo de tudo — sete tipos, explicados em [gatilhos do fluxo](/ajuda/fluxos/gatilhos-do-fluxo).

## Mensagens

**Mensagem** — envia um texto. Aceita variáveis como `{{primeiro_nome}}`.

**Mídia** — envia imagem, vídeo, áudio ou documento.

**Pergunta** — envia uma pergunta e **guarda a resposta** numa variável, para usar depois (no texto, numa condição, num envio para o seu sistema).

**Validação** — pergunta e confere o formato (e-mail, telefone, CPF, número). Resposta fora do formato faz o cliente tentar de novo. Use sempre que for coletar dado que vai para outro sistema.

**Modelo (Oficial)** — envia um [modelo aprovado](/ajuda/conexoes/modelos-aprovados) pela Meta. É o único jeito de o fluxo falar com alguém fora da [janela de 24 horas](/ajuda/conexoes/janela-de-24-horas).

## Menus

**Menu Texto** — as opções numeradas clássicas ("Digite 1 para Vendas"). Funciona em qualquer canal e todo mundo entende.

**Botões** — botões de toque no WhatsApp. Bem melhor de usar, poucas opções.

**Lista** — menu suspenso, para quando há muitas opções.

Cada opção do menu tem sua própria saída no desenho: você liga cada uma ao que deve acontecer.

## Lógica

**Condição** — o "se". Divide o caminho conforme uma variável, uma etiqueta ou a resposta anterior.

**Horário** — divide entre dentro e fora do expediente. Combine com [horários de atendimento](/ajuda/equipe-e-organizacao/horarios-de-atendimento).

**Delay** — espera um tempo antes de seguir. Bom para não despejar cinco mensagens de uma vez.

**Variável** — guarda ou altera um valor no meio do caminho.

## Integrações

**HTTP Request** — chama o seu sistema (consultar pedido, verificar CPF, buscar saldo) e usa a resposta no fluxo. Exige alguém que saiba montar a chamada.

**IA (ChatGPT/Gemini/Claude)** — coloca inteligência artificial num ponto específico do fluxo: para interpretar o que a pessoa quis dizer, resumir ou responder livre. Dá para apontar para um [agente](/ajuda/agentes-ia/criando-um-agente) já pronto, aproveitando personalidade e base de conhecimento dele.

## Ações

**Adicionar Tag / Remover Tag** — marca ou desmarca o contato. Lembre que adicionar tag pode ser gatilho de outro fluxo.

**CRM (cartão)** — cria, move, marca como ganho ou perdido no funil. Detalhes em [automatizar o CRM com fluxos](/ajuda/crm/automatizar-com-fluxos).

**Fila / Departamento** — coloca a conversa numa fila. É como o fluxo entrega o atendimento para o time certo.

**Atendente** — atribui a conversa a uma pessoa específica.

**Trocar Fluxo** — passa a conversa para outro fluxo. Serve para quebrar um fluxo gigante em pedaços reaproveitáveis (um "menu principal" que chama fluxos menores).

## Finalização

**Encerrar conversa** — fecha o atendimento. Se o cliente voltar a escrever, a conversa reabre com [número de chamado novo](/ajuda/caixa-de-entrada/organizando-a-caixa).

## Montando sem se perder

- **Todo caminho precisa de fim.** Ou encerra, ou vai para uma fila humana. Fluxo que termina no vazio deixa o cliente falando sozinho.
- **Prever a resposta fora do esperado.** Menus precisam de saída para "não entendi" — depois de duas tentativas, mande para um humano.
- **Poucos blocos por fluxo.** Vários fluxos pequenos ligados por *Trocar Fluxo* são mais fáceis de manter que um monstro de 40 blocos.
- **Teste com o seu número** antes de ligar para valer.
