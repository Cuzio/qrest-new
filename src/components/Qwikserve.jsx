import React from "react";
import qwikserve from "../images/qwikserve.png";
import qwikops from "../images/qwikops.png";
import bigLogo from "../images/big-logo.png";
import "../css/qwikserve.css";
import { Link } from "react-router-dom";

const Qwikserve = () => {
  return (
    <div className="container">
      <div className="qwikserve">
        <h1>Qwikserve - UI/UX Design</h1>
        <div className="project-qwikserve">
          <div>
            <img src={qwikserve} alt="" className="qwikserve-pix" />
          </div>
          <div className="project-details">
            <h4>Project Details</h4>
            <div className="d-flex justify-content-between mt-4">
              <h5>Client</h5>
              <p>Ambrose Ebuka</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Company</h5>
              <p>Qwikserve</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Services</h5>
              <p>UI/UX & Development</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Duration</h5>
              <p>08 Mar - 10 Nov 2023</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Website Link</h5>
              <p>
                <a
                  href="https://www.pixelhunt.com"
                  target="_blanck"
                  className="qwikserke-link"
                >
                  www.pixelhunt.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="qwik-low">
          <div className="qwik-approach">
            <h3>How We Approach?</h3>
            <p>
              In our ever-increasingly digital environment, there is a constant
              need for websites— and therefore for web designers and developers.
              With 17.4 billion websites in existence as of January 2020, the
              demand for web developers is only expected to rise.Web designers
              with significant coding experience are typically in higher demand,
              and can usually expect a higher salary.
            </p>
            <h4>1. Research And Analysis:</h4>
            <p>
              In our ever-increasingly digital environment, there is a constant
              need for websites— and therefore for web designers and developers.
              With 17.4 billion websites in existence as of January 2020, the
              demand for web developers is only expected to rise.Web designers
              with significant coding experience are typically in higher demand,
              and can usually expect a higher salary. <br /> A career in website
              design can involve the design, creation, and coding of a range of
              website types. Other tasks will typically include liaising with
              clients and discussing website specs, incorporating feedback,
              working on graphic design and image editing, multimedia features
              such as audio and video.
            </p>
            <h4>2. Sketch And Visual Design:</h4>
            <p>
              * In our ever-increasingly digital environment, there is a
              constant need for websites and therefore for web designers and
              developers. With 17.4 billion websites in existence as of January
              2020, the demand for web developers is only expected.
            </p>
            <p>
              * A career in website design can involve the design, creation, and
              coding of a range of website types. Other tasks will typically
              include liaising with clients and discussing website specs,
              incorporating feedback, working on graphic design and image
              editing, multimedia features such as audio and video.
            </p>
            <img src={qwikops} alt="" className="qwikops" />
          </div>
          <div>
            <img src={bigLogo} alt="" className="qwik-bigLogo" />
          </div>
        </div>
      </div>

      <div className="qwik-recent-project">
        <h3>Recent Projects</h3>
      </div>
      <div class="d-grid gap-2 qwik-recent-div">
        <button class="qwik-recent" type="button" style={{ textAlign: "left" }}>
          <Link to="/" className="nav-link" href="#">
            Catapult -UI/UX Design<figure class="ball"></figure>
          </Link>
        </button>
        <button class="qwik-recent" type="button" style={{ textAlign: "left" }}>
          <Link to="/" className="nav-link" href="#">
            Catapult - Brand Design<figure class="ball"></figure>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Qwikserve;
