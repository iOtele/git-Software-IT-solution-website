import React from "react";
import "./Top.css";
import mail_icon from "../../assets/mail-icon.png";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";

const socialLinks = [
  { icon: <IoLogoFacebook />, href: "https://facebook.com" },
  { icon: <IoLogoTwitter />, href: "https://twitter.com" },
  { icon: <IoLogoLinkedin />, href: "https://linkedin.com" },
  { icon: <IoLogoInstagram />, href: "https://instagram.com" },
];

const Top = () => {
  return (
    <div className="top container">
      <div className="top-hero">
        <img src={mail_icon} alt="" className="top-icon" />
        <p className="top-text"> info@thenovelware.com</p>
      </div>

      <ul className="social-lists">
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
  );
};

export default Top;
