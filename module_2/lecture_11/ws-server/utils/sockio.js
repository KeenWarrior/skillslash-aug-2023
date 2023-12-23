const socketio = require("socket.io");
const Message = require("../models/message.model");

const usernames = new Set();

function initSocket(server) {
  const io = socketio(server, {
    cors: {
      origin: "*",
    },
  });

  io.use((socket, next) => {
    const username = socket.handshake.auth.username;
    if (usernames.has(username)) {
      return next(new Error("Username already taken"));
    }
    usernames.add(username);
    socket.username = username;
    socket.join("broadcast");
    next();
  });

  io.on("connection", (socket) => {
    io.to("broadcast").emit("message", {
      username: "system",
      user: socket.username,
      event: "join",
      text: socket.username + " has entered the chat",
    });

    socket.on("message", (data) => {
      const message = new Message({
        username: socket.username,
        text: data,
        time: new Date(),
      });
      message.save();

      io.to("broadcast").emit("message", {
        username: socket.username,
        text: data,
      });
    });

    socket.on("disconnect", () => {
      usernames.delete(socket.username);
      io.to("broadcast").emit("message", {
        username: "system",
        user: socket.username,
        event: "left",
        text: socket.username + " has left the chat",
      });
    });
  });
}

module.exports = {
    initSocket,
    usernames
};
