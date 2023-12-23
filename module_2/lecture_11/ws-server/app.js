const express = require("express");
const cors = require("cors");
const app = express();
const {usernames} = require("./utils/sockio");

const Message = require("./models/message.model");

app.use(cors());

app.get("/messages", (req, res) => {
  Message.find().then((messages) => {
    res.json(messages);
  });
});

app.get("/users", (req, res) => {
  res.json(Array.from(usernames));
});

module.exports = app;
