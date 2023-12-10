import React from "react";
import arrowRight from "../images/arrow-right.png";
import "../css/abouthero.css";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <div className="container">
      <div className="abouthero">
        <div className="about-intro">
          <h3>Stand out with cutting-edge </h3>
          <h3>strategies and solutions.</h3>
          <p className="create">
            Create stunning, professional-quality Branding, Mobile Apps,
            Websites and Digital Marketing!
          </p>
          <p className="about-qrest">
            Qrest is a combination of two-factor elements that drive our brand
            values and services. Q- Quick, and crest which signifies being at
            the top. So we are quick in providing solutions that put businesses
            at the top of the competition.
          </p>
          <button className="about-button">
            <Link to="/contact" className="nav-link" href="#">
              Let’s talk <img src={arrowRight} alt="" />
            </Link>
          </button>
        </div>

        <div>
          <div className="user">We're obsessed with brand satisfaction.</div>
          <div className="subscription">
            We create easy to use mobile apps & websites
          </div>
          <div className="personlized">
            We create marketing strategies tailored to your brand.
          </div>
          <div className="graph">
            We're flexible and we think out of the box!
          </div>
          <div className="third">
            Stand out with cutting-edge strategies and solutions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
