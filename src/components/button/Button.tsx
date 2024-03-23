import React, { PropsWithChildren } from "react";
import arrowRightImg from "../../assets/images/arrow-right.png";
import "./style/style.btn.css";

interface IButton {
  arrowImg?: boolean;
}

const Button = (props: PropsWithChildren<IButton>) => {
  const { arrowImg } = props;
  return (
    <button className="btn-action text-white bg-primary">
      {props.children}
      {arrowImg && <img className="item-arrow" src={arrowRightImg} alt="" />}
    </button>
  );
};

export default Button;
