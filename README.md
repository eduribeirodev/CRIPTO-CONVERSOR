#  Cripto Conversor 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)


##  Sobre o Projeto

Este projeto consiste num painel administrativo (backoffice) que permite gerir utilizadores e fluxos financeiros. A aplicação foca-se em **UI consistente**, **responsividade** e **boas práticas de desenvolvimento** com React.

### Principais Objetivos Alcançados:
- Integração com API externa para cotações reais.
- Gestão de estado local e simulação de dados (Mocks).
- Interface moderna com suporte a Dark/Light Mode.
- Navegação fluida entre as 5 telas obrigatórias.

---

##  Tecnologias e Stack Técnica

- **Frontend:** [React.js](https://reactjs.org/) (v18) com [Vite](https://vitejs.dev/) para um ambiente de desenvolvimento ultra-rápido.
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) para garantir tipagem estática e evitar erros em tempo de execução.
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) para design responsivo e [Shadcn/UI](https://ui.shadcn.com/) para componentes de interface de alta qualidade.
- **Ícones:** [Lucide React](https://lucide.dev/).
- **API:** [CoinGecko API](https://www.coingecko.com/en/api) para dados reais de mercado.

---

##  Estrutura de Pastas

A arquitetura segue padrões de escalabilidade e separação de conceitos:

```
  src/
  ├── components/   # Componentes de UI (Botões, Inputs, Cards)
  ├── context/      # Estados globais (Ex: ThemeContext)
  ├── hooks/        # Hooks personalizados (Ex: useCrypto)
  ├── layouts/      # Estrutura base (DashboardLayout)
  ├── lib/          # Utilitários e configurações (Shadcn/Tailwind)
  ├── mocks/        # Dados obrigatórios (Users e Transactions)
  ├── pages/        # Telas da aplicação (Home, Users, Withdraw, etc)
  └── services/     # Camada de comunicação com a API
```
  
## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar a aplicação localmente:

### 1. Pré-requisitos
Certifique-se de que tem o **Node.js** (v18+) instalado na sua máquina.

### 2. Clonar o Repositório
bash

git clone [https://github.com/eduribeirodev/CRIPTO-CONVERSOR.git](https://github.com/eduribeirodev/CRIPTO-CONVERSOR.git)
cd CRIPTO-CONVERSOR

### 3. npm install 

### 4. Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto e adicione a sua chave da CoinGecko (opcional):
VITE_API_KEY=sua_chave_aqui

### 5. Iniciar a Aplicação
npm run dev

### Credencias de Acesso com Dados Dockados
### Página de Login

```
E-mail: admin@email.com

Senha: 123456
```

### Página de Registro
Para simular um cadastro com sucesso e ser redirecionado ao Dashboard, os campos devem ser preenchidos exatamente assim:

```
Nome: Admin

Email: admin@email.com

Senha: 123456

Confirmação de Senha: 123456

```
