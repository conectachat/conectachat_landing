## Diagnóstico

**1. Badge "1/1 — Fazer upgrade" mesmo no Business**
- `src/lib/plan-limits.server.ts` força `limites.instancias: 1` na linha 59, ignorando o `limite_instancias` da tabela `plan`.
- Além disso, os 3 planos hoje têm `limite_instancias = 1` no banco.

**2. Mensagem não chega na caixa de entrada**
- Tabela `mensagens` está vazia, ou seja, o webhook do Evolution não está entregando POSTs para a nossa rota `/api/public/whatsapp-webhook`.
- `webhook_configured_at` já está preenchido, então a URL gravada na instância Evolution é a do host que estava ativo na hora do "Conectar" (provavelmente o preview antigo) e nunca foi reaplicada para o host atual.

## Correções

### A. Limites de números por plano (Starter 1 · Pro 3 · Business 10)
1. Migration: `UPDATE public.plan SET limite_instancias = 3 WHERE slug='pro'; UPDATE ... 10 WHERE slug='business';` (Starter já é 1).
2. `src/lib/plan-limits.server.ts`: substituir `instancias: 1` por `Number(row?.limite_instancias ?? 1)`.

### B. Reaplicar webhook do WhatsApp
1. Nova server fn `resyncWhatsappWebhook` em `src/lib/evolution.functions.ts`: resolve company, recalcula `buildWebhookUrl(token)` usando o host atual da requisição, chama `evoSetWebhook(instanceName, url)` e grava `webhook_configured_at = now()`. Retorna `{ webhookUrl }`.
2. `src/routes/app/conexao.tsx`:
   - Botão "Reaplicar webhook" (visível quando `status === 'connected'`) que chama a fn e mostra toast com a URL aplicada.
   - Exibir a `webhookUrl` retornada num pequeno bloco "URL configurada no Evolution: …" para o usuário conferir que bate com o domínio onde está logado (preview vs publicado).
3. Sem alterar o fluxo do webhook em si — só garantir que o Evolution conhece a URL certa do ambiente atual.

### C. Validação
- Após aplicar: abrir `/app/conexao`, clicar "Reaplicar webhook", enviar uma mensagem ao número conectado e conferir `select count(*) from mensagens` + `/app/conversas`.
- Badge deve mostrar `1/10 números` (Business) sem o aviso "Fazer upgrade".

## Fora de escopo
- Não mexer no fluxo do agente IA, no parser de payload do Evolution, nem em RLS.
- Não tocar nos limites de mensagens/contatos/usuários dos planos.