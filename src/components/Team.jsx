import React from "react";
import "../css/team.css";
import martins from "../images/martins.jpeg";
import stanley from "../images/stanley.jpeg";
import ruth from "../images/ruth.jpeg";
import amaka from "../images/amaka.jpeg";
import sunday from "../images/sunday.png";
import colman from "../images/colman.png";
import max from "../images/max.png";
import aronu from "../images/aronu.png";
import chijioke from "../images/chijioke.png";
import chima from "../images/chima.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="container">
      <div className="our-team">
        <button className="our-team-button">Our Team</button>
        <h1>Get to know our team</h1>
        <h1>members</h1>
      </div>

      <div className="qrest-team">
        <h4>Qrest Team</h4>
        <p>
          Limelight provides you with powerful growth solutions and it enables
          you to Craft exceptional, top- notch websites.
        </p>
      </div>

      <div className="team-profile">
        <div className="martins">
          <img src={martins} alt="" className="martins-pic" />
          <h1>Okechukwu Martins</h1>
          <p>Product Designer</p>
          <hr />
          <div className="team-social">
            <Link to="/" className="team-connect" href="#">
              <img src={twitter} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={facebook} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={linkedin} alt="Logo" className="" />
            </Link>
          </div>
        </div>

        <div className="stanley">
          <img src={stanley} alt="" className="stanley-pic" />
          <h1>Chukwuma Stanley</h1>
          <p>Product Designer</p>
          <hr />
          <div className="team-social">
            <Link to="/" className="team-connect" href="#">
              <img src={twitter} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={facebook} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={linkedin} alt="Logo" className="" />
            </Link>
          </div>
        </div>

        <div className="ruth">
          <img src={ruth} alt="" className="ruth-pic" />
          <h1>Onokala Ruth</h1>
          <p>Content Manager</p>
          <hr />
          <div className="team-social">
            <Link to="/" className="team-connect" href="#">
              <img src={twitter} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={facebook} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={linkedin} alt="Logo" className="" />
            </Link>
          </div>
        </div>

        <div className="amaka">
          <img src={amaka} alt="" className="amaka-pic" />
          <h1>Chukwuamaka Samuella</h1>
          <p>Project Manager</p>
          <hr />
          <div className="team-social">
            <Link to="/" className="team-connect" href="#">
              <img src={twitter} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={facebook} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={linkedin} alt="Logo" className="" />
            </Link>
          </div>
        </div>

        <div className="colman">
          <img src={colman} alt="" className="colman-pic" />
          <h1>Enger Colman</h1>
          <p>Moblie App Developer</p>
          <hr />
          <div className="team-social">
            <Link to="/" className="team-connect" href="#">
              <img src={twitter} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={facebook} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={linkedin} alt="Logo" className="" />
            </Link>
          </div>
        </div>

        <div className="max">
          <img src={max} alt="" className="max-pic" />
          <h1>Okoye Maxwell</h1>
          <p>Front-end Developer</p>
          <hr />
          <div className="team-social">
            <Link to="/" className="team-connect" href="#">
              <img src={twitter} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={facebook} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={linkedin} alt="Logo" className="" />
            </Link>
          </div>
        </div>

        <div className="chima">
          <img src={chima} alt="" className="chima-pic" />
          <h1>Onyebuchi Chima</h1>
          <p>Graphic Designer</p>
          <hr />
          <div className="team-social">
            <Link to="/" className="team-connect" href="#">
              <img src={twitter} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={facebook} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={linkedin} alt="Logo" className="" />
            </Link>
          </div>
        </div>

        <div className="sunday">
          <img src={sunday} alt="" className="sunday-pic" />
          <h1>Obi Sunday</h1>
          <p>Graphic Designer</p>
          <hr />
          <div className="team-social">
            <Link to="/" className="team-connect" href="#">
              <img src={twitter} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={facebook} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={linkedin} alt="Logo" className="" />
            </Link>
          </div>
        </div>

        <div className="aronu">
          <img src={aronu} alt="" className="aronu-pic" />
          <h1>Chukwuezugo Aronu</h1>
          <p>Digital Marketer</p>
          <hr />
          <div className="team-social">
            <Link to="/" className="team-connect" href="#">
              <img src={twitter} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={facebook} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={linkedin} alt="Logo" className="" />
            </Link>
          </div>
        </div>

        <div className="chijioke">
          <img src={chijioke} alt="" className="chijioke-pic" />
          <h1>Chijioke Joshua</h1>
          <p>Social Media Marketer</p>
          <hr />
          <div className="team-social">
            <Link to="/" className="team-connect" href="#">
              <img src={twitter} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={facebook} alt="Logo" className="" />
            </Link>
            <Link to="/" className="connect" href="#">
              <img src={linkedin} alt="Logo" className="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
