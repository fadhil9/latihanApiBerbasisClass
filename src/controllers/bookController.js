const BookServices = require("../services/bookService");

class BookController {
  getAllBooks(req, res) {
    try {
      const allBooks = BookServices.getAllBooks();
      res
        .json({
          status: "succes",
          data: allBooks,
        })
        .status(200);
    } catch (error) {
      res
        .json({
          status: "fail",
          message: error.message,
        })
        .status(400);
    }
  }
  getBooksById(req, res) {
    const { id } = req.params;
    try {
      const bookById = BookServices.getBooksById(id);
      res
        .json({
          status: "succes",
          data: bookById,
        })
        .status(200);
    } catch (error) {
      res
        .json({
          status: "fail",
          message: error.message,
        })
        .status(400);
    }
  }
  addBooks(req, res) {
    const { title, author } = req.body;
    try {
      const bookAdded = BookServices.addBooks(title, author);
      res
        .json({
          status: "succes",
          data: bookAdded,
        })
        .status(200);
    } catch (error) {
      res
        .json({
          status: "fail",
          message: error.message,
        })
        .status(400);
    }
  }
}

module.exports = new BookController();
