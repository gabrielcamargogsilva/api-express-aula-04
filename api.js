import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let produtos = [
    {
        id: 1,
        nome: 'Caderno de projetos',
        categoria: 'Papelaria',
        preco: 29.9,
        disponivel: true
    },
    {
        id: 2,
        nome: 'Garrafa reutilizável',
        categoria: 'Acessórios',
        preco: 49.9,
        disponivel: true
    }
];

app.get('/', (req, res) => {
    res.json({
        status: 'API está funcionando!',
        endpoints: {
            produtos: '/api/produtos',
            saude: '/api/saude'
        }
    });
});

app.get('/api/saude', (req, res) => {
    res.json({ status: 'ok', data: new Date().toISOString() });
});

app.get('/api/produtos', (req, res) => {
    const termo = String(req.query.q || '').trim().toLowerCase();
    const resultado = termo
        ? produtos.filter((produto) =>
            `${produto.nome} ${produto.categoria}`.toLowerCase().includes(termo))
        : produtos;

    res.json(resultado);
});

app.get('/api/produtos/:id', (req, res) => {
    const produto = produtos.find((item) => item.id === Number(req.params.id));

    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado.' });
    }

    res.json(produto);
});

app.post('/api/produtos', (req, res) => {
    const { nome, categoria, preco, disponivel = true } = req.body;

    if (!nome || !categoria || typeof preco !== 'number' || preco < 0) {
        return res.status(400).json({
            erro: 'Informe nome, categoria e um preco numérico maior ou igual a zero.'
        });
    }

    const novoProduto = {
        id: produtos.length ? Math.max(...produtos.map((produto) => produto.id)) + 1 : 1,
        nome,
        categoria,
        preco,
        disponivel: Boolean(disponivel)
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.put('/api/produtos/:id', (req, res) => {
    const indice = produtos.findIndex((item) => item.id === Number(req.params.id));

    if (indice === -1) {
        return res.status(404).json({ erro: 'Produto não encontrado.' });
    }

    const { nome, categoria, preco, disponivel } = req.body;
    if (!nome || !categoria || typeof preco !== 'number' || preco < 0) {
        return res.status(400).json({ erro: 'Dados do produto inválidos.' });
    }

    produtos[indice] = {
        id: produtos[indice].id,
        nome,
        categoria,
        preco,
        disponivel: Boolean(disponivel)
    };

    res.json(produtos[indice]);
});

app.delete('/api/produtos/:id', (req, res) => {
    const indice = produtos.findIndex((item) => item.id === Number(req.params.id));

    if (indice === -1) {
        return res.status(404).json({ erro: 'Produto não encontrado.' });
    }

    produtos.splice(indice, 1);
    res.status(204).send();
});

app.use((req, res) => {
    res.status(404).json({ erro: 'Rota não encontrada.' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});