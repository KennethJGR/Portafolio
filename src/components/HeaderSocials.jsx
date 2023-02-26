import React from "react";
import { BsLinkedin, BsGithub, BsEnvelopeFill } from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com" target="_blank" className="a_social">
                <BsLinkedin />
            </a>{" "}
            <a href="https://github.com" target="_blank" className="a_social">
                <BsGithub />
            </a>{" "}
            <a href="https://mail.google.com" target="_blank" className="a_social">
                <BsEnvelopeFill />
            </a>
        </div>
    );
};

export default HeaderSocials;
