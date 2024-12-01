const express = require("express");
const bookController = require("../controllers/bookController");
const router = express.Router();

router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getBooksById);
router.post("/books", bookController.addBooks);
// router.put("/books/:id", bookController.updateBooks);
// router.delete("/books/:id", bookController.deleteBooks);
// router.delete("/books/all", bookController.deleteAllBooks);

module.exports = router;
