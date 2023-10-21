import { useSelector } from "react-redux";

function Hero() {
  const counter = useSelector((state) => state);

  console.log("Hero rendered");

  return (
    <div className="hero">
      <h1>Hero</h1>
      <p>
        Counter: {counter}
        {counter === 1 ? "ball" : "balls"}
      </p>
    </div>
  );
}

export default Hero;
