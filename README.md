#  Cripto Conversor - Nexus Challenge

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

```text
src/
├── components/   # Componentes reutilizáveis (UI, Layout, Forms)
├── context/      # Context API para gestão do Tema (Dark/Light)
├── hooks/        # Hooks personalizados (Ex: useCrypto para fetch)
├── layouts/      # DashboardLayout para persistência da navegação
├── lib/          # Configurações de bibliotecas (utils, shadcn)
├── mocks/        # Dados estáticos (Lista de 10+ users e 30+ transações)
├── pages/        # Telas: Home, Users, Deposit, Sake e Conversion
├── routes/       # Definição e proteção das rotas da aplicação
└── services/     # Camada de serviços para chamadas à API
