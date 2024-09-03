import React from "react";
import "./Footer.css";
import Novelware from "../../assets/Novelware.png";
import {
  IoMailOutline,
  IoLocateOutline,
  IoCallOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";
import { Link } from "react-scroll";

const quickLinks = [
  { name: "IT Startup", to: "it-startup" },
  { name: "Software", to: "software" },
  { name: "Business", to: "business" },
  { name: "App", to: "app" },
  // { name: "Insurance", to: "insurance" },
  { name: "Property", to: "property" },
  // { name: "Big Data", to: "big-data" },
  { name: "Chatbot", to: "chatbot" },
];

const socialLinks = [
  { icon: <IoLogoFacebook />, href: "https://facebook.com" },
  { icon: <IoLogoTwitter />, href: "https://twitter.com" },
  { icon: <IoLogoLinkedin />, href: "https://linkedin.com" },
  { icon: <IoLogoInstagram />, href: "https://instagram.com" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={-110}
            className="logo"
          >
            <img src={Novelware} className="logo-img" alt="Novelware logo" />
          </Link>

          <p className="section-text"></p>

          <div className="location-text">
            <div className="location-icon">
              <IoLocateOutline />
            </div>
            <address className="address">
              6c road 34, Ikota Villa Estate, <br />
              Ikota, Lekki Lagos, Nigeria.
            </address>
          </div>
        </div>

        <div className="quicklink-box">
          <p className="h3 quicklink-title">Quick links</p>

          <ul className="quicklink-list">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="quicklink"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <div>
            <p className="h3 contact-title">Contact with us</p>
          </div>

          <ul className="contact-list">
            <li className="contact-item">
              <div className="contact-icon">
                <IoMailOutline />
              </div>
              <a href="mailto:hello@solutry.com" className="contact-link">
                info@thenovelware.com
              </a>
            </li>

            <li className="contact-item">
              <div className="contact-icon">
                <IoCallOutline />
              </div>
              <a href="tel:+14854560102" className="contact-link">
                +234-9151-958-284
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="foot-bottom-container">
          <p className="copyright">
            &copy; 2024
            <Link to="hero" smooth={true} offset={0} duration={-210}>
              &nbsp; Novelware, &nbsp;
            </Link>
            Software & IT Solutions. All rights reserved
          </p>

          <ul className="social-list">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
