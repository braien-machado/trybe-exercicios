const express = require('express');
const bodyParser = require('body-parser');
const Ping = require('./controllers/Ping');

const app = express();
app.use(bodyParser.json());

app.get('/ping', Ping.pong);

const PORT = 3000;

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
