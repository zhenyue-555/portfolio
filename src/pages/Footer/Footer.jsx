import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "../scss/Footer.scss";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <footer id="Footer" className="footer--section">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="footer--text">
          </Col>
        </Row>
        <Row className="justify-content-center footer--links">
          <Col xs={12} md="auto" className="footer--link">
            <a href="mailto:amanda.yuzy@gmail.com">
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />Gmail</a>
          </Col>
          <Col xs={12} md="auto" className="footer--link">
            <a href="https://www.linkedin.com/in/zhenyue-yu-2062a11a9/">
              <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />Linkedin</a>
          </Col>
          <Col xs={12} md="auto" className="footer--link">
            <a href="https://github.com/zhenyue-555">
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />GitHub</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
