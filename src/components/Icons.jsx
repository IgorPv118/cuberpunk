import React from "react";
import "../styles/Icons.css"
import { icons } from "../constants/icons";

const Icons = () => {
  return (
    <div className="icon-wrapper">
      {icons.map((icon) => (
        <div className="icons">
          <a href="#">
            <img src={icon} alt="icon" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Icons;
