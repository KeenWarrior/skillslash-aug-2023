import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import { createContext } from "react";

export const CounterContext = createContext();

function App() {
  const [counter, setCounter] = useState(0);

  const handleButtonClick = function () {
    setCounter(counter + 1);
  };

  console.log("App rendered");

  return (
    <div>
      <CounterContext.Provider value={counter}>
        <Header/>
        <button onClick={handleButtonClick}>Click me</button>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
