import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { SocketContext } from "../App";

export default function MessageInput() {
  const { socket } = useContext(SocketContext);
  const [text, setText] = useState("");

  const sendMessage = () => {
    socket.emit("message", text);
    setText("");
  };
  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100px",
        alignItems: "center",
      }}
    >
      <TextField
        style={{
          flexGrow: 1,
          height: "80px",
        }}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <Button
        style={{
          height: "80px",
        }}
        onClick={sendMessage}
      >
        Send
      </Button>
    </div>
  );
}
