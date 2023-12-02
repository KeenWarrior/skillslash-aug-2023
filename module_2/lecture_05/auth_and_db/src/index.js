const app = require("./app");
const config = require("./config/config");
const mongoose = require("mongoose");

mongoose.connect(config.mongo.uri).then(() => {
  if (mongoose.connection.readyState == 1) {
    console.log("Connected to MongoDB");
    app.listen(config.port, () => {
      console.log(`App running on port ${config.port}.`);
    });
  }
});
