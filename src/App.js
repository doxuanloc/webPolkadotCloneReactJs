import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Technology from "./pages/Technology";
import Home from "./pages/Home";
import Community from "./pages/Community";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Build from "./pages/Build";
import Blog from "./pages/Blog";
import Parachains from "./pages/Parachains";
import DotToken from "./pages/DotToken";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/build" element={<Build />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/parachains" element={<Parachains />} />
          <Route path="/dot-token" element={<DotToken />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
