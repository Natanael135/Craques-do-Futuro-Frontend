
# Mini Documentação do Projeto Frontend

## Como Rodar o Projeto

1. Clone o repositório.
2. Navegue até o diretório do projeto.
3. Execute `npm install` para instalar as dependências.
4. Para rodar o projeto em desenvolvimento, execute `npm run dev`.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção de interfaces de usuário.
- **Vite**: Ferramenta de build e desenvolvimento rápida.
- **Styled-components**: Biblioteca para estilização de componentes React com CSS.
- **React Router**: Para navegação entre páginas.

## Estrutura de Diretórios

```plaintext
└── Frontend
    ├── .gitignore
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── App.jsx
    │   ├── Pages
    │   │   └── Home
    │   │       └── index.jsx
    │   ├── components
    │   │   ├── Button
    │   │   │   └── index.jsx
    │   │   ├── Footer
    │   │   │   └── index.jsx
    │   │   ├── Header
    │   │   │   └── index.jsx
    │   │   ├── Logo
    │   │   │   └── index.jsx
    │   │   └── Modal
    │   │       └── index.jsx
    │   ├── index.css
    │   ├── layout
    │   │   └── index.jsx
    │   ├── main.jsx
    │   ├── routes
    │   │   └── paths.jsx
    │   └── theme.js
    └── vite.config.js
```

## Descrição dos Arquivos

### **1. `.gitignore`**
Contém as pastas e arquivos que devem ser ignorados pelo Git.

### **2. `README.md`**
Documentação do projeto, com instruções de instalação, execução e estrutura.

### **3. `eslint.config.js`**
Arquivo de configuração do ESLint para garantir um código consistente e de qualidade.

### **4. `index.html`**
Arquivo HTML principal que será servido para o frontend.

### **5. `package-lock.json` & `package.json`**
Arquivos de configuração do npm, contendo dependências e scripts do projeto.

### **6. `vite.config.js`**
Configuração do Vite para o build e desenvolvimento do projeto.

### **7. `src/`**
Diretório principal onde o código-fonte React é desenvolvido.

#### **7.1. `App.jsx`**
Arquivo principal onde o `ThemeProvider` e as rotas são configurados.

#### **7.2. `Pages/Home/index.jsx`**
Componente que exibe a página inicial do projeto.

#### **7.3. `components/`**
Contém os componentes reutilizáveis do projeto.

- **Button**: Componente de botão.
- **Footer**: Componente do rodapé.
- **Header**: Componente do cabeçalho.
- **Logo**: Componente de logo.
- **Modal**: Componente de modal.

#### **7.4. `index.css`**
Arquivo de estilos globais do projeto.

#### **7.5. `layout/index.jsx`**
Define o layout base da aplicação, com `Header`, `MainContent` e `Footer`.

#### **7.6. `main.jsx`**
Arquivo que inicializa a aplicação e a renderiza no DOM com `StrictMode`.

#### **7.7. `routes/paths.jsx`**
Configura as rotas da aplicação com o `react-router-dom`.

#### **7.8. `theme.js`**
Arquivo que define o tema de cores utilizado no projeto.


