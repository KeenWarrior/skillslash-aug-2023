import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../App";
import axios from "axios";
import { Typography } from "@mui/material";

export default function Messages() {
  const { socket } = useContext(SocketContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/messages").then((response) => {
      setMessages(response.data);
    });

    socket.on("message", (message) => {
      console.log(messages);
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  return (
    <div
      style={{
        flexGrow: 1,
        overflowY: "scroll",
      }}
    >
      {messages.map((message, index) => {
        const username = message.username;
        return (
          <div key={index}>
            <Typography
              style={{
                color: username === "system" ? "red" : "black",
              }}
            >
              {message.username}: {message.text}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}
