import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Book from '../interfaces/book.interface';
import BookService from "../services/books.service";

class BooksControler {
  public bookService: BookService;

  constructor() {
    this.bookService = new BookService();
  }

  public async getAll(_req: Request, res: Response) {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json(books);
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const book = await this.bookService.getById(parseInt(id,10));

    if (!book) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Book not found!' });

    res.status(StatusCodes.OK).json(book);
  }

  public async create(req: Request, res: Response) {
    const book = this.buildBookByParams(req.body);

    const createdBook = await this.bookService.create(book);

    res.status(StatusCodes.CREATED).json(createdBook);
  }

  private buildBookByParams(params: any): Book {
    const { title, author, price, isbn } = params;
    return { title, author, price, isbn } as Book;
  }

  public async update(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const book = this.buildBookByParams(req.body);
    
    await this.bookService.update(id, book);

    res.status(StatusCodes.NO_CONTENT).end();
  }

  public async remove(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await this.bookService.remove(id);

    res.status(StatusCodes.NO_CONTENT).end();

  }
}

export default BooksControler;