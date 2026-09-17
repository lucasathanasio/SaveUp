# 💰 Save Up — Dashboard Financeiro Pessoal

O **Save Up** é um sistema de gestão financeira pessoal, com controle de transações, orçamento mensal, metas de economia e análises de gastos ao longo do tempo.

> ⚠️ **Projeto em desenvolvimento.** As seções abaixo indicam o status atual de cada funcionalidade.

---

## 🚀 Visão Geral do Projeto

O Save Up é organizado como um **monorepo**, com um backend próprio e um frontend web:

1. **apps/web** — Aplicação React (Vite) com o dashboard financeiro, telas de extrato, orçamento, metas, análises, autenticação e configurações.
2. **apps/server** — API em Node.js/Express (TypeScript) responsável pelas regras de negócio e persistência dos dados.
3. **packages/shared** — Código compartilhado entre front e back.

---

## ✨ Funcionalidades

### 🎨 Frontend (apps/web)

> ⚠️ Os dados exibidos nas telas (transações, categorias, metas, etc) estão **mockados** enquanto a integração com o backend não é finalizada.

- ✅ Dashboard com resumo financeiro (cards, últimas transações, gráficos de categorias e despesas)
- ✅ Extrato completo de transações, com filtros por categoria, tipo, período e valor
- ✅ Orçamento Mensal (Budgets): limite mensal e progresso por categoria
- ✅ Metas Financeiras (Goals): acompanhamento de progresso e prazos das metas
- ✅ Telas de Login e Cadastro (UI)
- ✅ Tela de Configurações (perfil, senha, 2FA, tema, moeda, idioma)
- ✅ Biblioteca própria de componentes reutilizáveis (BaseCard, ItemCard, StatusLegend, SmartTipCard, Button e gráficos próprios)
- ✅ Página de Análises e Insights (Analytics): comparação mês a mês, categorias em donut chart, economias por período
- ⏳ Integração dos formulários (transações, categorias, metas, etc) com a API real — hoje o frontend não está consumindo o backend
- ⏳ Notificações e resumo mensal por e-mail (funcionais)
- ⏳ Exportação de dados

### ⚙️ Backend (apps/server)

- ✅ Servidor Express configurado com TypeScript
- ✅ Banco de dados MySQL provisionado
- 🔄 Modelagem do schema com Prisma
- ⏳ Autenticação de usuários (hash de senha com bcrypt, validação manual dos dados de entrada)
- ⏳ CRUD de transações
- ⏳ CRUD de categorias e orçamentos
- ⏳ CRUD de metas financeiras
- ⏳ Endpoints de relatórios/analytics
- Dicas inteligentes

**Legenda:** ✅ concluído · 🔄 em desenvolvimento agora · ⏳ próximo da fila

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React** + **Vite**
- **Tailwind CSS**
- **shadcn/ui** e **bklit** (biblioteca de gráficos)

### Backend
- **Node.js** + **Express**
- **TypeScript** (execução via `tsx`)
- **MySQL** como banco de dados
- **Prisma** como ORM
- **bcrypt** para hash de senhas

---

## 📦 Instalação e Execução

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- [MySQL Server](https://dev.mysql.com/downloads/mysql/) instalado e rodando

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd SaveUp
   ```

2. **Instalar dependências (workspaces):**
   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente:**
   Crie um arquivo `.env` dentro de `apps/server` com as configurações de conexão ao MySQL (host, usuário, senha e nome do banco `Save Up`).

4. **Rodar o backend:**
   ```bash
   cd apps/server
   npm run dev
   ```
   > Endpoint de teste disponível em `/api/health`.

5. **Rodar o frontend:**
   ```bash
   cd apps/web
   npm run dev
   ```

---

## 🗺️ Roadmap Resumido

| Etapa | Status |
| :--- | :---: |
| UI do Dashboard, Extrato, Orçamento, Metas, Análises e Insights | ✅ |
| Setup do backend (Express + TypeScript + MySQL) | ✅ |
| Modelagem do banco com Prisma | 🔄 |
| Autenticação real (API) | 🔄 |
| CRUDs (transações, categorias, metas) | ⏳ |
| Integração frontend ↔ backend | ⏳ |
| Notificações e exportação de dados | ⏳ |

---


- **Desenvolvido por:** Lucas Athanasio
