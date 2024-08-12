import NavBar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Skills from "./components/Skills/skill";
import Works from "./components/Works/work";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
      <Works></Works>
    </div>
  );
}

export default App;
