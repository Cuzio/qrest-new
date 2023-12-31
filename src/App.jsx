import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Service from "./pages/Service";
import "./app.css";
import Footer from "./components/Footer";
import Aboutpage from "./pages/Aboutpage";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Design from "./components/Design";
import Branding from "./components/Branding";
import Digital from "./components/Digital";
import Catapult from "./components/Catapult";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutpage" element={<Aboutpage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/design" element={<Design />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/catapult" element={<Catapult />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
