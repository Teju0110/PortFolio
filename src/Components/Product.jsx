import React from "react";
import "./Product.css";

const Product = ({ img, link }) => {
  return (
    <div className="product">
      <div className="p_browser">
        <div className="p_circle"></div>
        <div className="p_circle"></div>
        <div className="p_circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p_img" />
      </a>
    </div>
  );
};

export default Product;
