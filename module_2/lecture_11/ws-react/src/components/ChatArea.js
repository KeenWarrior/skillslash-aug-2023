import { Message } from "@mui/icons-material";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

export default function ChatArea() {
  return (
    <div style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        flexGrow: 1,
    }}>
      <Messages />
      <MessageInput />
    </div>
  );
}

