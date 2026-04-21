# Paranaguá Tour API

Uma API RESTful para o aplicativo de turismo de Paranaguá, desenvolvida com Node.js, Express e Knex.

## Descrição

Esta API permite gerenciar usuários, pontos turísticos, comentários, imagens e sessões de autenticação para o aplicativo Paranaguá Tour.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL ou PostgreSQL
- npm ou yarn

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd paranaguaTour-API
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```
   HOST=localhost
   DB_PORT=3306
   DB_USER=seu_usuario
   DATABASE=seu_banco
   DATABASE_PASSWORD=sua_senha
   JWT_SECRET=seu_segredo_jwt
   PORT=3333
   ```

## Configuração do Banco de Dados

1. Execute as migrações:
   ```bash
   npm run migrate
   ```

2. Execute os seeds (opcional, para dados iniciais):
   ```bash
   npm run seeds
   ```

## Executando a Aplicação

Para desenvolvimento:
```bash
npm run dev
```

Para produção:
```bash
npm start
```

A API estará rodando na porta definida em `PORT`.

## Estrutura do Projeto

```
src/
├── config/
├── controllers/          # Controladores da API
├── database/
│   └── knex/
│       ├── migrations/   # Migrações do banco
│       └── seeds/        # Seeds para dados iniciais
├── middlewares/          # Middlewares de autenticação e autorização
├── routes/               # Definições das rotas
├── services/             # Lógica de negócio
└── utils/                # Utilitários e classes de erro
```

## API Endpoints

### Usuários (`/users`)
- `POST /` - Criar usuário
- `GET /:id` - Buscar usuário por ID
- `PUT /` - Atualizar usuário (autenticado)
- `GET /` - Listar usuários (admin)
- `DELETE /:id` - Deletar usuário (admin)

### Pontos Turísticos (`/points`)
- `POST /` - Criar ponto
- `GET /` - Listar pontos
- `GET /:id` - Buscar ponto por ID
- `PUT /:id` - Atualizar ponto
- `DELETE /:id` - Deletar ponto

### Comentários (`/comments`)
- `POST /` - Criar comentário
- `GET /` - Listar comentários
- `GET /:postId` - Listar comentários por post
- `PUT /:id` - Atualizar comentário
- `DELETE /:id` - Deletar comentário

### Imagens (`/images`)
- `POST /` - Criar imagem
- `GET /` - Listar imagens
- `GET /:pointId` - Listar imagens por ponto
- `DELETE /:id` - Deletar imagem

### Sessão (`/session`)
- `POST /` - Fazer login

## Autenticação

A API utiliza JWT para autenticação. Inclua o token no header `Authorization` como `Bearer <token>` para rotas protegidas.

## Tratamento de Erros

A API retorna erros no formato:
```json
{
  "status": "error",
  "message": "Mensagem de erro"
}
```

## Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Knex** - Query builder para SQL
- **MySQL/PostgreSQL** - Banco de dados
- **bcryptjs** - Hash de senhas
- **jsonwebtoken** - Autenticação JWT
- **cors** - Cross-Origin Resource Sharing

## Scripts Disponíveis

- `npm start` - Inicia o servidor em produção
- `npm run dev` - Inicia o servidor em modo desenvolvimento com nodemon
- `npm run migrate` - Executa migrações do banco
- `npm run seeds` - Executa seeds do banco

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
