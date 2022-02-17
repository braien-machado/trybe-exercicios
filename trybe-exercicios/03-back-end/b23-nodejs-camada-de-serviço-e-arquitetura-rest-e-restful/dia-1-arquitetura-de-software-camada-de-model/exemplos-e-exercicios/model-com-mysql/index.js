const bodyParser = require('body-parser');
const express = require('express');
const authorRoute = require('./routes/authorRoute');
const bookRoute = require('./routes/bookRoute');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/authors', authorRoute);
app.use('/books', bookRoute)

app.use((err, req, res, next) => {
  res.status(err.code).json(err.message);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));