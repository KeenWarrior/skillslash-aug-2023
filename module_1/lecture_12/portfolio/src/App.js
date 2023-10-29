import logo from "./logo.svg";
import "./App.css";
import TopAppBar from "./components/TopAppBar";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <>
      <TopAppBar />
      <AboutMe />
      <Services />
      <Portfolio />
    </>
  );
}

export default App;
