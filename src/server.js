const express = require("express");
const app = express();
const env = require("dotenv");
const bodyParser = require("body-parser");
const bookRoute = require("./routes/bookRoute");
const cors = require("cors");

env.config();

const port = process.env.PORT || 8080;

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use(bookRoute);

//server
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
