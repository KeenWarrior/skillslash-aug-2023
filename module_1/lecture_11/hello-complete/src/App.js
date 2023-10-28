import logo from "./logo.svg";
import "./App.css";
import { styled } from "@mui/material";

const RootDiv = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor: "red",
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: "blue",
  },
}));

function App() {
  return (
    <RootDiv>
      <h1>Hello Styling</h1>
    </RootDiv>
  );
}

export default App;
