# Blog Pessoal

Este projeto é uma aplicação de blog pessoal desenvolvida com [NestJS](https://nestjs.com/) e [TypeORM](https://typeorm.io/), permitindo o gerenciamento de postagens, temas e usuários, além de autenticação segura via [JWT](https://jwt.io/).

## Funcionalidades Detalhadas

- **Cadastro e autenticação de usuários:**
  - Criação de contas de usuário.
  - Login com geração de token JWT.
  - Proteção de rotas para usuários autenticados.

- **Gerenciamento de postagens:**
  - Criar novas postagens.
  - Editar postagens existentes.
  - Visualizar todas as postagens.
  - Excluir postagens.

- **Gerenciamento de temas:**
  - Adicionar novos temas.
  - Editar temas existentes.
  - Listar temas disponíveis.
  - Remover temas.

- **Administração de usuários:**
  - Visualizar dados dos usuários cadastrados.
  - Atualizar informações do usuário.

- **Configuração para múltiplos ambientes:**
  - Suporte para ambiente de desenvolvimento e produção.
  - Configuração flexível do banco de dados via arquivo `.env`.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [JWT](https://jwt.io/)
- [PostgreSQL](https://www.postgresql.org/) (ou outro banco relacional)
- [Node.js](https://nodejs.org/)

## Estrutura do Projeto

```
src/
├── auth/           # Autenticação e segurança
├── postagem/       # CRUD de postagens
├── tema/           # CRUD de temas
├── usuario/        # CRUD de usuários
├── data/           # Serviços de conexão com banco
├── app.module.ts   # Módulo principal
```

## Como Executar

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Configure o banco de dados:**
   Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias:

   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=seu_usuario
   DB_PASSWORD=sua_senha
   DB_DATABASE=blogpessoal
   JWT_SECRET=sua_chave_secreta
   ```

3. **Execute a aplicação:**
   ```bash
   npm run start:dev
   ```

4. **Acesse a documentação Swagger:**
   - Após iniciar o projeto, acesse [http://localhost:4000/api](http://localhost:4000/api) para visualizar e testar os endpoints da API.

## Testes

```bash
   npm run test:e2e
```

## Contato

- Nome: Rafael Selles
- Email: selles.rafael27@gmail.com.com
- GitHub: [GitHub](https://github.com/Rselless)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/rafael-selles-sant-anna/)