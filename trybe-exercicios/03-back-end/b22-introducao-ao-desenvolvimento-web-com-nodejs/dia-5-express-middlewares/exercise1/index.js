const express = require('express');
const userRouter = require('./routes/userRouter');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(bodyParser.json());

app.use('/user', userRouter);

app.use(errorHandler);

app.listen(3002, () => {
  console.log('Aplicação escutando na porta 3002')
});