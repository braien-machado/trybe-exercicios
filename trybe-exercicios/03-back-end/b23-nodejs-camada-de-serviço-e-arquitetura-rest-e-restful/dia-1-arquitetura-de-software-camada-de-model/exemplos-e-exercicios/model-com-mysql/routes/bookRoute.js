const express = require('express');
const route = express.Router();
const Book = require('../models/Book');

route.get('/', async (req, res) => {
  const { id } = req.query;
  if (id) {
    const booksById = await Book.getByAuthorId(id);
    return res.status(200).json(booksById);
  }
  const books = await Book.getAll();

  res.status(200).json(books);
});

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
});

route.post('/', async (req, res) => {
  try {
    const { title, author_id } = req.body;
  
    if (!(await Book.isValid(title, author_id))) return res.status(400).json({ message: 'Dados inválidos' });
  
    await Book.create(title, author_id);
  
    res.status(201).json({message: 'Livro criado com sucesso!'});
  } catch (error) {
    next(error);
  }
});

module.exports = route;