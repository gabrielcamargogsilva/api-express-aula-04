# API de produtos

API REST básica feita com Node.js e Express. Os dados ficam em memória, então são resetados quando o servidor é reiniciado.

## Executar

```bash
npm install
npm start
```

Para desenvolvimento, reiniciando automaticamente ao salvar:

```bash
npm run dev
```

Servidor padrão: `http://localhost:3000`

## Rotas

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/` | Informações básicas da API |
| GET | `/api/saude` | Verifica se a API está online |
| GET | `/api/produtos` | Lista todos os produtos |
| GET | `/api/produtos?q=garrafa` | Busca por nome ou categoria |
| GET | `/api/produtos/:id` | Busca um produto pelo ID |
| POST | `/api/produtos` | Cria um produto |
| PUT | `/api/produtos/:id` | Atualiza um produto |
| DELETE | `/api/produtos/:id` | Exclui um produto |

### Corpo para criar ou atualizar

```json
{
  "nome": "Mochila",
  "categoria": "Acessórios",
  "preco": 89.9,
  "disponivel": true
}
```

### Exemplo no frontend

```js
const resposta = await fetch('http://localhost:3000/api/produtos');
const produtos = await resposta.json();
console.log(produtos);
```


## Autor
- **Gabriel Camargo Gonçalves Silva**  
  • [GitHub](https://github.com/gabrielcamargogsilva)  
  • [LinkedIn](www.linkedin.com/in/gabriel-camargo-dev)
  • [Email](mailto:gabrielcamargogsilva@gmail.com)