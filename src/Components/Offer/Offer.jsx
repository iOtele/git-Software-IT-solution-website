import React from "react";
import "./Offer.css";
import program_icon_1 from "../../assets/features-icon-1.png";
import program_icon_2 from "../../assets/features-icon-2.png";
import program_icon_3 from "../../assets/features-icon-3.png";
import program_icon_4 from "../../assets/features-icon-4.png";
import FeatureCard from "../Feature/Feature";

const Offer = () => {
  return (
    <section className="features">
      <div className="features-container">
        <ul className="features-list">
          <li>
            <FeatureCard
              icon={program_icon_1}
              title="Zero Configuration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis."
              link="#"
            />
          </li>

          <li>
            <FeatureCard
              icon={program_icon_2}
              title="Code Security"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis."
              link="#"
            />
          </li>

          <li>
            <FeatureCard
              icon={program_icon_3}
              title="Team Management"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis."
              link="#"
            />
          </li>

          <li>
            <FeatureCard
              icon={program_icon_4}
              title="Access Controlled"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis."
              link="#"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Offer;
