import logo from "./logo.svg";
import "./App.css";
import ButtonAppBar from "./ButtonAppBar";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import MediaCard from "./MediaCard";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexFlow: 1,
          flexWrap: "wrap",
          gap: 20,
          padding: 20,
        }}
      >
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
