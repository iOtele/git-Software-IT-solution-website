import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="About image" className="about-img" />
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Focused On Creating Values</h2>
        <p>
          Software IT Solutions is dedicated to providing top-notch software
          services to clients worldwide. With a team of experienced developers,
          we deliver high-quality solutions that meet your business needs.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A et fugiat
          earum aliquid ratione minima, fuga facere eum doloribus sapiente.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dolor
          eligendi facilis. Ex facere inventore distinctio quod recusandae
          perspiciatis eius, totam cupiditate laboriosam repudiandae iste esse
          dolor ipsa amet rem!
        </p>
        <p>
          Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Nesciunt dicta voluptatem rerum, voluptate fugiat
          nemo quibusdam in atque minima rem.amet consectetur adipisicing elit.
          Doloremque impedit nisi corrupti, dolor sapiente incidunt earum magni
          nostrum iste consequatur?
        </p>
      </div>
    </div>
  );
};

export default About;
