const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const validateToken = require('./middlewares/validateToken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/btc/price', validateToken, async function (_req, res) {
  try {
    const result = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');

    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log('Aplicação escutando na porta 3003');
});