import React from "react";
import styles from "../styles/footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Kenneth Gaitán
      </a>

      <ul className="permalink">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#Portafolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__copy">
        <p>&copy; 2023 Kenneth Gaitan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
