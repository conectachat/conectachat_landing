O funil não precisa ser alimentado à mão. Existem três formas de automação, e elas convivem sem atropelar uma à outra.

## 1. Conversa nova vira lead (por canal)

Em **Configurações → Conexões**, cada canal tem a opção **CRM: Ativar** e a escolha do funil.

Ligado, toda mensagem nova de cliente cria um cartão na primeira etapa daquele funil.

Regras importantes:

- **Não duplica.** Se a pessoa já tem cartão aberto naquele funil, o sistema apenas liga a conversa ao cartão existente.
- **É por canal.** Dá para o WhatsApp de vendas alimentar o funil comercial enquanto o do suporte não cria nada.
- Se o CRM do canal estiver desligado, nada é criado — os cartões saem só do fluxo ou da mão.

É a forma mais simples: liga uma vez e nenhum lead se perde.

## 2. Bloco de CRM no fluxo

Na paleta do editor de [fluxos](/ajuda/fluxos/tipos-de-blocos), grupo **Ações**, existe o bloco **CRM (cartão)**. Ele faz quatro coisas:

| Ação | O que faz |
|---|---|
| **Criar cartão (se ainda não existir)** | Garante que a pessoa está no funil, na etapa escolhida. |
| **Mover para a etapa** | Avança ou volta a negociação. |
| **Marcar como Ganho** | Fecha positivo. |
| **Marcar como Perdido** | Fecha negativo, com motivo. |

Você escolhe o funil e a etapa dentro do bloco.

**Ele nunca duplica cartão**: antes de criar, procura o cartão aberto daquele contato naquele funil — a mesma regra do lead automático.

Exemplos que funcionam bem:

- Cliente escolhe "Quero um orçamento" no menu → move para *Orçamento solicitado*.
- Fluxo de qualificação termina com "não é meu público" → marca como Perdido, com motivo.
- Cliente confirma a compra → marca como Ganho.

## 3. Etapa do CRM dispara um fluxo (o caminho inverso)

Também existe o gatilho **Etapa do CRM**: mover um cartão para determinada etapa faz um fluxo começar.

Serve para o vendedor arrastar o cartão para *Proposta enviada* e o cliente receber a proposta automaticamente, sem ninguém digitar nada.

## As regras que evitam confusão

Combinando as três, algumas proteções entram sozinhas:

**Um cartão aberto por contato, por funil.** O banco de dados impede duplicidade, venha de onde vier.

**Gatilho de etapa não dispara durante um fluxo.** Se um bloco de CRM move o cartão no meio de um fluxo, o gatilho de etapa é ignorado — senão viraria um loop infinito.

**Funis diferentes podem coexistir.** A mesma pessoa pode ter um cartão em *Vendas* e outro em *Pós-venda*. Isso é permitido e útil.

**Ganho ou perdido encerra o ciclo.** Se o cliente voltar a escrever e o lead automático estiver ligado, nasce um cartão **novo** — nova negociação, não a antiga ressuscitada.

## Por onde começar

1. Ligue o **lead automático** no canal de vendas e escolha o funil. Só isso já garante que nada se perde.
2. Depois, coloque um bloco de CRM no fluxo que qualifica o cliente, para o cartão entrar já na etapa certa.
3. Por último, use o gatilho de etapa para automatizar o que sua equipe repete a cada mudança de fase.
