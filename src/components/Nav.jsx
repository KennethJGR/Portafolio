import styles from "../styles/nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import {HiOutlineBriefcase} from "react-icons/hi";

import { useState } from "react";

const Nav = () => {
  const [nav, setNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setNav("#")}
        className={nav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setNav("#about")}
        className={nav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setNav("#experience")}
        className={nav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setNav("#services")}
        className={nav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portafolio"
        onClick={() => setNav("#portafolio")}
        className={nav === "#portafolio" ? "active" : ""}
      >
        <HiOutlineBriefcase />
      </a>
      <a
        href="#contact"
        onClick={() => setNav("#contact")}
        className={nav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
     
    </nav>
  );
};

export default Nav;
