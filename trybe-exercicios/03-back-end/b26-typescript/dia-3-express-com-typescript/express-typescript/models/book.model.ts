import { Pool, ResultSetHeader } from 'mysql2/promise';
import Book from '../interfaces/book.interface';

export default class BookModel {
  constructor(private connection: Pool) {}

  public async getAll(): Promise<Book[]> {
    const [result] = await this.connection.execute('SELECT * FROM books');
    return result as Book[];
  }

  public async getById(id: number): Promise<Book> {
    const [result] = await this.connection.execute('SELECT * FROM books WHERE id = ?', [id]);
    const [book] = result as Book[];
    return book;
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn],
    );
    return { id: insertId, ...book };
  }

  public async update(id: number, book: Book) {
    const { title, price, author, isbn } = book;
    await this.connection.execute(
      'UPDATE books SET title=?, price=?, author=?, isbn=? WHERE id=?',
      [title, price, author, isbn, id]
    );
  }

  public async remove(id: number) {
    const result = await this.connection.execute(
      'DELETE FROM books WHERE id=?',
      [id]
    );
    return result;
  }
}