const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = 3000;

const Author = require('./models/Author');

app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

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

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Dados inválidos' });

  await Author.create(first_name, middle_name, last_name);
  res.status(201).json({ message: 'Autor criado com sucesso!' });
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