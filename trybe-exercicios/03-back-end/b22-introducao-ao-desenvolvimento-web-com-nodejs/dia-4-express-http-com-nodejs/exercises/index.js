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

  res.status(200).json({ message: `Hello, ${name}!` });
});

// Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .

app.post('/greetings', function (req, res) {
  const { name, age } = req.body;
  
  if (age <= 17) return res.status(401).json({ message: 'Unauthorized' });

  res.status(200).json({ message: `Hello, ${name}!` });
});

app.listen(3002, () => {
  console.log('Aplicativo ouvindo na porta 3002');
});
