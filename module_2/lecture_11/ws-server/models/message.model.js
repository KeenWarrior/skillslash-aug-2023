const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
