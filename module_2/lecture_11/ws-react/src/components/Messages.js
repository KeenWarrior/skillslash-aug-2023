import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../App";

export default function Messages() {
  const { socket } = useContext(SocketContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
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
        return (
          <div key={index}>
            {message.username}: {message.text}
          </div>
        );
      })}
    </div>
  );
}
