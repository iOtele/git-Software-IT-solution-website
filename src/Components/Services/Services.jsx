import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./Services.css";
import Service_1 from "../../assets/service-1.jpg";

const Services = () => {
  return (
    <section className="services">
      {/* <div className="container"> */}
      <div className="content">
        <div className="left ">
          <figure className="service-banner">
            <img
              src={Service_1}
              alt="Illustration art"
              loading="lazy"
              className="service-img one"
            />
          </figure>
        </div>

        <div className="service-content right">
          <p className="section-subtitle">Services We Offer</p>
          <h2 className="h2 section-title">
            We are here to help your startups
          </h2>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-item-icon">
                <FaCheckCircle />
              </div>
              <h3 className="h3 service-item-title">Cloud Databases</h3>
            </li>
            <li className="service-item">
              <div className="service-item-icon">
                <FaCheckCircle />
              </div>
              <h3 className="h3 service-item-title">Website Hosting</h3>
            </li>
            <li className="service-item">
              <div className="service-item-icon">
                <FaCheckCircle />
              </div>
              <h3 className="h3 service-item-title">Remote Desktop</h3>
            </li>
            <li className="service-item">
              <div className="service-item-icon">
                <FaCheckCircle />
              </div>
              <h3 className="h3 service-item-title">File Backup</h3>
            </li>
          </ul>
        </div>
      </div>
      <div className="content two">
        <div className="left ">
          <figure className="service-banner">
            <img
              src={Service_1}
              alt="Illustration art"
              loading="lazy"
              className="service-img two"
            />
          </figure>
        </div>
        <div className="service-content right">
          <p className="section-subtitle">Our Services</p>
          <h2 className="h2 section-title">
            SOftware & IT Solution service in your area
          </h2>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-item-icon">
                <FaCheckCircle />
              </div>
              <h3 className="h3 service-item-title">Design & Development</h3>
            </li>
            <li className="service-item">
              <div className="service-item-icon">
                <FaCheckCircle />
              </div>
              <h3 className="h3 service-item-title">
                Android Apps Development
              </h3>
            </li>
            <li className="service-item">
              <div className="service-item-icon">
                <FaCheckCircle />
              </div>
              <h3 className="h3 service-item-title">Web Application</h3>
            </li>
            <li className="service-item">
              <div className="service-item-icon">
                <FaCheckCircle />
              </div>
              <h3 className="h3 service-item-title">React Web Development</h3>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Services;
