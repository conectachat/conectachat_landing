Se sua empresa tem sistema próprio, loja virtual ou usa automação (n8n, Make, Zapier), a API do ConectaChat deixa esses sistemas conversarem com o seu WhatsApp.

O módulo **API** fica no menu lateral (dono e administradores) e tem quatro abas: Chaves, Webhooks, Documentação e Registro de uso.

> Este é o assunto mais técnico da central. Se você não programa, mostre esta página para quem cuida do seu sistema — ou peça ajuda ao suporte.

## Criando uma chave

Aba **Chaves de API** → nova chave. Dê um nome que diga para que serve ("Site — formulário de contato") e marque as **permissões**:

| Permissão | Libera |
|---|---|
| **Ler dados** | Consultar conversas, contatos, mensagens, funis |
| **Enviar mensagens** | Mandar texto e mídia pelo WhatsApp |
| **Criar, atualizar e bloquear contatos** | Cadastro de contatos |
| **Criar, aplicar e remover etiquetas** | Etiquetas |
| **Criar e mover cards no CRM** | Funil de vendas |
| **Fechar, atribuir e transferir conversas** | Gestão de atendimento |
| **Disparar fluxos do chatbot** | Iniciar automações |

Marque só o necessário. Chave do formulário do site precisa criar contato e disparar fluxo — não precisa fechar conversa.

> 🔑 **A chave aparece uma única vez**, na hora da criação. Copie e guarde num lugar seguro. Não guardamos o valor: só o começo dela, para você identificar depois. Perdeu? Crie outra e revogue a antiga.

## O que dá para fazer

Envio: mandar mensagem e mídia. Contatos: criar, atualizar, bloquear e desbloquear. Etiquetas: criar, aplicar e remover. CRM: criar e mover cartões. Fluxos: disparar. Conversas: listar, ler mensagens, fechar, atribuir e transferir. Consultas: contatos, etiquetas, departamentos, funis, agendamentos e respostas rápidas.

A referência completa, com os campos de cada chamada e os códigos de erro, está na aba **Documentação**, dentro do app — é ela que se mantém atualizada.

## Proteções que já vêm ligadas

- A chave só enxerga os dados **da sua empresa**.
- Falta de permissão devolve erro claro, não dado errado.
- **Limite de 30 envios por minuto** por chave, para proteger seu número de bloqueio.
- Contatos [bloqueados](/ajuda/contatos/bloquear-e-descadastro) continuam protegidos: a API não fura descadastro.

## Registro de uso

A aba **Registro de uso** mostra as últimas chamadas: qual chave, qual ação, o resultado e o erro quando houver. É por onde se descobre por que a integração parou — quase sempre é permissão faltando ou chave revogada.

## Revogar

Botão de revogar na lista. O efeito é imediato: qualquer sistema usando aquela chave para de funcionar na hora. Use sem medo quando alguém sai da empresa ou quando houver suspeita de vazamento.

## O caminho inverso

Para o ConectaChat **avisar o seu sistema** quando algo acontece, veja [webhooks de saída](/ajuda/api/webhooks-de-saida).
