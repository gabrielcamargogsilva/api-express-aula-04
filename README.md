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

## Importar a collection no Postman

Siga os passos abaixo para visualizar e testar as rotas da API:

1. Abra o terminal na pasta do projeto.
2. Instale as dependências, caso ainda não tenha feito isso:

  ```bash
  npm install
  ```

3. Inicie o servidor:

  ```bash
  npm start
  ```

  Mantenha esse terminal aberto. A API ficará disponível em `http://localhost:3000`.

4. Abra o Postman.
5. Clique em **Import**, no canto superior esquerdo.
6. Selecione **Files** e escolha o arquivo `postman_collection.json` que está na pasta deste projeto.
7. Confirme a importação. A collection **API de Produtos** aparecerá na barra lateral, em **Collections**.
8. Expanda a collection e clique em uma das requisições para visualizar o método HTTP, a URL, os cabeçalhos e o corpo da requisição.
9. Clique em **Send** para executar a requisição. O resultado aparecerá na área **Response**, na parte inferior da tela.

Para testar a criação ou atualização de um produto, abra a aba **Body** e confirme que a opção **raw** e o formato **JSON** estão selecionados. Para a busca filtrada, abra **Params**, habilite o parâmetro `q` e informe o termo desejado.

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