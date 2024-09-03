import React from "react";
import { SlArrowRight } from "react-icons/sl";
import "./Feature.css";

const Feature = ({ icon, title, text, link }) => {
  return (
    <div className="features-card">
      <div className="card-icon">
        <img src={icon} alt="Illustration icon" />
      </div>

      <h3 className="h3 card-title">{title}</h3>

      <p className="card-text">{text}</p>

      <a href={link} className="card-link">
        <span>Learn More</span>
        <SlArrowRight />
      </a>
    </div>
  );
};

export default Feature;
