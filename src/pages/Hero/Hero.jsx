import React from "react";
import { getImageUrl } from "../../utils";
import "../scss/Hero.scss";

export const Hero = () => {
    return <section className="hero--section">
        <div className="hero--content">
            <h1 className="hero--title">Hi, I'm Amanda</h1>
            <p className="hero--description">I'm a full stack developer. Reach out if you'd like to know more!</p>
            <a href="mailto:myemail@email.com" className="contactBtn">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me" className="heroImg"/>
        <div className="topBlur" />
        <div className="bottomBlur" />
    </section>
};