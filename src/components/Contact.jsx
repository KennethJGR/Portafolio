import React from "react";
import styles from "../styles/contact.css";

import { SiGmail, SiWhatsapp, SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__text">
          <div className="about__cards">
            <article className="about__card">
              <SiGmail className="about__card__icon" />
              <h5>Gmail</h5>
              <a href="https://linkedin.com" target="_blank" className="a_social">
                Send a message
            </a>
            </article>

            <article className="about__card">
              <SiWhatsapp className="about__card__icon" />
              <h5>WhatsApp</h5>
              <a href="mailto: gaitan.kj@gmail.com" target="_blank">
                Send a message
              </a>
            </article>

            <article className="about__card">
              <SiLinkedin className="about__card__icon" />
              <h5>LinkedIn</h5>
              <a href="https://wa.me/50558652270" target="_blank">
                Send a message
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
