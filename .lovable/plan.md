## Problema

A tela mostra "Signups not allowed for this instance". O Auth do projeto está com cadastros desativados (`disable_signup = true`), então mesmo o primeiro usuário não consegue se registrar.

## Plano

1. Habilitar signups no Auth (`disable_signup: false`), mantendo:
   - Sem login anônimo
   - Sem auto-confirmação de e-mail (a menos que você peça)
   - Proteção de senha vazada (HIBP) ligada
2. Você refaz o cadastro com `renato_usa00@yahoo.com` na tela `/entrar?modo=signup`.
3. O gatilho `handle_new_user` promove esse primeiro usuário a `super_admin` automaticamente.
4. (Opcional, recomendado) Depois que o admin master estiver criado, posso voltar a desativar signups públicos para que novos usuários só entrem via fluxo de pagamento/convite.

## Detalhes técnicos

- Ferramenta: `supabase--configure_auth` com `disable_signup: false`.
- Sem mudanças de schema, código ou RLS.
- Se você quiser pular a confirmação por e-mail só para esse primeiro cadastro, posso ativar `auto_confirm_email` temporariamente — me avise.
