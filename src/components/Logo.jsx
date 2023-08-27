import React from "react";
import logo from "../images/logo/yellow.png";
import "../styles/Logo.css"

const Logo = () => {
  return (
    <div className="logo-cuber">
      <img src={logo} alt="cuberpunk" />
    </div>
  );
};

export default Logo;
