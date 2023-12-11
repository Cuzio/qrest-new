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
        <h1>Qwikserve - Development</h1>
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
            <h3>Software Design and Development</h3>
            <p>
              We worked on designing the user interface and user experience for
              Qwikserve's customer app. We also developed the app, allowing
              customers to easily order food from different restaurants in Uyo
              for pickup or delivery. The app also offers customized delivery
              options for gas refills and laundry services.
            </p>
            <h4>Rider App:</h4>
            <p>
              We also developed a rider app for Qwikserve. This app allows
              riders to receive orders and ensure timely deliveries. It includes
              features to help riders keep track of necessary information and
              tasks.
            </p>
            <h4>Admin Panel:</h4>
            <p>
              We worked on an admin panel that controls the entire flow of
              operations from the customer to the rider. This panel ensures
              smooth operations and oversees every aspect of the process.
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
          <a href="/catapult" className="nav-link">
            Catapult - Brand Design<figure class="ball"></figure>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Qwikserve;
