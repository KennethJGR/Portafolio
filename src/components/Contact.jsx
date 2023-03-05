import React from "react";
import styles from "../styles/contact.css";

import { SiGmail, SiWhatsapp, SiLinkedin, SiGithub } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__text">
          <div className="contact__cards">
            <article className="contact__card">
              <a href="mailto: gaitan.kj@gmail.com">
                <SiGmail className="contact__card__icon" />
                <h5>Gmail</h5>
                <p>Send a mail</p>
              </a>
            </article>

            <article className="contact__card">
              <a href="https://wa.me/50558652270" target="_blank">
                <SiWhatsapp className="contact__card__icon" />
                <h5>WhatsApp</h5>
                <p>Send a message</p>
              </a>
            </article>

            <article className="contact__card">
              <a href="https://linkedin.com/in/gaitan-kj" target="_blank">
                <SiLinkedin className="contact__card__icon" />
                <h5>LinkedIn</h5>
                <p>Contact me</p>
              </a>
            </article>

            <article className="contact__card">
              <a href="https://github.com/KennethJGR" target="_blank">
                <SiGithub className="contact__card__icon" />
                <h5> Github </h5>
                <p>Contact me</p>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
