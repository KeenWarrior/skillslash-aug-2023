import { Message } from "@mui/icons-material";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SocketContext } from "../App";
import { List, ListItem, Typography } from "@mui/material";

export default function ChatArea() {
  const [users, setUsers] = useState([]);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    axios.get("http://localhost:8000/users").then((response) => {
      setUsers(response.data);
    });

    socket.on("message", (message) => {
      if (message.event === "join") {
        setUsers((users) => [...users, message.user]);
      } else if (message.event === "left") {
        setUsers((users) => users.filter((user) => user !== message.user));
      }
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "row",
        flexGrow: 1,
      }}
    >
      <div id="chatarea-left">
        <List style={{
            width: "200px",
        }}>
          {users.map((user, index) => {
            return (
              <ListItem key={index}>
                <Typography>{user}</Typography>
              </ListItem>
            );
          })}
        </List>
      </div>

      <div id="chatarea-right">
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
}
