import React from "react";
import CV from "../assets/CV.pdf";

const tileCTA = () => {
    return (
        <div className="cta">
            <a href={CV} download="Kenneth Gaitan CV" className="btn">
                Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
                Let's Talk
            </a>
        </div>
    );
};

export default CTA;
