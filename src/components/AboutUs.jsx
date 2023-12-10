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
              Qrest is a user-centric business solution provider that delivers
              fast and efficient solutions, including branding, custom software
              development [ mobile apps & websites ], and digital marketing
              strategies, to help businesses achieve their goals. while also
              creating digital products that make life easier for Nigerians and
              beyond.
            </p>
            <p>
              Qrest provides you with powerful growth solutions and Qrest
              company is the powerhouse of digital solutions 🎯
            </p>

            <h4>Scaling the Businesses</h4>
            <p>
              At Qrest, our mission is to provide you with top-notch branding,
              design, and development services for mobile apps and websites. We
              also specialize in digital marketing strategies that will help
              your brand soar in the digital landscape.
            </p>

            <div className="frames">
              <div className="frame-first">
                <div className="d-flex first-frame">
                  <img src={logo} alt="" className="frame-logo frame-logo1" />
                  <h1>Qrest</h1>
                </div>
                <div className="frame-first-text">
                  <h2>100X</h2>
                  <p>We provide you brand with powerful growth.</p>
                </div>
              </div>

              <div className="frame-second">
                <div className="d-flex second-frame">
                  <img src={logo} alt="" className="frame-logo frame-logo2" />
                  <h1>Qrest</h1>
                </div>
                <div className="frame-second-text">
                  <h2>100%</h2>
                  <p>
                    We value customer sactisfaction and offer top-notch quality
                    work
                  </p>
                </div>
              </div>

              <div className="frame-third">
                <div className="d-flex third-frame">
                  <img src={logo} alt="" className="frame-logo frame-logo3" />
                  <h1>Qrest</h1>
                </div>
                <div className="frame-third-text">
                  <h2>1X</h2>
                  <p>
                    Consistent daily progress, we steadily elevate our skills,
                    processes, and outcomes.{" "}
                  </p>
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
