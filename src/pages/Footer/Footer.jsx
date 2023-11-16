import React from "react";
import "./Footer.scss";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <footer id="Footer" className="footer--section">
      <div className="footer--text">
      </div>
      <ul className="footer--links">
        <li className="footer--link">
        <a href="mailto:amanda.yuzy@gmail.com">
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />Gmail</a>
        </li>
        <li className="footer--link">
        <a href="https://www.linkedin.com/in/zhenyue-yu-2062a11a9/">
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"/>Linkedin</a>
        </li>
        <li className="footer--link">
        <a href="https://github.com/zhenyue-555">
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />GitHub</a>
        </li>
      </ul>
    </footer>
  );
};