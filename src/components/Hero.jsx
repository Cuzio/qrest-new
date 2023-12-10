import React, { useEffect } from "react";
import { GoDiamond } from "react-icons/go";
import "../css/hero.css";
import AOS from "aos";
import "aos/dist/aos.js";
import "aos/dist/aos.css";
import image from "../images/image.png";
import video from "../images/video.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <div>
      <div className="container herotext">
        <div
          className="d-flex justify-content-center align-items-center first"
          data-aos="fade-down"
        >
          <h1 className="">Concept</h1>
          <img
            src={image}
            alt="a picture will be here"
            className="herotext-image"
          />
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          data-aos="fade-up"
        >
          <p className="">
            Qrest is a strategic branding, software development and digital
            marketing company that champions the biggest ideas and leaps next
            level of innovation.
          </p>
          <h1 className="">Excution</h1>
        </div>
        <div>
          <img src={video} alt="" className="video" />
          {/* <video src="..." class="object-fit-contain" autoplay></video> */}
        </div>
      </div>

      <marquee behavior="infinite" direction="" className="marquee">
        UI/UX Design <GoDiamond className="m-2" /> Development{" "}
        <GoDiamond className="m-2" /> UI Amination <GoDiamond className="m-2" />{" "}
        Branding Design <GoDiamond className="m-2" />
        UI/UX Design <GoDiamond className="m-2" /> Development{" "}
        <GoDiamond className="m-2" /> UI Amination <GoDiamond className="m-2" />{" "}
        Branding Design <GoDiamond className="m-2" /> UI/UX Design{" "}
        <GoDiamond className="m-2" /> Development <GoDiamond className="m-2" />{" "}
        UI Amination <GoDiamond className="m-2" /> Branding Design{" "}
        <GoDiamond className="m-2" />
        UI/UX Design <GoDiamond className="m-2" /> Development{" "}
        <GoDiamond className="m-2" /> UI Amination <GoDiamond className="m-2" />{" "}
        Branding Design
      </marquee>
    </div>
  );
};

export default Hero;
