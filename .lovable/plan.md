Vou ajustar o fluxo de autenticação para não prender o usuário master na tela de cadastro.

Plano:
1. Alterar `/entrar` para abrir em modo **login** por padrão quando não houver `modo=signup` explícito.
2. Adicionar na própria tela `/entrar?modo=signup&plano=pro` uma opção clara de alternar para **“Já tenho uma conta / Entrar”**, preservando o plano escolhido na URL.
3. Ajustar o botão **Entrar** da landing page para ir para `/entrar?modo=login`, em vez de cair no cadastro com plano.
4. Manter os botões dos planos como cadastro/trial (`modo=signup&plano=...`) para novos clientes.
5. Revisar a troca de e-mail no formulário para não esconder o campo de senha indevidamente quando o usuário está em modo login.
6. Validar no preview que clicar em **Entrar** mostra campo de senha e permite usar o e-mail master com a senha definida.