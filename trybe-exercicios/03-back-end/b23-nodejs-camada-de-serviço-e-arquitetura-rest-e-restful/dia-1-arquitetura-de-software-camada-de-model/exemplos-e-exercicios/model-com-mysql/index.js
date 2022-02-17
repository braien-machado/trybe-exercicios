const bodyParser = require('body-parser');
const express = require('express');
const authorRoute = require('./routes/authorRoute');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/authors', authorRoute);

const Book = require('./models/Book');

app.get('/books', async (req, res) => {
  const { id } = req.query;
  if (id) {
    const booksById = await Book.getByAuthorId(id);
    return res.status(200).json(booksById);
  }
  const books = await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  try {
    const { title, author_id } = req.body;
  
    if (!(await Book.isValid(title, author_id))) return res.status(400).json({ message: 'Dados inválidos' });
  
    await Book.create(title, author_id);
  
    res.status(201).json({message: 'Livro criado com sucesso!'});
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(err.code).json(err.message);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));