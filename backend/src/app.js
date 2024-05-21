const express = require("express");
require("dotenv").config();

const routes = require("./routes");
const cookieParser = require("cookie-parser");
const connectDB = require("./api/database");

const app = express();

connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.use("*", (req, res) => {
  res.status(404).send("Not found");
});

module.exports = app;
