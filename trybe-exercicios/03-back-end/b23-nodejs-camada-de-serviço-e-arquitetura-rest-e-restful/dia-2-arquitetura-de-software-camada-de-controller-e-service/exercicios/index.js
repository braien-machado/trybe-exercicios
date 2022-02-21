const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const Ping = require('./controllers/Ping');

const app = express();
app.use(bodyParser.json());

app.get('/ping', Ping.pong);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
