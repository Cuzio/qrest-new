import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="first-footer">
        <div className="locate">
          <h5>Get started</h5>
          <div className="locate-link">
            <a href="/#service" className="foot">
              Our Services
            </a>
            <a href="/#project" className="foot">
              Recent Projects
            </a>
            <a href="/#blog" className="foot">
              Recent Blogs
            </a>
          </div>
          {/* <p>Our Services</p>
          <p>Recent Projects</p>
          <p>Recent Blogs</p> */}
        </div>

        <div className="navigate">
          <div className="navigation">
            <h5>Navigation</h5>
            <div className="foot-link">
              <a href="/#service" className="foot">
                Service
              </a>
              <a href="/#project" className="foot">
                Project
              </a>
              <a href="/aboutpage" className="foot">
                About
              </a>
              {/* <p onClick={() => navigate("/service")}>Service</p> */}
              {/* <Link to="/service" className="foot" href="#">
                Service
              </Link> */}
              {/* <Link to="/project" className="foot" href="#">
                Project
              </Link> */}
              {/* <Link to="/aboutpage" className="foot" href="#">
                About
              </Link> */}
            </div>
          </div>

          <div className="navigation">
            <h5>Navigation</h5>
            <a href="/contact" className="foot">
              Let’s talk
            </a>
            {/* <Link to="/contact" className="foot" href="#">
              Let’s talk
            </Link> */}
          </div>

          <div className="navigation">
            <h5>Utility</h5>
            <p>Terms and Conditions</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>

      <div className="second-footer">
        <h5>Disclaimer:</h5>
        <p>Limelight Framer Template © 2023</p>
        <p>
          The content in this template is entirely fictitious and for
          demonstration purposes only. It is crucial to understand that all the
          information provided here is purely fictional and does not represent
          real events, individuals, entities, or circumstances. This content is
          not based on any actual data, facts, or situations, and any
          resemblance to reality is entirely coincidental. It does not offer any
          real-world advice or information and should not be used as such.{" "}
        </p>
        <p>
          This template is intended for educational and re-editing purposes
          only, and it's data and content should not be relied upon for making
          any real-life decisions. By accessing or using this template, you
          acknowledge and agree to these disclaimers. Your reliance on this
          content is at your own risk.
        </p>
        <hr />
      </div>
      <div className="socials">
        <div className="social">
          <Link to="/" className="connect" href="#">
            <img src={twitter} alt="Logo" className="social-logo" />
          </Link>
          <Link to="/" className="connect" href="#">
            <img src={facebook} alt="Logo" className="social-logo" />
          </Link>
          <Link to="/" className="connect" href="#">
            <img src={linkedin} alt="Logo" className="social-logo" />
          </Link>
          <Link to="/" className="connect" href="#">
            <img src={instagram} alt="Logo" className="social-logo" />
          </Link>
        </div>
        <div className="desgin">
          <p>Designed by Hassan</p>
          <p>Powered by Framer</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
