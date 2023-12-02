import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "../scss/Footer.scss";
import { getImageUrl } from "../../utils";
import { socialLinks } from "../../data/moment.json";

export const Footer = () => {
  return (
    <footer id="Footer" className="footer--section">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="footer--text text-center">
            <p>Feel free to reach out to me!</p>
          </Col>
        </Row>
        <Row className="justify-content-center footer--links">
          {socialLinks.map((item, index) => (
            <Col key={index} xs={4} className="footer--link">
              <a href={item.url}>
                <img className="footer-icon" src={getImageUrl(item.imgSrc)} alt={`${item.text} icon`} />
                {item.text}
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
};
