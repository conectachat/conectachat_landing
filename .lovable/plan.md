# Ativar/desativar o Agente IA

Hoje não existe um botão para ligar/desligar a IA. O usuário só consegue pausar por contato (via palavra `/pausar`). Vou adicionar um interruptor global por empresa.

## 1. Banco (migration)

Adicionar coluna na tabela `agent_config`:
- `ativo boolean NOT NULL DEFAULT true`
- `pausado_em timestamptz NULL` (registra quando foi desativado, para auditoria/UX)
- `pausado_por uuid NULL` (user_id de quem pausou)

Sem mudança de policies — `agent_config` já é escopada por empresa.

## 2. UI — toggle visível e acessível

**a) Página do Agente (`src/routes/app/agente.tsx`)** — no header, ao lado do nome do agente, um switch grande "Agente IA: Ativo / Pausado" com cor de status (verde ativo / âmbar pausado) e texto auxiliar ("Respondendo automaticamente" / "Não vai responder novas mensagens"). Confirmação ao desativar.

**b) Dashboard (`src/components/dashboard/agent-status-card.tsx`)** — refletir o estado e permitir alternar dali também (atalho).

**c) Banner global** — quando `ativo=false`, mostrar um banner discreto no topo do shell (`src/components/app-shell.tsx`): "Agente IA pausado — novas mensagens não serão respondidas. [Reativar]".

## 3. Server functions (`src/lib/agent-ai.functions.ts` ou novo `agent-toggle.functions.ts`)

- `setAgentActive({ ativo: boolean })` com `requireSupabaseAuth`: resolve `company_id` do usuário, valida role (owner/admin), atualiza `agent_config` e grava `pausado_em`/`pausado_por`.
- `getAgentActive()` retorna o estado atual (também já vem no carregamento da config existente — só expor o campo).

## 4. Webhook do WhatsApp (`src/routes/api/public/whatsapp-webhook.ts`)

Ponto crítico: antes de chamar a IA para gerar resposta, ler `agent_config.ativo` da empresa daquela instância. Se `false`, apenas registrar a mensagem recebida em `mensagens` (para o histórico/CRM) e **não** gerar nem enviar resposta automática. Pausa por contato (`contact_pause`) continua funcionando como hoje, em cima desse gate global.

## 5. Telemetria leve

- Toast de confirmação ao alternar.
- `lead_evento` com tipo `agente_pausado` / `agente_reativado` (opcional, ajuda no histórico do CRM).

## Detalhes técnicos

- Tipos TS regenerados automaticamente via `src/integrations/supabase/types.ts` após a migration.
- Estado vive em `agent_config` (uma linha por empresa), então não há risco de divergência entre usuários da mesma empresa.
- O switch usa `<Switch>` do shadcn já presente no projeto.
- Demo (`src/routes/demo/*`) recebe a mesma UI, mas com `disabled` (segue o padrão do demo atual).

## Fora do escopo

- Agendamento de pausa (ex.: "pausar até amanhã 8h") — pode vir depois.
- Pausa por canal/instância individual quando a empresa tiver várias — hoje o webhook já resolve empresa pela instância; se quiser granularidade por instância, fazemos numa segunda iteração.
