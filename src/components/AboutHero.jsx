import React from "react";
import arrowRight from "../images/arrow-right.png";
import "../css/abouthero.css";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <div className="container">
      <div className="abouthero">
        <div className="about-intro">
          <h3>Empowering saas with</h3>
          <h3>cutting edge technology</h3>
          <p className="create">
            Create stunning, professional-quality websites in record time with
            our powerful UI kit. Elevate your SAAS game today!
          </p>
          <p className="about-qrest">
            Qrest provides you with powerful growth solutions and it enables you
            to Craft exceptional, top-notch websites swiftly using our robust UI
            toolkit.
          </p>
          <button className="about-button">
            <Link to="/contact" className="nav-link" href="#">
              Let’s talk <img src={arrowRight} alt="" />
            </Link>
          </button>
        </div>

        <div>
          <div className="user">
            User sign-up and login functionality with email verification
          </div>
          <div className="subscription">
            Subscription plans and pricing display
          </div>
          <div className="personlized">
            Personlized user dashboard displaying relevant information.
          </div>
          <div className="graph">Graphs, Charts and data visualization</div>
          <div className="third">
            Third-party integration options (e.g CRM, payment systems)
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
