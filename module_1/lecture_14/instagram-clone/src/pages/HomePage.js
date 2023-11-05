import Post from "../components/Post";
import samplePost from "../data/samplePost";

export default function HomePage() {
  return (
    <>
      <h1>Home page</h1>
      <Post post={samplePost} />
    </>
  );
}
