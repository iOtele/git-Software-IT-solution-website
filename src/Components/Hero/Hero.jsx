import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import white_arrow from "../../assets/white-arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Software and IT Solutions</h1>
        <p>We create custom, cutting-edge software applications </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
        <button className="btn dark-btn">
          Contact Us <img src={white_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
