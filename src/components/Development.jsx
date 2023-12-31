import React from "react";
import accordion from "../images/accordion.png";
import "../css/development.css";
import drawing from "../images/drawing.png";
import bigLogo from "../images/big-logo.png";
import Have from "./Have";
import Whatsapp from "./Whatsapp";

const Development = () => {
  return (
    <div className="container development-container">
      <div className="development">
        <h1>Software Development</h1>
        <div className="development-intro">
          <div className="service-intro">
            <img src={accordion} alt="" className="service-pix" />
          </div>

          <div className="all">
            <div className="service-user">
              Customized solutions tailored specifically to your business needs
            </div>
            <div className="service-subscription">
              High quality and reliable software, thoroughly tested for bugs and
              issues
            </div>
            <div className="service-personlized">
              Exceptional user experience with intuitive and visually appealing
              interfaces.
            </div>
            <div className="service-graph">
              Timely delivery, ensuring projects are completed on schedule
            </div>
            <div className="service-third">
              Ongoing support and maintenance to keep your software up-to-date
              and secure
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="approach">
          <h3>Software Development Services</h3>
          <p>
            Deliver tomorrow's solutions today with seamless software
            experiences that captivate users. We create visually appealing and
            intuitive interfaces to enhance user experience and seamlessly solve
            problems.
          </p>
          <h4>Services:</h4>
          <p>- Custom Software Development </p>
          <p> - Mobile App Development</p>
          <p> - Web Development </p>
          <p> - UI/UX Design </p>
          <p> - E-commerce Solutions </p>
          <p>- Cloud-Based Solutions </p>
          <p>- Software Testing and Quality Assurance </p>
          <p>- Maintenance and Support</p>

          <h4>
            At Qrest, we follow a comprehensive approach to ensure successful
            software development. Here's a breakdown of our process:
          </h4>
          <p>
            1. Understanding Requirements: We start by thoroughly understanding
            your project requirements, goals, and target audience.
          </p>
          <p>
            2. Planning and Design: Our team works closely with you to create a
            solid plan and design the user interface (UI) and user experience
            (UX) for your software. We focus on creating intuitive and visually
            appealing designs.
          </p>
          <p>
            3. Development: Once the design is finalized, our skilled developers
            start building the software, whether it's a mobile app or a website.
            We use modern technologies and frameworks to ensure high-quality and
            efficient development.
          </p>
          <p>
            4. Testing and Quality Assurance: We conduct rigorous testing to
            identify and fix any bugs or issues. Our QA team ensures that the
            software meets all functional and performance requirements.
          </p>
          <p>
            5. Deployment and Launch: After thorough testing and client
            approval, we deploy the software to the desired platform, whether
            it's the App Store, Google Play Store, or a web hosting service. We
            assist with the launch process to ensure a smooth release.
          </p>
          <p>
            6. Maintenance and Support: Our relationship doesn't end after the
            launch. We provide ongoing maintenance and support to ensure your
            software remains up-to-date and runs smoothly. We're always here to
            address any issues or implement new features as needed.
          </p>
          {/* <img src={drawing} alt="" className="drawing" /> */}
        </div>
        <div>
          <img src={bigLogo} alt="" className="development-bigLogo" />
        </div>
      </div>
      <Have />
      <Whatsapp />
    </div>
  );
};

export default Development;
