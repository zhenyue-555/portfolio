import React from "react";
import "../scss/About.scss";
import { getImageUrl } from "../../utils";
import { Container, Row, Col, Image } from 'react-bootstrap';
import {aboutItems} from "../../data/moment.json";

export const About = () => {

  return (
    <Container className="about--section" id="about">
      <h2 className="about--title">About</h2>
      <Row className="align-items-center about--content">
        <Col lg={5} className="d-none d-lg-block">
          <Image
            src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting with a laptop"
            className="aboutImage"
          />
        </Col>
        <Col lg={7}>
          <ul className="aboutItems">
            {aboutItems.map((item, index) => (
              <li className="aboutItem" key={index}>
                <div className="d-none d-md-block d-lg-block">
                  <Image src={getImageUrl(`about/${item.icon}`)} alt={`${item.title} icon`} />
                </div>
                <div className="aboutItemText">
                  <h3 className="about-item-title">{item.title}</h3>
                  <p className="about-item-description">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
