import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p> <p>You clicked {count} times</p>{" "}
      <p>You clicked {count} times</p> <p>You clicked {count} times</p>{" "}
      <p>You clicked {count} times</p> <p>You clicked {count} times</p>{" "}
      <p>You clicked {count} times</p>
    </div>
  );
}

export default App;
