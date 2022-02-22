const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const Ping = require('./controllers/pingController');
const Cep = require('./controllers/cepController');
const validateCep = require('./middlewares/validateCep');
const validateFields = require('./middlewares/validateFields');

const app = express();
app.use(bodyParser.json());

app.get('/ping', Ping.pong);
app.get('/cep/:cep', validateCep, Cep.getCep);
app.post('/cep', validateFields, Cep.createCep);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
