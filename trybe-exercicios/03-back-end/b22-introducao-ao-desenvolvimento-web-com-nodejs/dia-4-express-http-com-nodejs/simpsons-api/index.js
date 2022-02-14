const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();

app.get('/simpsons', async function (req, res) {
  fs.readFile('./simpsons.json', 'utf8')
    .then((result) => {
      const array = JSON.parse(result);
      res.status(200).json(array);
    })
    .catch((err) => res.status(500).json({message: err.message}));
});

app.listen(3001, () => {
  console.log('Aplicativo ouvindo na porta 3001');
});
