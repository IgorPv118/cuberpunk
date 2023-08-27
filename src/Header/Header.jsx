import React from "react";
import "./Header.css";
import Icons from "../components/Icons";
import Logo from "../components/Logo";


const Header = () => {
  return (
    <header className="Header">
      <Logo/>
      <Icons/>
    </header>
  );
};

export default Header;
