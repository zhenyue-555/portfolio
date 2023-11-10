import React from "react";

// import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <footer id="Footer" className="footer--section">
      <div className="footer--text">
      </div>
      <ul className="footer--links">
        <li className="footer--link">
        <a href="mailto:myemail@email.com">
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />Gmail</a>
        </li>
        <li className="footer--link">
        <a href="https://www.linkedin.com/myname">
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"/>Linkedin</a>
        </li>
        <li className="footer--link">
        <a href="https://www.github.com/myname">
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />GitHub</a>
        </li>
      </ul>
    </footer>
  );
};