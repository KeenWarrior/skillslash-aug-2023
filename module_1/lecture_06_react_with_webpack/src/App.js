import React from "react";

function App() {
    let [count, setCount] = React.useState(1);
    console.log("Count now is "+ count);
    
    console.log("Rerendered");

    const handleClick = function() {
        setCount(count + 1);
    }

    return <div>
        <h1>Hello, world!</h1>
        <h2>Count: {count}</h2>
        <h2>Count: {count * 2}</h2>
        <h2>Count: {count * 3}</h2>
        <h2>Count: {count * 4}</h2>
        <h2>Count: {count * 5}</h2>
        <h2>Count: {count * 6}</h2>
        <h2>Count: {count * 7}</h2>
        <h2>Count: {count * 8}</h2>
        <h2>Count: {count * 9}</h2>
        <h2>Count: {count * 10}</h2>
        <button onClick={handleClick}>Click me</button>
    </div>;
}

export default App;