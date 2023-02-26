import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import styles from "../styles/header.css";
import me from "../assets/me.jpeg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kenneth Gaitán </h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="photo-me" className="" />
        </div>

        <a href="#contact" className="scroll_down">
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
