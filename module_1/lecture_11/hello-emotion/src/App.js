import "./App.css";
import styled from "@emotion/styled";

const RootDiv = styled("div")(({ theme }) => ({
  [theme.breakpoints.md]: {
    backgroundColor: "blue",
  },
  [theme.breakpoints.lg]: {
    backgroundColor: "red",
  },
}));

function App() {
  return (
    <RootDiv>
      <h1>Hello React</h1>
    </RootDiv>
  );
}

export default App;
