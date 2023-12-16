import React from "react";
import Hero from "../components/Hero";
import Recent from "../components/Recent";
import "../css/homepage.css";
import Feedback from "../components/Feedback";
import Blog from "../components/Blog";
import Have from "../components/Have";
import Accordion from "../components/Accordion";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Accordion />
      <Recent />
      <Feedback />
      {/* <Blog /> */}
      <Have />
    </div>
  );
};

export default Homepage;
