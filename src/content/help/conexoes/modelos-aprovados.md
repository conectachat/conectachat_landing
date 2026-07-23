Modelo (a Meta chama de *template*) é uma mensagem escrita com antecedência e aprovada pela Meta. É o **único jeito de falar com um cliente fora da [janela de 24 horas](/ajuda/conexoes/janela-de-24-horas)** no canal WhatsApp Oficial.

Só vale para o canal Oficial. No [canal por QR Code](/ajuda/conexoes/conectar-whatsapp-qr) não existe modelo — nem essa proteção.

## Onde ficam

**Configurações → Conexões**, no card do canal Oficial, botão **Modelos**. A lista mostra cada modelo com a categoria, o idioma e o status.

| Status | O que significa |
|---|---|
| **Em análise** | Enviado à Meta, aguardando. Normalmente sai em minutos. |
| **Aprovado** | Pronto para usar no atendimento e nas campanhas. |
| **Rejeitado** | A Meta recusou. Crie outro, corrigindo o motivo. |
| **Pausado / Desativado** | A Meta suspendeu por qualidade ruim (muita gente bloqueando ou denunciando). |

Quando a Meta aprova, o status muda sozinho e você recebe um aviso no sininho. O botão **Atualizar** força a consulta, se não quiser esperar.

## Criando um modelo

Clique em **Novo modelo** e preencha:

**Nome** — só letras minúsculas, números e underline. Ex.: `boas_vindas`, `lembrete_consulta`. É um identificador interno; o cliente não vê.

**Categoria** — escolha com atenção, porque muda o preço:
- **Marketing** — promoções, novidades, reativação. Custa mais.
- **Utilidade** — confirmações, lembretes, avisos de pedido. Custa menos e é aprovado mais fácil.

**Idioma** — normalmente `pt_BR`.

**Corpo** — o texto. Use `{{1}}`, `{{2}}` para as partes que mudam a cada envio:

```
Olá {{1}}, tudo bem? Sua consulta está confirmada para {{2}}. Qualquer coisa é só responder aqui.
```

**Exemplos** — um por variável (ex.: "Maria", "quinta-feira às 14h"). A Meta exige exemplos para entender o uso; eles não são enviados a ninguém.

**Rodapé** (opcional) — uma linha curta no fim, tipo "Equipe ConectaChat".

## As três regras que mais reprovam

O ConectaChat avisa antes de enviar à Meta:

1. **Não pode começar com variável.** `{{1}}, tudo bem?` ❌ → `Olá {{1}}, tudo bem?` ✅
2. **Não pode terminar com variável.** `Sua consulta é dia {{2}}.` ❌ (o ponto final não conta) → `Sua consulta é dia {{2}}. Até lá!` ✅
3. **Não pode ter duas variáveis coladas.** `{{1}} {{2}}` ❌ → escreva algo entre elas.

Se escapar alguma outra coisa, a Meta recusa na hora e o app mostra o motivo dela, com essas palavras: *"A Meta recebeu e recusou o modelo"* — ou seja, chegou lá, só não passou.

## Outros motivos comuns de recusa

- Promessa exagerada ou linguagem de spam ("GANHE DINHEIRO FÁCIL", excesso de maiúsculas).
- Categoria errada — texto de promoção cadastrado como Utilidade.
- Texto genérico demais, sem contexto ("Oi", "Tudo bem?").
- Conteúdo proibido pela Meta (bebida alcoólica, apostas, medicamentos, entre outros).

## Onde os modelos são usados

- **No atendimento**, quando a janela de 24 horas fechou: botão **Enviar modelo**.
- **Nas campanhas** pelo canal Oficial — [disparo em massa](/ajuda/campanhas/campanha-no-canal-oficial) no Oficial **só** funciona com modelo.

## Apagar

O botão de lixeira remove o modelo na Meta e no ConectaChat. Atenção: a Meta apaga **todos os idiomas** daquele nome de uma vez.

## Dica de quem já usa

Tenha pelo menos três modelos aprovados desde o começo:

1. **Retomada** — "Oi {{1}}, vi que nossa conversa ficou parada. Ainda posso ajudar?"
2. **Lembrete** — confirmação de horário, entrega, pagamento.
3. **Novidade** — o de marketing, para reativar quem sumiu.

Com eles no bolso, nenhuma conversa morre porque a janela fechou.

## Limites da sua conta

Sem verificação de negócio na Meta, sua conta começa com até 250 modelos e 250 conversas iniciadas por dia. Verificando a empresa, sobe para 6.000 modelos e 2.000 conversas/dia. O caminho está no [artigo de conexão do Oficial](/ajuda/conexoes/conectar-whatsapp-oficial).
