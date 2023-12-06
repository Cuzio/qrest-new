import React from "react";
import logo from "../images/logo.png";
import "../css/aboutUs.css";
import { GoDiamond } from "react-icons/go";

const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <div className="about-us">
          <div className="about-us-left">
            <h5>About Us</h5>
            <p>Our Values</p>
            <p>Team Members</p>
          </div>

          <div className="about-us-middle">
            <button className="about-us-middle-button">About Us</button>
            <h3>More about Qrest </h3>
            <p>
              Create stunning, professional-quality websites in record time with
              our powerful UI kit. Elevate your SAAS game today! Limelight
              provides you with powerful growth solutions and it enables you to
              Craft exceptional, top-notch websites swiftly using our robust UI
              toolkit. Create stunning, professional-quality websites in record
              time with our powerful UI kit. Elevate your SAAS game today!
              Limelight provides you with powerful growth solutions and it
              enables you to Craft exceptional, top-notch websites swiftly using
              our robust UI toolkit.
            </p>
            <p>
              Qrest provides you with powerful growth solutions and it enables
              you to Craft exceptional, top-notch websites swiftly using our
              robust UI toolkit.
            </p>

            <h4>Scaling the Businesses</h4>
            <p>
              Qrest provides you with powerful growth solutions and it enables
              you to Craft exceptional, top-notch websites swiftly using our
              robust UI toolkit.
            </p>

            <div className="frames">
              <div className="frame-first">
                <div className="d-flex first-frame">
                  <img src={logo} alt="" className="frame-logo frame-logo1" />
                  <h1>Framer</h1>
                </div>
                <div className="frame-first-text">
                  <h2>48X</h2>
                  <p>Limelight provides you with powerful growth.</p>
                </div>
              </div>

              <div className="frame-second">
                <div className="d-flex second-frame">
                  <img src={logo} alt="" className="frame-logo frame-logo2" />
                  <h1>Framer</h1>
                </div>
                <div className="frame-second-text">
                  <h2>86%</h2>
                  <p>
                    It enables you to craft exceptional, top-notch websites.
                  </p>
                </div>
              </div>

              <div className="frame-third">
                <div className="d-flex third-frame">
                  <img src={logo} alt="" className="frame-logo frame-logo3" />
                  <h1>Framer</h1>
                </div>
                <div className="frame-third-text">
                  <h2>20X</h2>
                  <p>Limelight provides you with powerful growth solutions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-us-right">
            <div></div>
          </div>
        </div>
      </div>

      <marquee behavior="" direction="" className="about-marquee">
        UI/UX Design <GoDiamond className="m-2" /> Development{" "}
        <GoDiamond className="m-2" /> UI Amination <GoDiamond className="m-2" />{" "}
        Branding Design <GoDiamond className="m-2" />
        UI/UX Design <GoDiamond className="m-2" /> Development{" "}
        <GoDiamond className="m-2" /> UI Amination <GoDiamond className="m-2" />{" "}
        Branding Design <GoDiamond className="m-2" /> UI/UX Design{" "}
        <GoDiamond className="m-2" /> Development <GoDiamond className="m-2" />{" "}
        UI Amination <GoDiamond className="m-2" /> Branding Design{" "}
        <GoDiamond className="m-2" />
        UI/UX Design <GoDiamond className="m-2" /> Development{" "}
        <GoDiamond className="m-2" /> UI Amination <GoDiamond className="m-2" />{" "}
        Branding Design
      </marquee>
    </div>
  );
};

export default AboutUs;
