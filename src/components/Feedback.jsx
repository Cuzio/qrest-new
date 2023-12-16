import React from "react";
import "../css/feedback.css";
import one from "../images/1.png";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/basecamp.png";
import pipedrive from "../images/pipedrive.png";

const Feedback = () => {
  return (
    <div className="container feedback">
      <h2>Client’s Feedback</h2>
      <marquee behavior="" direction="">
        <div className="feedback-marquee">
          <div className="cards">
            <div className="card-body">
              <h5 className="cardtitle">Software Development </h5>
              <p className="cardtext">
                We are thrilled with the exceptional work <br /> Qrest has done
                on our customer app, rider <br /> app, and admin panel. They
                have truly <br /> transformed our business operations and <br />
                enhanced the overall customer experience. <br /> The Qrest
                team's expertise and attention to <br /> detail have been{" "}
                invaluable throughout the <br /> development process. <br />
                They are a true partner in our success!
              </p>
              <p className="cardname">Ambrose Ebuka</p>
              <p className="cardcompany">QwikServe</p>
            </div>
          </div>

          <div className="cards">
            <div className="card-body">
              <h5 className="cardtitle">Branding</h5>
              <p className="cardtext">
                We are beyond impressed with Qrest's work on our <br />
                branding. They truly captured the essence of <br /> our company
                and brought our vision to life. <br />
                The Qrest team's creativity and attention to detail <br />
                resulted in a brand identity that perfectly represents <br />
                who we are. From the logo design to the color <br />
                palette and overall brand strategy, Qrest exceeded <br />
                our expectations. They were attentive, responsive, <br />
                and a pleasure to work with throughout the <br />
                entire process. They are true experts in their field!
              </p>
              <p className="cardname">Catapult CEO </p>
              <p className="cardcompany">Catapult</p>
            </div>
          </div>

          <div className="cards">
            <div className="card-body">
              <h5 className="cardtitle">Branding </h5>
              <p className="cardtext">
                I'm thrilled with Qrest's work on our branding! <br />
                They completely nailed it, capturing our company's <br />
                essence and delivering a brand identity that truly <br />
                stands out. They listened to our vision and <br />
                brought it to life with an incredible logo design, color <br />
                scheme, and overall brand strategy.
              </p>
              <p className="cardname">TechCaDev CEO </p>
              <p className="cardcompany">Tech Career Development </p>
            </div>
          </div>

          <div className="cards">
            <div className="card-body">
              <h5 className="cardtitle">Branding</h5>
              <p className="cardtext">
                Yo, I gotta give major props to Qrest for their <br />
                sick work on our branding! The Qrest crew's <br />
                creativity and attention to detail are off the <br />
                charts. They hooked us up with a dope <br />
                logo, killer color scheme, and an overall brand <br />
                vibe that's 100% us. Working with them was <br />a breeze - they
                were on point, professional, and <br />
                totally understood what we were going for.
              </p>
              <p className="cardname">Okoye Maxwell </p>
              <p className="cardcompany">Cuzzy Handmade</p>
            </div>
          </div>
        </div>
      </marquee>
      {/* <p className="feedback-para">
        Scaling the world's best and biggest companies
      </p> */}
      {/* <div className="feedback-logos">
        <img src={two} alt="" className="one" />
        <img src={one} alt="" className="two" />
        <img src={three} alt="" className="three" />
        <img src={amazon} alt="" />
        <img src={basecamp} alt="" />
      </div> */}
    </div>
  );
};

export default Feedback;
