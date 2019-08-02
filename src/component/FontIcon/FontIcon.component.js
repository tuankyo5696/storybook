import React from "react";
import './FontIcon.component.css'
import "./../../assets/fontello/uma-icon-codes.css";

const FontIcon = props => {
  const { icon, size, color, opacity, className } = props;
  const composeClassName = `icon ${[`icon-${icon}`]} ${className}`;
  return (
    <span
      className={composeClassName}
      style={{ fontSize: size, color, opacity }}
    />
  );
};


export default FontIcon;