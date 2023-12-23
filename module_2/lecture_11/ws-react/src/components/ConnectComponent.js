import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import socketioclient from "socket.io-client";
import { SocketContext } from "../App";

export default function ConnectComponent() {
  const { setSocket } = useContext(SocketContext);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const createSocket = () => {
    const socketRequest = socketioclient("http://localhost:8000", {
      auth: { username },
    });

    socketRequest.on("connect", () => {
      console.log("Connected to socket server");
      setSocket(socketRequest);
    });

    socketRequest.on("disconnect", () => {
      console.log("Disconnected from socket server");
      setSocket(null);
    });

    socketRequest.on("connect_error", (err) => {
      console.log("Connection error", err);
      setError(err.message);
    });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" color="primary" onClick={createSocket}>
          Connect
        </Button>
      </Box>
    </>
  );
}
