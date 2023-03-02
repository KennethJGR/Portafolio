import React from "react";
import styles from "../styles/experience.css";
import {
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiVisualstudiocode,
  SiGit,
  SiGithub,
  SiNpm,
  SiLinux,
} from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5
      className="experience__title"
      >The skills i have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__front">
          <h3>Frontend Development</h3>
          <div className="experience_text">
          <article className="experience_details">
              <SiReact className="experience_icon" />
              <h4>ReactJS</h4>
            </article>
            <article className="experience_details">
              <SiHtml5 className="experience_icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience_details">
              <SiCss3 className="experience_icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience_details">
              <SiJavascript className="experience_icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience_details">
              <SiTypescript className="experience_icon" />
              <h4>TypeScript</h4>
            </article>
            <article className="experience_details">
              <SiNextdotjs className="experience_icon" />
              <h4>Next.JS</h4>
            </article>
          </div>
        </div>
        {/**End of FrontEnd */}
        <div className=" experience__back">
          <h3>Backend Development</h3>
          <div className="experience_text">
            <article className="experience_details">
              <SiNodedotjs className="experience_icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience_details">
              <SiPostgresql className="experience_icon" />
              <h4>PostgreSQL</h4>
            </article>
            <article className="experience_details">
              <SiMongodb className="experience_icon" />
              <h4>MongoDB</h4>
            </article>
          </div>
        </div>
        {/**End of Backend */}

        <div className="experience__tools">
          <h3>Development tools</h3>
          <div className="experience_text">
            <article className="experience_details">
              <SiVisualstudiocode className="experience_icon" />
              <h4>VScode</h4>
            </article>
            <article className="experience_details">
              <SiGit className="experience_icon" />
              <h4>Git</h4>
            </article>
            <article className="experience_details">
              <SiGithub className="experience_icon" />
              <h4>Github</h4>
            </article>
            <article className="experience_details">
              <SiNpm className="experience_icon" />
              <h4>npm</h4>
            </article>
            <article className="experience_details">
              <SiLinux className="experience_icon" />
              <h4>Linux</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
