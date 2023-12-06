import React from "react";
import have from "../images/have.png";
import vector from "../images/vector.png";
import vector1 from "../images/vector1.png";
import "../css/have.css";

const Have = () => {
  return (
    <div className="container">
      <img src={have} alt="" className="have-contain" />
      <img src={vector1} alt="" className="vector1" />
      <img src={vector} alt="" className="vector" />
    </div>
  );
};

export default Have;
