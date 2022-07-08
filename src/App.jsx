import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Main from "./components/Main/main";
import Projects from "./components/Projects/projects";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";

const App = () => {
  return (
    <div class="container">
      <Navbar/>
      <Main/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
};

export default App;
