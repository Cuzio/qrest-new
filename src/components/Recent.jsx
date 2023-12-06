import React from "react";
import "../css/recent.css";
import { Link } from "react-router-dom";

const Recent = () => {
  return (
    <div className="container recent-container">
      <div className="recent-project" id="project">
        <h3>Recent Projects</h3>
      </div>
      <div class="d-grid gap-2 recent-div">
        {/* <div class="stage">
          <figure class="ball"></figure>
        </div> */}
        <button class="recent" type="button" style={{ textAlign: "left" }}>
          <Link to="/project" className="nav-link" href="#">
            Qwiserve - UI/UX Design<figure class="ball"></figure>
          </Link>
        </button>
        <button class="recent" type="button" style={{ textAlign: "left" }}>
          <Link to="/" className="nav-link" href="#">
            Catapult -UI/UX Design<figure class="ball"></figure>
          </Link>
        </button>
        <button class="recent" type="button" style={{ textAlign: "left" }}>
          <Link to="/" className="nav-link" href="#">
            Catapult - Brand Design<figure class="ball"></figure>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Recent;
