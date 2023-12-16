import React from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import "../css/navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-transparent light">
        <div className="container-fluid d-flex container mt-0">
          <Link to="/" className="navbar-brand" href="#">
            <img src={logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div
            className="collapse navbar-collapse text-white"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto py-2 px-5 links">
              <li className="nav-item naaa te">
                <a href="/#service" className="nav-link text-white">
                  Service
                </a>
                {/* <Link
                  to="/homepage#service"
                  className="nav-link text-white"
                  href="#"
                >
                  Service
                </Link> */}
              </li>
              <GoDotFill
                className="dot"
                style={{ margin: "12px", padding: "3px" }}
              />
              <li className="nav-item naaa">
                <a href="/#project" className="nav-link text-white">
                  Project
                </a>
              </li>
              <GoDotFill
                className="dot"
                style={{ margin: "12px", padding: "3px" }}
              />
              <li className="nav-item naaa">
                <Link to="/aboutpage" className="nav-link text-white" href="#">
                  About
                </Link>
              </li>
            </ul>
            <button
              className="btn rounded-pill border py-2 px-4 m-2 text-white links"
              type="submit"
            >
              <Link to="/contact" className="nav-link" href="#">
                Let's talk
              </Link>
            </button>
          </div>
        </div>
      </nav>
      ;
    </div>
  );
};

export default Navbar;
