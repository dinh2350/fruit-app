import React from "react";
import "./style/banner.style.css";
import Button from "../button/Button";
import bannerImg from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="container banner">
      <div className="banner-content">
        <span className="banner-hashtag">#1 Best Healthy Salad </span>
        <h1 className="banner-title">
          <span className="text-primary mr-1">Skip</span>
          The Diet, Just Eat Healthy With Jez Salad
        </h1>
        <p className="banner-desc">
          Imagine you don't need a diet because we provide healthy and delicious
          food for you!
        </p>
        <Button>Order Food</Button>
        <div className="banner-count">
          <div className="banner-item">
            <p className="banner-item-number">5000+</p>
            <p className="banner-item-name">Customer</p>
          </div>
          <div className="banner-item">
            <p className="banner-item-number">8000+</p>
            <p className="banner-item-name">Delivery</p>
          </div>
          <div className="banner-item">
            <p className="banner-item-number">1000+</p>
            <p className="banner-item-name">Ratings</p>
          </div>
        </div>
      </div>
      <div className="banner-media">
        <img className="banner-img" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
