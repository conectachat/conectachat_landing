## Objetivo
Atribuir o plano **Business** à empresa do usuário `renato_usa00@yahoo.com` como assinatura ativa vitalícia (sem cobrança), já que é sua própria conta.

## Passos
1. Localizar `user_id` de `renato_usa00@yahoo.com`, a `company_id` em que ele é owner e o `plan_id` do plano **Business**.
2. Atualizar (ou inserir) a linha em `subscription` para essa empresa:
   - `plan_id` = Business
   - `status` = `active`
   - `trial_ends_at` = `null`
   - `current_period_end` = `2099-12-31` (efetivamente vitalício)
   - `cancel_at_period_end` = `false`
3. Atualizar `company`:
   - `status_cobranca` = `ativo`
   - `trial_ate` = `null`
4. Validar com `SELECT` que a empresa agora aparece com plano Business ativo.

## Observação
Nenhum código/UI muda. É apenas um ajuste de dados via `supabase--insert` (UPDATE/INSERT). O acesso ao app continua o mesmo, agora com features e limites do plano Business liberados.
