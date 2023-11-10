import React from "react";

// import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className="about--section" id="about">
      <h2 className="about--title">About</h2>
      <div className="about--content">
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className="aboutImage"
        />
        <ul className="aboutItems">
          <li className="aboutItem">
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className="aboutItemText">
                <h3>Front End Skills</h3>
                <p>HTML/CSS, React, JavaScript, Responsive Web Design</p>
            </div>
            </li>
            <li className="aboutItem"><img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className="aboutItemText">
                <h3>Back End Skills</h3>
                <p>Node.js, MySQL, MongoDB, API development, Docker, AWS</p>
            </div>
            </li>
            <li className="aboutItem"><img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
            <div className="aboutItemText">
                <h3>UI Designer</h3>
                <p>Adobe Creative Suite, Figma</p>
            </div>
            </li>
            </ul>
            </div>
        </section>
    )
};