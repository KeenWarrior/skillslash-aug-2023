const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from SkillSlash");
});

app.get("/about", (req, res) => {
  res.send("About us");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(5000, () => {
  console.log("Node server created at port 5000");
});
