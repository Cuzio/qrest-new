import React from "react";
import servicePix from "../images/service-pix.png";
import "../css/development.css";
import drawing from "../images/drawing.png";
import bigLogo from "../images/big-logo.png";

const Development = () => {
  return (
    <div className="container development-container">
      <div className="development">
        <h1>Development</h1>
        <div className="development-intro">
          <div className="service-intro">
            <img src={servicePix} alt="" className="service-pix" />
          </div>

          <div className="all">
            <div className="service-user">
              User sign-up and login functionality with email verification
            </div>
            <div className="service-subscription">
              Subscription plans and pricing display
            </div>
            <div className="service-personlized">
              Personlized user dashboard displaying relevant information.
            </div>
            <div className="service-graph">
              Graphs, Charts and data visualization
            </div>
            <div className="service-third">
              Third-party integration options (e.g CRM, payment systems)
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="approach">
          <h3>How We Approach?</h3>
          <p>
            In our ever-increasingly digital environment, there is a constant
            need for websites— and therefore for web designers and developers.
            With 17.4 billion websites in existence as of January 2020, the
            demand for web developers is only expected to rise.Web designers
            with significant coding experience are typically in higher demand,
            and can usually expect a higher salary.
          </p>
          <p>1. Research And Analysis:</p>
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
          <p>2. Sketch And Visual Design:</p>
          <p>
            * In our ever-increasingly digital environment, there is a constant
            need for websites and therefore for web designers and developers.
            With 17.4 billion websites in existence as of January 2020, the
            demand for web developers is only expected.
          </p>
          <p>
            * A career in website design can involve the design, creation, and
            coding of a range of website types. Other tasks will typically
            include liaising with clients and discussing website specs,
            incorporating feedback, working on graphic design and image editing,
            multimedia features such as audio and video.
          </p>
          <img src={drawing} alt="" className="drawing" />
        </div>
        <div>
          <img src={bigLogo} alt="" className="development-bigLogo" />
        </div>
      </div>
    </div>
  );
};

export default Development;
