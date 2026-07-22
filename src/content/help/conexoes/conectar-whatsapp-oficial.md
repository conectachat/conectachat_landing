O WhatsApp Oficial é o canal aprovado pela Meta: **sem risco de bloqueio**, com selo de empresa e liberado para campanhas dentro das regras.

O cadastro é feito no site da Meta e é a parte mais trabalhosa. Reserve de 30 a 60 minutos (algumas aprovações da Meta podem levar dias). No final você terá 4 informações para colar no ConectaChat.

> **Precisa de um número novo?** Não necessariamente. Desde 2026 a Meta oferece a opção “usar somente um nome de exibição”: ela cria um número virtual grátis para você e o cliente vê só o nome da empresa. Detalhes na Parte 2.

## Antes de começar

1. Uma **conta pessoal no Facebook** (é ela que administra tudo na Meta).
2. Um **número de telefone exclusivo** — *opcional*, veja a Parte 2. Se for usar um número seu, ele **não pode estar registrado no WhatsApp comum nem no Business**. Se estiver, exclua a conta no aplicativo antes (WhatsApp → Configurações → Conta → Excluir conta).
3. CNPJ e documentos da empresa à mão (para a verificação de negócio, que destrava limites maiores).

---

## Parte 1 — Criar o app na Meta

1. Acesse **developers.facebook.com/apps** e entre com sua conta do Facebook.
2. Clique em **Criar app**.
3. Em “Qual caso de uso?”, escolha **Conectar-se com clientes pelo WhatsApp**.
4. Dê um nome ao app, confirme seu e-mail e crie (ou selecione) um **Portfólio de negócios**.

## Parte 2 — Número e IDs

1. No menu do app, abra **WhatsApp → Configuração da API**.
2. A Meta já cria sua conta de WhatsApp Business (WABA).
3. Em “De”, clique em **Adicionar número de telefone**. Há duas opções:
   - **Usar somente um nome de exibição** — a Meta cria um número virtual grátis, verificado na hora. O cliente vê o nome da sua empresa. Limitações: não faz nem recebe ligações/SMS, no máximo 2 por portfólio, e o nome passa por aprovação.
   - **Adicionar um novo número** — seu próprio número, verificado por SMS ou ligação.
4. **Copie e guarde** (estão nessa mesma tela):
   - **ID do número de telefone** (Phone number ID)
   - **ID da conta do WhatsApp Business** (WABA ID)

> ⚠️ **Cuidado clássico:** o *ID do número* **não é o telefone**. É um código numérico longo, tipo `123456789012345`. É ele que o ConectaChat pede.

## Parte 3 — Token permanente

O token que aparece na tela de configuração **expira em 24h** e não serve. O definitivo vem de um Usuário do Sistema:

1. Acesse **business.facebook.com/settings** e selecione seu portfólio.
2. Vá em **Usuários → Usuários do sistema** → **Adicionar**.
3. Crie com o papel **Administrador** (nome sugerido: “conectachat-api”).
4. Clique em **Adicionar ativos** → aba **Apps** → selecione o app da Parte 1 → ligue **Gerenciar app**.
5. Clique em **Gerar novo token**:
   - Selecione o app;
   - Expiração: **Nunca**;
   - Marque as permissões `whatsapp_business_messaging`, `whatsapp_business_management` e `business_management`.
6. **Copie o token agora** — ele só aparece uma vez.

> 🔒 Trate o token como uma senha. Não mande por WhatsApp nem e-mail aberto. No ConectaChat ele fica guardado criptografado em cofre e nunca mais aparece na tela.

## Parte 4 — App Secret

É a assinatura que garante que as mensagens recebidas vieram mesmo da Meta.

1. No painel do app, vá em **Configurações do app → Básico**.
2. No campo **Chave Secreta do Aplicativo**, clique em **Mostrar**, confirme sua senha e copie.

## Parte 5 — Colar no ConectaChat

1. Abra **Configurações → Conexões → Nova conexão → WhatsApp Oficial**.
2. Preencha:

| Campo no ConectaChat | De onde veio |
|---|---|
| Nome da conexão | Você escolhe (ex.: “Oficial Vendas”) |
| ID do número | Parte 2 |
| ID da conta (WABA) | Parte 2 |
| Token de acesso | Parte 3 |
| App Secret | Parte 4 |

3. Clique em **Conectar**. O ConectaChat valida na hora com a Meta e mostra duas informações para a próxima parte: a **URL de callback** e o **token de verificação**.

## Parte 6 — Configurar o webhook (para receber mensagens)

Sem este passo você **envia mas não recebe**.

1. No painel do app: **WhatsApp → Configuração → Webhook → Editar**.
2. Cole a **URL de callback** e o **token de verificação** que o ConectaChat mostrou.
3. Clique em **Verificar e salvar**.
4. Ainda na seção Webhook, clique em **Gerenciar** e assine o campo **`messages`**. Assine também `message_template_status_update` — é o que faz a aprovação dos seus modelos aparecer sozinha no app.

> A inscrição do app na sua conta WhatsApp é feita **automaticamente** pelo ConectaChat ao conectar. Se aparecer um aviso amarelo dizendo que não foi possível, confira se o token tem a permissão `whatsapp_business_management`.

## Parte 7 — Testar

1. De **outro celular**, mande uma mensagem para o número conectado.
2. Ela deve aparecer na Caixa de entrada em segundos, com o selo azul de canal Oficial.
3. Responda pelo ConectaChat e confirme que chegou.

## Verificação de negócio (recomendada)

Sem verificar a empresa na Meta, o número começa limitado:

| Recurso | Sem verificação | Com verificação |
|---|---|---|
| Conversas iniciadas por você / 24h | 250 | 2.000, subindo até ilimitado |
| Modelos de mensagem | 250 | 6.000 |
| Números por portfólio | 2 | 20 |

Mensagens que o **cliente inicia não contam** nesse limite. Para verificar: **business.facebook.com/settings → Central de segurança → Iniciar verificação**.

## Custos

O ConectaChat não cobra nada pelas mensagens do Oficial — **a Meta cobra de você**, no cartão do portfólio.

- **Responder um cliente** dentro da janela de 24h: **grátis**.
- **Iniciar conversa** fora da janela: só com modelo aprovado, cobrado por mensagem. Marketing custa mais; utilidade custa menos.

## Problemas comuns

| Sintoma | Causa provável | Solução |
|---|---|---|
| “Não foi possível validar na Meta” | Token errado/expirado ou ID do número trocado | Confira se copiou o **ID do número** (não o telefone) e gere o token pelo Usuário do Sistema |
| Webhook não verifica | Token de verificação diferente | Copie o token exato da tela do ConectaChat, sem espaços |
| Envia mas não recebe | Campo `messages` não assinado | Refaça a Parte 6, passo 4 |
| Erro 190 nas mensagens | Token revogado | Gere um token novo e atualize a conexão |
| “Recipient phone number not in allowed list” | App em modo Desenvolvimento | Mude o app para o modo **Ativo** no topo do painel |
| Número não cadastra | Número ativo no app WhatsApp | Exclua a conta no aplicativo antes, ou use a opção “somente nome de exibição” |
