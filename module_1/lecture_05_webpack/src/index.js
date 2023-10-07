import React from "react";
import ReactDOM from "react-dom";

const rootEle = document.getElementById("root");

const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <p>This is awesome</p>
      <p>Bingo</p>
    </div>
  );
};

const root = ReactDOM.createRoot(rootEle);
root.render(<App />);
