import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}

export default AboutPage;