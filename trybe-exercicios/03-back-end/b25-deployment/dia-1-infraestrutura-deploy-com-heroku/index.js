const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Está vivo');
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log('Listening on port', PORT))