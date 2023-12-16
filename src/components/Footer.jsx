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
            {/* <a href="/#blog" className="foot">
              Recent Blogs
            </a> */}
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
        <p>Qrest Software Development Company © 2023</p>
        <p>
          Qrest is committed to delivering exceptional solutions tailored to
          meet the needs of businesses. While we strive to provide effective
          results, it's important to note that individual outcomes may vary
          based on various factors. We highly recommend engaging in detailed
          discussions with our team to fully understand your unique requirements
          and objectives. Qrest cannot guarantee specific results, as success
          depends on several variables including market conditions, competition,
          and customer preferences.{" "}
        </p>
        <p>
          By choosing to utilize our services, you acknowledge and agree to the
          terms and conditions outlined by Qrest. These terms are designed to
          protect both parties and ensure a transparent and productive working
          relationship.
        </p>
        <hr />
      </div>
      <div className="socials">
        <div className="social">
          <Link to="/" className="connect" href="#">
            <img src={twitter} alt="Logo" className="social-logo" />
          </Link>
          {/* <Link to="/" className="connect" href="#">
            <img src={facebook} alt="Logo" className="social-logo" />
          </Link> */}
          <a
            href="https://www.facebook.com/profile.php?id=61552925021943&mibextid=JRoKGi"
            target="_blanck"
            className="connect"
          >
            <img src={facebook} alt="Logo" className="social-logo" />
          </a>
          <a
            href="https://www.linkedin.com/company/qrest-software-development-company/"
            target="_blanck"
            className="connect"
          >
            <img src={linkedin} alt="Logo" className="social-logo" />
          </a>
          <a
            href="https://instagram.com/qrest_software_development?igshid=ZTM4ZDRiNzUwMw=="
            target="_blanck"
            className="connect"
          >
            <img src={instagram} alt="Logo" className="social-logo" />
          </a>
          {/* <Link to="/" className="connect" href="#">
            <img src={linkedin} alt="Logo" className="social-logo" />
          </Link> */}
          {/* <Link to="/" className="connect" href="#">
            <img src={instagram} alt="Logo" className="social-logo" />
          </Link> */}
        </div>
        <div className="desgin">
          <p>Designed by Qrest</p>
          <p>qrestcompany@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
