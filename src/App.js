import "./App.css";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import "./styles/fonts.css";
import "./styles/text.css";

function App() {
  return (
    <div className='App'>
      <div className="main-container">
        <About />
        <Projects />
        <Contact />
      </div>
      
    </div>
  );
}

export default App;