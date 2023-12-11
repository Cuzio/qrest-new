import React, { useEffect } from "react";
import { GoDiamond } from "react-icons/go";
import "../css/hero.css";
import AOS from "aos";
import "aos/dist/aos.js";
import "aos/dist/aos.css";
import image from "../images/image.png";
import video from "../images/video.png";
import vid from "../images/vid.mp4";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <div>
      <div className="container herotext">
        <div className="big">
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
            <h1 className="">Execution</h1>
          </div>
        </div>
        <div className="small">
          <h1 className="" data-aos="fade-down">
            Concept
          </h1>
          <h1 className="" data-aos="fade-up">
            Execution
          </h1>
          <p className="">
            Qrest is a strategic branding, software development and digital
            marketing company that champions the biggest ideas and leaps next
            level of innovation.
          </p>
        </div>
        <div className="hero-video">
          {/* <img src={video} alt="" className="video" /> */}
          {/* <video
            src={vid}
            class="object-fit-contain video-play"
            autoplay="true"
          ></video> */}
          <video
            src={vid}
            autoplay="true"
            controls="control"
            volume={0.5}
            className="video-play"
          />
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
