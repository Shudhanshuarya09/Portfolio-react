import NavBar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Skills from "./components/Skills/skill";
import Works from "./components/Works/work";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
      <Works></Works>
      <Contact></Contact>
    </div>
  );
}

export default App;
