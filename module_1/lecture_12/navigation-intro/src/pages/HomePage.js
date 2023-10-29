import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <button>
        <Link to="/about">About</Link>
      </button>
    </div>
  );
}

export default HomePage;