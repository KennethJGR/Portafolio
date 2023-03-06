import React from "react";
import styles from "../styles/about.css";
import me from "../assets/prog.png";
import { FaAward } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__img">
            <img src={me} alt="me" />
          </div>
        </div>

        <div className="about__text">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__card__icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>

            <article className="about__card">
              <TbWorld className="about__card__icon" />
              <h5>Socials</h5>
              <small>LinkedIn, Github.</small>
            </article>

            <article className="about__card">
              <RiComputerLine className="about__card__icon" />
              <h5>Enthusiasm</h5>
              <small>Web Development</small>
            </article>
          </div>

          <p>
          Fullstack Developer with expertise in React. Passionate about creating high-quality, user-friendly web experiences. Constantly seeking to learn and grow in the ever-evolving world of web development.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
