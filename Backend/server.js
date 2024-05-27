const express = require("express");

const app = express();

app("/", (res, req) => {
  res.send("hiii me ");
});

app.listen(5000, console.log("hioii"));
