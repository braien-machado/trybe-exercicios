const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// 1. Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

app.get('/ping', function (_req, res) {
  res.status(200).json({ message: 'pong' });
});

// 2. Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .

app.post('/hello', function (req,res) {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: `'name' não foi definido!` });

  res.status(200).json({ message: `Hello, ${name}!` });
});

app.listen(3002, () => {
  console.log('Aplicativo ouvindo na porta 3002');
});
