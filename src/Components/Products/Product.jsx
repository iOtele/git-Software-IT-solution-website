import React from "react";
import "./Product.css";
import Product_1 from "../../assets/program-1.png";
import Product_2 from "../../assets/program-2.png";
import Product_3 from "../../assets/program-3.png";
import Product_icon_1 from "../../assets/program-icon-1.png";
import Product_icon_2 from "../../assets/program-icon-2.png";
import Product_icon_3 from "../../assets/program-icon-3.png";

const Product = () => {
  return (
    <div className="products ">
      <div className="product">
        <img src={Product_1} alt="Product image" />
        <div className="caption">
          <img src={Product_icon_1} alt="" />
          <p>Software for Android</p>
        </div>
      </div>
      <div className="product">
        <img src={Product_2} alt="Product image" />
        <div className="caption">
          <img src={Product_icon_2} alt="" />
          <p>Remarketing App</p>
        </div>
      </div>
      <div className="product">
        <img src={Product_3} alt="Product image" />
        <div className="caption">
          <img src={Product_icon_3} alt="" />
          <p>Web Application</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
