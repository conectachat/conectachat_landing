## Diagnóstico

O erro **"Evolution API: Forbidden"** vem do servidor Evolution (não do nosso app). Aconteceu ao clicar em **Conectar WhatsApp**, durante a chamada `POST /instance/create` (ou `/instance/connect`).

`Forbidden` da Evolution API significa **uma destas três coisas**, nessa ordem de probabilidade:

1. **`EVOLUTION_API_KEY` inválida ou expirada** — a chave salva nos segredos do backend não corresponde à `AUTHENTICATION_API_KEY` configurada no servidor Evolution. É a causa mais comum.
2. **`EVOLUTION_API_URL` apontando para o servidor errado** — URL antiga / outro tenant que não reconhece essa key.
3. **Servidor Evolution com política de IP/origem** bloqueando o Worker da Lovable (raro, mas possível em self-host com firewall).

Nenhuma das três é corrigida em código — todas são config do servidor Evolution.

## Plano de ação

### Passo 1 — Confirmar qual chamada falhou (logs)
Ler os logs do server function `connectWhatsapp` para ver exatamente em qual endpoint Evolution retornou 403 (`/instance/create`, `/instance/connect` ou `/webhook/set`). Isso confirma se é auth global ou permissão por instância.

### Passo 2 — Verificar segredos
Listar os segredos `EVOLUTION_API_URL` e `EVOLUTION_API_KEY` (sem expor valor) para confirmar que estão presentes e que a URL não tem typo / barra a mais / protocolo errado.

### Passo 3 — Teste direto na Evolution
Disparar um `GET {EVOLUTION_API_URL}/instance/fetchInstances` com a chave atual a partir do servidor. Três cenários:
- **200 OK** → a chave funciona; o 403 é por instância específica. Solução: apagar a instância `atendezap_<companyId>` órfã no painel Evolution e reconectar.
- **401/403** → chave inválida. Solução: atualizar `EVOLUTION_API_KEY` para o valor correto da `AUTHENTICATION_API_KEY` no `.env` do servidor Evolution.
- **Timeout / DNS** → URL errada. Solução: atualizar `EVOLUTION_API_URL`.

### Passo 4 — Melhoria de UX (pequena, opcional)
No `evolution.server.ts`, quando a Evolution responder 401/403, traduzir a mensagem para algo mais acionável tipo: *"Servidor WhatsApp recusou a autenticação. Verifique EVOLUTION_API_KEY/URL nos segredos."* — ajuda no próximo erro, mas **não resolve o atual**.

## O que NÃO vou fazer

- Não vou trocar a chave inventando um valor — preciso que você confirme/forneça a chave correta do seu servidor Evolution.
- Não vou mexer no fluxo de conexão antes de confirmar pelos logs em qual endpoint o 403 caiu.

## Resultado esperado

Depois do Passo 3, saberemos exatamente qual segredo precisa ser corrigido. Se for chave/URL, eu te peço o valor novo via `update_secret` (formulário seguro). Se for instância órfã, te oriento a apagar no painel da Evolution e tentar conectar de novo.
