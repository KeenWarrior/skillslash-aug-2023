import React from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

console.log(root);

function App() {
  return <h1>Hello, world!</h1>;
}

root.render(<App />);
