
# 📚 Catálogo de Jogos

Um site simples e interativo para exibir um catálogo de jogos digitais e de tabuleiro favoritos! Este projeto foi criado com React.js e serve para mim como uma introdução prática no desenvolvimento front, incluindo uso de componentes, props, estado e estilização com CSS.

## 🚀 Funcionalidades

- **Listagem de jogos**: Cada jogo exibe um título, uma breve descrição e uma imagem.
- **Favoritar**: Marque seus jogos favoritos e veja o botão mudar de cor para indicar o status.
- **Design Responsivo**: Layout flexível e ajustado para diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **JavaScript (ES6+)**: Usado para lógica de interação e manipulação do DOM.
- **HTML5 e CSS3**: Estrutura básica e estilização do site, com foco em responsividade.
- **Hooks do React**: `useState` para gerenciar o estado do botão de favorito.

## 📂 Estrutura do Projeto

```plaintext
.
├── public/                   # Arquivos públicos
├── src/                      # Código-fonte principal
│   ├── components/           # Componentes React
│   │   ├── GameCard.js       # Componente de card de jogo
│   │   └── GameCatalog.js    # Componente do catálogo de jogos
│   ├── styles/               # Arquivos de estilo CSS
│   │   └── GameCatalog.css   # Estilos do catálogo e dos cards
│   └── App.js                # Componente principal da aplicação
├── README.md                 # Documentação do projeto
└── package.json              # Dependências e scripts
```

## 📦 Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## ⚙️ Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/catalogo-de-jogos.git
   cd catalogo-de-jogos
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o projeto.

## 🎮 Como Usar

1. Acesse a lista de jogos e explore as descrições.
2. Clique em "Adicionar aos Favoritos" para marcar um jogo como favorito.
3. Observe a cor do botão mudar para verde, indicando que o jogo foi favoritado.

## 💡 Atualizações e Funcionalidades

Este projeto foi criado como uma introdução ao desenvolvimento front-end com React.js, até o momento utilizei:

- **Componentes**: Estruturação modular usando componentes `GameCard` e `GameCatalog`.
- **Props e Estado**: Passagem de dados entre componentes e controle de estado interno.
- **Estilos Dinâmicos**: Mudança de cor do botão com base no estado `isFavorited`.

---

### 🌟 Contribuições

Sugestões e contribuições são bem-vindas! Sinta-se à vontade para abrir uma [issue](https://github.com/seu-usuario/catalogo-de-jogos/issues) ou enviar um [pull request](https://github.com/seu-usuario/catalogo-de-jogos/pulls).

---

**Divirta-se explorando o catálogo de jogos!**
