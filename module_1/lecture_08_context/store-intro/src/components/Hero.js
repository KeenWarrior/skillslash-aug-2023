import { useSelector } from "react-redux";

function Hero() {
  const counter = useSelector((state) => state.counter);

  console.log("Hero rendered");

  return (
    <div className="hero">
      <h1>Hero</h1>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default Hero;
