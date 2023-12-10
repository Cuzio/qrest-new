import React from "react";
import servicePix from "../images/service-pix.png";
import "../css/digital.css";
import drawing from "../images/drawing.png";
import bigLogo from "../images/big-logo.png";

const Digital = () => {
  return (
    <div className="container digital-container">
      <div className="digital">
        <h1>Digital Marketing</h1>
        <div className="digital-intro">
          <div className="digital-service-intro">
            <img src={servicePix} alt="" className="digital-service-pix" />
          </div>

          <div className="digital-all">
            <div className="digital-service-user">Get noticed online</div>
            <div className="digital-service-subscription">
              Engage your target audience
            </div>
            <div className="digital-service-personlized">
              Make data-driven decisions
            </div>
            <div className="digital-service-graph">
              Maximize your return on investment (ROI)
            </div>
            <div className="digital-service-third">Collaborate for success</div>
          </div>
        </div>
        <div className="digital-section2">
          <div className="digital-approach">
            <h3>Digital Marketing services</h3>
            <p>
              Become the industry HOT SHOT and the brand everyone loves.
              Establish and nurture a profound connection with your audience
              through strategic marketing.
            </p>
            <h4>Services:</h4>
            <p>- Search Engine Optimization (SEO)</p>
            <p> - Social Media Marketing</p>
            <p> - Pay-Per-Click Advertising (PPC) </p>
            <p> - Content Marketing </p>
            <p> - Email Marketing</p>
            <p>- Conversion Rate Optimization (CRO) </p>
            <p>- Analytics and Reporting</p>

            <h4>
              At Qrest, we follow a comprehensive approach to ensure successful
              digital marketing. Here's a breakdown of our process:
            </h4>
            <p>
              1. Understanding Your Goals: We begin by getting a clear
              understanding of your business objectives, target audience, and
              desired outcomes for the digital marketing campaign.
            </p>
            <p>
              2. Research and Analysis: Our team conducts in-depth research and
              analysis to identify market trends, competitors, and opportunities
              that will inform our strategy.
            </p>
            <p>
              3. Developing a Customized Strategy: Based on the insights
              gathered, we create a tailored digital marketing strategy that
              aligns with your goals and maximizes your brand's online presence.
            </p>
            <p>
              4. Implementation and Execution: We put the strategy into action
              by executing various digital marketing tactics such as search
              engine optimization (SEO), social media marketing, content
              creation, email marketing, and more.
            </p>
            <p>
              5. Continuous Monitoring and Optimization: We monitor the
              performance of the campaign closely, analyzing data and making
              adjustments to optimize results and ensure the best possible
              return on investment.
            </p>
            <p>
              6. Reporting and Analysis: We provide regular reports and analysis
              to keep you informed about the progress and impact of the digital
              marketing efforts, allowing for data-driven decision-making.
            </p>
            {/* <img src={drawing} alt="" className="digital-drawing" /> */}
          </div>
          <div>
            <img src={bigLogo} alt="" className="digital-bigLogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
