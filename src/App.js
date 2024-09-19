import NavBar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Skills from "./components/Skills/skill";
import Works from "./components/Works/work";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Techs from "./components/Techs/techs";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
      <Techs></Techs>
      <Works></Works>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
