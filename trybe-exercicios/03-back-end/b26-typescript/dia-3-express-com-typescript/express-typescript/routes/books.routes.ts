import { Router, Request, Response } from 'express';
import BooksControler from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

const router = Router();

const booksController = new BooksControler();

router.get('/books', async (req: Request, res: Response ) => await booksController.getAll(req, res));
router.get('/books/:id', async (req: Request, res: Response ) => await booksController.getById(req, res));
router.post('/books', validationBook, async (req: Request, res: Response ) => (booksController.create(req, res)));
router.put('/books/:id', validationBook, async (req: Request, res: Response ) => booksController.update(req, res));
router.delete('/books/:id',  async (req: Request, res: Response ) => booksController.remove(req, res));

export default router;