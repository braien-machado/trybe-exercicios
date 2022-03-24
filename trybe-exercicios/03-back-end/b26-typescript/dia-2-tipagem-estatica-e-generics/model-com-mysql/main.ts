import connection from "./models/connection";
import BookModel from "./models/Book";
import { exit } from "process";

const main = async () => {
  const bookModel = new BookModel(connection);
  
  const books = await bookModel.getAll();
  console.log(books);
  exit();
};

main();