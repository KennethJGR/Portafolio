import React from "react";
import styles from "../styles/portafolio.css";
import { SiGithub } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import data from "../data.js";

const Portafolio = () => {
  return (
    <section id="portafolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portafolio__container">
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <article key={id} className=" portafolio__item ">
              <div className="portafolio__item__img">
                <img src={image} alt="web" />
              </div>
              <h3>{title}</h3>
              <div className="portafolio__item__text">
                <div className="">
                  <a
                    href={github}
                    target="_blank"
                    className="btn btn-portafolio"
                  >
                    {<SiGithub />} GitHub
                  </a>
                </div>
                <div className="">
                  <a
                    href={demo}
                    target="_blank"
                    className="btn btn-primary btn-portafolio"
                  >
                    {<SlGlobe />} Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portafolio;
