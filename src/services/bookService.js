const { create } = require("domain");
const db = require("../database");

class BookServices {
  getAllBooks() {
    return db;
  }

  getBooksById(id) {
    const book = db.find((book) => book.id == id);
    return book;
  }

  addBooks(title, author) {
    const now = new Date();
    const lastId = db[db.length - 1]?.id || 0;
    const id = lastId + 1;
    const newBook = {
      id,
      title,
      author,
      createdAt: now,
      updateAt: now,
    };
    db.push(newBook);
    const book = db.find((book) => book.id == id);
    return book;
  }
}

module.exports = new BookServices();
