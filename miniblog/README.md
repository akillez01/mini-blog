# Conteúdo do arquivo /miniblog/miniblog/README.md

# MiniBlog

Este é um projeto de blog simples desenvolvido com React.

## Estrutura do Projeto

- **public/index.html**: Página HTML principal do aplicativo.
- **src/App.js**: Componente principal do aplicativo React.
- **src/index.js**: Ponto de entrada do aplicativo.
- **package.json**: Configuração do npm com dependências e scripts.

## Configuração para GitHub Pages

Para hospedar o projeto "miniblog" no GitHub Pages, siga os passos abaixo:

1. Adicione a dependência `gh-pages` ao seu projeto:
   ```
   npm install gh-pages --save-dev
   ```

2. No arquivo `package.json`, adicione a propriedade `homepage` com a URL do seu repositório GitHub:
   ```
   "homepage": "https://<seu-usuario>.github.io/miniblog"
   ```

3. Adicione os scripts para pré-visualizar e implantar o aplicativo:
   ```
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Execute o comando para implantar o aplicativo:
   ```
   npm run deploy
   ```

Após seguir esses passos, seu aplicativo deve estar disponível no GitHub Pages na URL especificada.