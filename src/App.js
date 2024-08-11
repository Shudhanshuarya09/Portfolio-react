import NavBar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Skills from "./components/Skills/skill";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>

      <About></About>
      <Skills></Skills>
    </div>
  );
}

export default App;
