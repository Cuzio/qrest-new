import React from "react";
import servicePix from "../images/service-pix.png";
import "../css/design.css";
import drawing from "../images/drawing.png";
import bigLogo from "../images/big-logo.png";

const Design = () => {
  return (
    <div className="container">
      <div>
        <div className="design" id="d">
          <h1>UI/UX Design</h1>
          <div className="design-intro">
            <div className="design-service-intro">
              <img src={servicePix} alt="" className="design-service-pix" />
            </div>

            <div>
              <div className="design-service-user">
                User sign-up and login functionality with email verification
              </div>
              <div className="design-service-subscription">
                Subscription plans and pricing display
              </div>
              <div className="design-service-personlized">
                Personlized user dashboard displaying relevant information.
              </div>
              <div className="design-service-graph">
                Graphs, Charts and data visualization
              </div>
              <div className="design-service-third">
                Third-party integration options (e.g CRM, payment systems)
              </div>
            </div>
          </div>
        </div>
        <div className="design-section2">
          <div className="design-approach">
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
            <img src={drawing} alt="" className="design-drawing" />
          </div>
          <div>
            <img src={bigLogo} alt="" className="design-bigLogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
