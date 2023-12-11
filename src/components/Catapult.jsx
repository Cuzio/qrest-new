import React from "react";
import cata1 from "../images/cata1.png";
import cata2 from "../images/cata2.png";
import bigLogo from "../images/big-logo.png";
import "../css/catapult.css";
import { Link } from "react-router-dom";

const Catapult = () => {
  return (
    <div className="container">
      <div className="catapult">
        <h1>Catapult - Branding</h1>
        <div className="project-catapult">
          <div>
            <img src={cata1} alt="" className="catapult-pix" />
          </div>
          <div className="catapult-project-details">
            <h4>Project Details</h4>
            <div className="d-flex justify-content-between mt-4">
              <h5>Client</h5>
              <p>.............</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Company</h5>
              <p>Catapult</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Services</h5>
              <p>Branding</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Duration</h5>
              <p>08 Mar - 16 Mar 2023</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Website Link</h5>
              <p>
                <a href="" target="_blanck" className="catapult-link">
                  ............
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="cata-low">
          <div className="cata-approach">
            <h3>Logo Design</h3>
            <p>
              We created a captivating and memorable logo for Catapult. The logo
              represents the essence and values of the brand, leaving a lasting
              impression on customers.
            </p>
            <h4>Brand Identity:</h4>
            <p>
              We worked on developing the overall brand identity for Catapult.
              This includes defining the brand's personality, tone of voice, and
              visual elements that create a cohesive and recognizable brand
              image.
            </p>
            <h4>Software Development:</h4>
            <p>Coming soon!!!</p>
            <img src={cata2} alt="" className="cata2" />
          </div>
          <div>
            <img src={bigLogo} alt="" className="cata-bigLogo" />
          </div>
        </div>
      </div>

      <div className="cata-recent-project">
        <h3>Recent Projects</h3>
      </div>
      <div class="d-grid gap-2 cata-recent-div">
        <button class="cata-recent" type="button" style={{ textAlign: "left" }}>
          <a href="/project" className="nav-link">
            Qwiserve - UI/UX Design<figure class="ball"></figure>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Catapult;
