import React from "react";
import "./style/style.header.css";
import Button from "../button/Button";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <span className="text-primary mr-1">jez</span>
          <span>salad</span>
        </div>
        <ul className="header-navLink">
          <li className="text-primary">Home</li>
          <li>Menu</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
        <div className="header-actions">
          <Button>Sign</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
