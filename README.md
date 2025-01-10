# GitHub Status

## Descrição

O **GitHub Status** é um aplicativo moderno e minimalista criado em React, que permite aos usuários visualizar o status atual das operações do GitHub por meio da API do GitHub Status. Ele destaca componentes não operacionais de forma visual, para facilitar a identificação de problemas.

## Funcionalidades

- **Visualizar Status Atual**: O usuário pode ver o status atual das operações do GitHub, como Git, solicitações de API, problemas, PRs, painel, projetos, gists, notificações e páginas.
- **Atualização em Tempo Real**: Clique no botão "Obter Status" para recuperar o status mais recente.
- **Destaque de Problemas**: Componentes que não estão em status "Operacional" são destacados com animações e cores para chamar atenção.

## Tecnologias Utilizadas

- **React**
- **CSS** para estilização
- **Fetch API** para consumir a API do GitHub Status

## Pré-requisitos

- Node.js (>= 14.x)
- npm (>= 6.x) ou yarn

## Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/FelipeGermano/git-status
   cd github-status
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   # ou
   yarn start
   ```

4. Abra o navegador em:

   ```
   http://localhost:3000
   ```

## Estrutura do Projeto

```
.
├── src
│   ├── components
│   │   ├── Header.js        # Componente do cabeçalho
│   │   ├── StatusList.js    # Componente que exibe a lista de status
│   │   └── ComponentItem.js # Componente para cada item do status
│   ├── App.js               # Componente principal
│   └── App.css              # Estilo global
├── public
│   └── index.html           # Página inicial
└── README.md                # Documentação do projeto
```

## APIs Utilizadas

- **GitHub Status API**:
  - `https://www.githubstatus.com/api/v2/status.json`
  - `https://www.githubstatus.com/api/v2/components.json`

## Estilização

O aplicativo utiliza um design minimalista e moderno com:

- Paleta de cores neutras e suaves.
- Destaque visual para itens com problemas (bordas vermelhas e animações).
- Layout responsivo, adaptado para diferentes tamanhos de tela.

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie um branch para a funcionalidade ou correção:

   ```bash
   git checkout -b minha-nova-feature
   ```

3. Faça commit das alterações:

   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```

4. Envie o branch:

   ```bash
   git push origin minha-nova-feature
   ```

5. Abra um Pull Request.

## Contato

- **Autor**: [Felipe Rocha Germano](https://github.com/FelipeGermano)
- **Email**: felipe_germano10@hotmail.com
