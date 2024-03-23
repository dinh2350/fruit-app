/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import industryImg from "../../assets/images/industry.png";
import "./style/introItem.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const IntroItem = () => {
  return (
    <div className="item">
      <div className="item-media">
        <img className="item-img" src={industryImg} alt="" />
      </div>
      <h3 className="item-title">Own fruit orchard</h3>
      <p className="item-desc">
        Langsung dari Kebun Sendiri yang tersebar di setiap provinsi yang
        memiliki cabang toko Jez Salad.
      </p>
      <a className="item-link" href="#">
        Learn more
        <FontAwesomeIcon className="item-icon" icon={faArrowRight} />
      </a>
    </div>
  );
};

export default IntroItem;
