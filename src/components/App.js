import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Resume from "./Resume";
import Footer from "./Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
