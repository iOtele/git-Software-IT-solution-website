import React, { useState, useEffect } from "react";
import { IoChevronUpCircleOutline } from "react-icons/io5";

import "./GoToButton.css";

const GoTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY >= 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#top"
      className={`go-top ${isVisible ? "active" : ""}`}
      onClick={scrollToTop}
    >
      <IoChevronUpCircleOutline />
    </a>
  );
};

export default GoTopButton;
