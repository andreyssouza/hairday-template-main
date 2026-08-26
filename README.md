<img width="1906" height="1075" alt="image" src="https://github.com/user-attachments/assets/2f9b8810-d74d-4889-8245-7c4f4acb427e" />


# 💇‍♂️ Hair Day

Aplicação Web para agendamento de cortes de cabelo, permitindo que os clientes selecionem data, horário e registrem seus dados para marcação de atendimento.

[![GitHub Pages](https://img.shields.io/badge/demo-online-success)](https://andreyssouza.github.io/hairday-template-main/)

## ✨ Funcionalidades

- 📅 Seleção de data para agendamento
- ⏰ Visualização de horários disponíveis organizados por período (Manhã, Tarde e Noite)
- 👤 Cadastro do nome do cliente
- 📋 Listagem de agendamentos do dia selecionado
- ❌ Cancelamento de agendamentos
- 🎨 Interface intuitiva e responsiva

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização
- **JavaScript (ES6+)** - Lógica e interatividade
- **Webpack** - Bundler de módulos
- **Babel** - Transpilador JavaScript
- **Day.js** - Manipulação de datas
- **JSON Server** - API REST fake para desenvolvimento

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🚀 Como Executar o Projeto

1. **Clone o repositório**
```bash
git clone https://github.com/andreyssouza/hairday-template-main.git
cd hairday-template-main
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor JSON (em um terminal)**
```bash
npm run server
```
O servidor estará disponível em `http://localhost:3333`

4. **Inicie o servidor de desenvolvimento (em outro terminal)**
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:8080`

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com hot reload
- `npm run build` - Gera a build de produção na pasta `dist`
- `npm run server` - Inicia o JSON Server na porta 3333

## 📂 Estrutura do Projeto

```
hairday-template-main/
├── dist/              # Arquivos de build
├── src/               # Código fonte
│   ├── assets/        # Imagens e ícones
│   ├── libs/          # Bibliotecas auxiliares
│   ├── modules/       # Módulos da aplicação
│   ├── styles/        # Arquivos de estilo
│   ├── utils/         # Utilitários
│   └── main.js        # Arquivo principal JavaScript
├── index.html         # Arquivo HTML principal
├── package.json       # Dependências e scripts
├── server.json        # Configuração do JSON Server
└── webpack.config.js  # Configuração do Webpack
```

## 🎯 Períodos de Atendimento

- **Manhã**: 09h às 12h
- **Tarde**: 13h às 18h
- **Noite**: 19h às 21h

## 🌐 Deploy

O projeto está disponível online através do GitHub Pages:
[https://andreyssouza.github.io/hairday-template-main/](https://andreyssouza.github.io/hairday-template-main/)

## 👨‍💻 Autor

**Andrey Schwantes de Souza**

## 📄 Licença

Este projeto está sob a licença ISC.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
