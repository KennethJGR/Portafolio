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
              <SiGmail className="contact__card__icon" />
              <h5>Gmail</h5>
              <a href="mailto: gaitan.kj@gmail.com">Send a mail</a>
            </article>

            <article className="contact__card">
              <SiWhatsapp className="contact__card__icon" />
              <h5>WhatsApp</h5>
              <a href="https://wa.me/50558652270" target="_blank">
                Send a message
              </a>
            </article>

            <article className="contact__card">
              <SiLinkedin className="contact__card__icon" />
              <h5>LinkedIn</h5>
              <a href="https://linkedin.com/in/gaitan-kj" target="_blank">
                Contact me
              </a>
            </article>

            <article className="contact__card">
              <SiGithub className="contact__card__icon" />
              <h5> Github </h5>
              <a href="https://github.com/KennethJGR" target="_blank">
                Contact me
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
