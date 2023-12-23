const socketio = require("socket.io");
const express = require("express");
const { set } = require("mongoose");

const app = express();

const usernames = new Set();

const server = app.listen(8000, () => console.log("Listening on port 8000"));

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
  console.log("got connection on socket", socket.id);

  setInterval(() => {
    socket.emit("time", { time: new Date().toJSON() });
  }, 1000);

  socket.on("disconnect", () => {
    console.log("socket disconnected", socket.id);
  });

  socket.on("message", (data) => {
    console.log("got message", socket.username, data);
    io.to("broadcast").emit("message", {
      username: socket.username,
      text: data,
    });
  });
});
