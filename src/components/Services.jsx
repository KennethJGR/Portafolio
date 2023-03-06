import React from "react";
import styles from "../styles/services.css";
import { SlCheck } from "react-icons/sl";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="services__article">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="services__list">
            <li>
              <SlCheck 
              className="services__icon"
              />
              <p>User research and analysis</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Responsive design</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing and prototyping</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>User interface design</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Usability testing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Accessibility auditing and improvements</p>
            </li>
          </ul>
        </article>
        {/* End of article */}
        <article className="services__article">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>

          <ul className="services__list">
            <li>
              <SlCheck className="services__icon"/>
              <p>Custom website design and development</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Front-end development (HTML, CSS, JavaScript, React)</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Back-end development (Node.js, MongoDB, PostgreSQL)</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Content management system (CMS) development</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>E-commerce website development</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Website maintenance and support</p>
            </li>
          </ul>
        </article>
        {/* End of article */}
        <article className="services__article">
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="services__list">
            <li>
              <SlCheck className="services__icon"/>
              <p>Copywriting and editing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Blog writing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Media content creation and management</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Email newsletter creation</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Video production and editing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Design and illustration</p>
            </li>
          </ul>
        </article>
        {/* End of article */}
      </div>
    </section>
  );
};

export default Services;
