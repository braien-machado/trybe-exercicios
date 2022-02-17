const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM books');

  return books;
};

const getByAuthorId = async (id) => {
  const query = 'SELECT * FROM books WHERE author_id = ?'
  const [books] = await connection.execute(query, [id]);

  return books;
};

const findById = async (id) => {
  const query = 'SELECT * FROM books WHERE id = ?';
  const [bookData] = await connection.execute(query, [id]);

  if (bookData.length === 0) {
    return null;
  }

  return bookData;
};

const isValid = async (title, author_id) => {
  if (!title || title.length < 3 || typeof title !== 'string') return false;

  if (!author_id || (await getByAuthorId(author_id)).length === 0) return false;

  return true;
}

const create = async (title, author_id) => {
  const query = 'INSERT INTO books (title, author_id) VALUES (?, ?)';
  connection.execute(query, [title, author_id]);
}

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create,
}