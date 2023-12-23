
const {initSocket} = require("./utils/sockio");
const mongoose = require("mongoose");
const app = require("./app");

mongoose.connect("mongodb://localhost:27017/chat").then(() => {
  console.log("Connected to mongodb");

  const server = app.listen(8000, () => console.log("Listening on port 8000"));
  initSocket(server);
});
