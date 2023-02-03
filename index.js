const { log } = require("console");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => {
  log("port started at 5000");
});
