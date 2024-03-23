import React from "react";
import IntroItem from "../introItem/IntroItem";
import "./style/introduction.style.css";

const Introduction = () => {
  return (
    <section className="intro container">
      <div className="intro-heading">
        <h1 className="intro-title">
          why choose us <br /> for{" "}
          <span className="text-primary"> your healthy food</span>
        </h1>
        <p className="intro-desc">
          We continue to consistently choose and maintain the quality of the
          fruit served, so that it remains fresh and nutritious when you eat it.
        </p>
      </div>
      <div className="intro-list">
        <IntroItem></IntroItem>
        <IntroItem></IntroItem>
        <IntroItem></IntroItem>
      </div>
    </section>
  );
};

export default Introduction;
