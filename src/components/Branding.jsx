import React from "react";
import servicePix from "../images/service-pix.png";
import "../css/branding.css";
import drawing from "../images/drawing.png";
import bigLogo from "../images/big-logo.png";

const Branding = () => {
  return (
    <div className="container brand-container">
      <div className="brand">
        <h1>Branding and Design</h1>
        <div className="brand-intro">
          <div className="brand-service-intro">
            <img src={servicePix} alt="" className="brand-service-pix" />
          </div>

          <div className="brand-all">
            <div className="brand-service-user">
              We create unique and eye-catching brand identities that make your
              brand shine
            </div>
            <div className="brand-service-subscription">
              Find your spot in the market, connecting with your target audience
              in a meaningful way
            </div>
            <div className="brand-service-personlized">
              Ensure that every interaction with your brand is consistent,
              building trust and recognition
            </div>
            <div className="brand-service-graph">
              Grab attention, tell your story, and make people excited about
              your brand
            </div>
            <div className="brand-service-third">
              Work closely with you, listening to your ideas and goals, to
              create a brand you're proud of
            </div>
          </div>
        </div>
      </div>
      <div className="brand-section2">
        <div className="brand-approach">
          <h3>Branding Services</h3>
          <p>
            Stand out – your brand deserves the spotlight. We create a soft spot
            in your customers' hearts with exceptional and memorable branding,
            narrating your brand story and showcasing your values. We make your
            brand irresistible.
          </p>
          <h4>Services:</h4>
          <p>- Brand Strategy</p>
          <p> - Brand Identity Design</p>
          <p> - Brand Messaging </p>
          <p> - Brand Collateral Design </p>
          <p> - Brand Guidelines</p>
          <p>- Brand Audits </p>
          <p>- Brand Activation</p>

          <h4>
            At Qrest, we follow a comprehensive approach to ensure successful
            branding. Here's a breakdown of our process:
          </h4>
          <p>
            1. Understanding the Client: We begin by thoroughly understanding
            your brand, its values, target audience, and goals. This helps us
            align our approach with your vision and objectives.
          </p>
          <p>
            2. Research and Analysis: We conduct market research and analyze
            your industry, competitors, and target market to gain valuable
            insights. This information guides us in developing a unique and
            effective branding strategy.
          </p>
          <p>
            3. Brand Identity Development: Based on the research and analysis,
            we create a brand identity that encompasses your brand's
            personality, values, and visual elements such as logo, color
            palette, typography, and imagery. We focus on capturing the essence
            of your brand and ensuring consistency across all touchpoints.
          </p>
          <p>
            4. Brand Messaging: We craft compelling and consistent brand
            messaging that effectively communicates your brand's story, values,
            and unique selling propositions. This includes developing taglines,
            key messages, and brand voice guidelines.
          </p>
          <p>
            5. Implementation and Rollout: Once the brand identity and messaging
            are finalized, we assist in implementing the brand across various
            channels, such as websites, social media, marketing collateral, and
            packaging. We ensure that the brand is effectively communicated and
            resonates with your target audience.
          </p>
          {/* <img src={drawing} alt="" className="brand-drawing" /> */}
        </div>
        <div>
          <img src={bigLogo} alt="" className="brand-bigLogo" />
        </div>
      </div>
    </div>
  );
};

export default Branding;
