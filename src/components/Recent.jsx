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
          <a href="/project" className="nav-link">
            QwikServe - UI/UX & Development<figure class=" balls"></figure>
          </a>
          {/* <Link to="/project" className="nav-link" href="/project">
            Qwiserve - UI/UX Design<figure class="ball"></figure>
          </Link> */}
        </button>
        <button class="recent" type="button" style={{ textAlign: "left" }}>
          <a href="/catapult" className="nav-link">
            Catapult - Brand Design<figure class="ball"></figure>
          </a>
          {/* <Link to="/" className="nav-link" href="#">
            Catapult - Brand Design<figure class="ball"></figure>
          </Link> */}
        </button>
      </div>
    </div>
  );
};

export default Recent;
