import React from "react";
import accordion from "../images/accordion.png";
import arrowRight from "../images/arrow-right.png";
import "../css/accordion.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Accordion = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="serve">
        <h3>Our Services</h3>
        <p>
          Stand out with cutting-edge strategies and solutions.  It's more about
          you and less about others.
        </p>
      </div>
      <div className="acc" id="service">
        <div className="accordion" id="accordionExample">
          <div className=" acc-body">
            <h2 className="accordion-header">
              <button
                className="accordion-button acc-but"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Software Development 01
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body acc-bod">
                <img src={accordion} alt="" className="acc-pix" />
                <p>
                  Deliver tomorrow's solutions today with seamless software
                  experiences that captivate users.
                </p>
                <button className="acc-bod-but">
                  <a href="/service" className="nav-link">
                    Learn More <img src={arrowRight} alt="" />
                  </a>
                  {/* <Link to="/service" className="nav-link" href="#">
                    Learn More <img src={arrowRight} alt="" />
                  </Link> */}
                </button>
              </div>
            </div>
          </div>
          <div className="acc-body">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed acc-but"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Branding and Design 02
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body acc-bod">
                <img src={accordion} alt="" className="acc-pix" />
                <p>Stand out – your brand deserves the spotlight.</p>
                <button className="acc-bod-but">
                  <a href="/branding" className="nav-link">
                    Learn More <img src={arrowRight} alt="" />
                  </a>
                  {/* <p onClick={() => navigate("/design")}>Learn More</p>
                  <Link to="/design" className="nav-link">
                    Learn More <img src={arrowRight} alt="" />
                  </Link> */}
                </button>
              </div>
            </div>
          </div>
          <div className="acc-body">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed acc-but"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Digital Marketing 03
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body acc-bod">
                <img src={accordion} alt="" className="acc-pix" />
                <p>
                  Become the industry HOT SHOT and the brand everyone loves.
                </p>
                <button className="acc-bod-but">
                  <a href="/digital" className="nav-link">
                    Learn More <img src={arrowRight} alt="" />
                  </a>
                  {/* <Link to="/" className="nav-link" href="#">
                    Learn More <img src={arrowRight} alt="" />
                  </Link> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
