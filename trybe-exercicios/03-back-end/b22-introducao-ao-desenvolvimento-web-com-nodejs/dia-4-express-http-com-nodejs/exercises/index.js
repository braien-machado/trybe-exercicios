const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// 1. Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

app.get('/ping', function (req, res) {
  res.status(200).json({ message: 'pong' });
});

app.listen(3002, () => {
  console.log('Aplicativo ouvindo na porta 3002');
});
