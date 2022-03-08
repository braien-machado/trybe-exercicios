const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { title, pageQuantity, author } = req.body;
    const book = await Book.create({ title, author, pageQuantity });

    return res.status(201).json(book);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, pageQuantity, author } = req.body;
    const [updateBook] = await Book.update({ title, author, pageQuantity }, {
      where: { id },
    });

    if (!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso' });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy({ where: { id } });

    console.log(deleteBook);

    if (!deleteBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro excluído com sucesso' });
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  console.log(err.message);
  return res.status(500).json({ message: 'Algo deu errado' });
});

module.exports = router;