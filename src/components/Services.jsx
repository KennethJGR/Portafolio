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
              <p>Wireframing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing</p>
            </li>
          </ul>
        </article>
        {/* End of article */}
        <article className="services__article">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="services__list">
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing</p>
            </li>
          </ul>
        </article>
        {/* End of article */}
        <article className="services__article">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="services__list">
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <SlCheck className="services__icon"/>
              <p>Wireframing</p>
            </li>
          </ul>
        </article>
        {/* End of article */}
      </div>
    </section>
  );
};

export default Services;
