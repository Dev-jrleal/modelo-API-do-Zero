# Modelo API do Zero

Este repositório contém um modelo básico de API REST utilizando **Node.js** e **Express**. Ele fornece endpoints CRUD para manipular uma lista de piadas.

## 🛠 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [UUID](https://www.npmjs.com/package/uuid)

## 🚀 Como Usar

### 1️⃣ Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/modelo-api-do-zero.git
cd modelo-api-do-zero
```

### 2️⃣ Instalar as Dependências
```bash
npm install
```

### 3️⃣ Executar o Servidor
```bash
node index.js
```
O servidor rodará na porta **3000**.

## 📌 Endpoints Disponíveis

### 🔍 1. Obter todas as piadas
**GET** `/piadas`

### 🔍 2. Obter uma piada por ID
**GET** `/piadas/:id`

### ✍️ 3. Criar uma nova piada
**POST** `/piadas`

📌 **Corpo da requisição (JSON):**
```json
{
  "conteudo": "Nova piada engraçada",
  "autor": "Autor da piada"
}
```

### 🔄 4. Atualizar uma piada existente
**PUT** `/piadas/:id`

📌 **Corpo da requisição (JSON):**
```json
{
  "conteudo": "Piada atualizada",
  "autor": "Novo autor"
}
```

### ❌ 5. Deletar uma piada
**DELETE** `/piadas/:id`

## 📌 Melhorias Futuras
- Implementar persistência de dados com um banco de dados (MongoDB ou PostgreSQL)
- Adicionar autenticação com JWT
- Criar testes automatizados

## 🤝 Contribuição
Sinta-se à vontade para contribuir enviando um **Pull Request** ou abrindo uma **Issue**.

## 📜 Licença
Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

