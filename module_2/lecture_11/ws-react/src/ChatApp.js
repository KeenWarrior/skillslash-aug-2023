import { Box, Button, TextField } from "@mui/material";
import { SocketContext } from "./App";
import { useContext, useState } from "react";
import socketioclient from "socket.io-client";
import ConnectComponent from "./components/ConnectComponent";
import ChatArea from "./components/ChatArea";

export default function ChatApp() {
  const { socket } = useContext(SocketContext);
  return (
    <div style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
    }}>
      <h1>Chat App</h1>
      {socket ? <ChatArea/> : <ConnectComponent />}
    </div>
  );
}
