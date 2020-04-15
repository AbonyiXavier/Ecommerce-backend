const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const userInfo = require("./users");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Xavier page",
  });
});
app.get("/users", (req, res) => {
  res.status(200).json({
    userInfo,
    message: "View all users details",
  });
});

const PORT = process.env.PORT || 8060;

const server = app.listen(PORT, () => {
  console.log(`Server Started at Port : ${PORT}`);
});

module.exports = server;
