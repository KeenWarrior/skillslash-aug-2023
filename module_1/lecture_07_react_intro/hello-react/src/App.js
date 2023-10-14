import React from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = function () {
    setCount(count + 1);
  };

  console.log("App render");

  return (
    <div className="homeContainer">
      <p>{count}</p>
      <p>{count}</p>
      <p>{count}</p>
      <p>{count}</p>
      <p>{count}</p>
      <p>{count}</p>
      <p>{count}</p>
      <p>{count}</p>
      <p>{count}</p>
      <p>{count}</p>
      <button className="click" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default App;
