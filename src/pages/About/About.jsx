import React from "react";
import "../scss/About.scss";
import { getImageUrl } from "../../utils";
import { Container, Row, Col, Image } from 'react-bootstrap';

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
              <li className="aboutItem">
                <div className="d-none d-md-block d-lg-block">
                <Image src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                </div>
                <div>
                  <h3 className="title">Front End Skills</h3>
                  <p className="description">HTML/CSS, React, JavaScript, Responsive Web Design</p>
                </div>
              </li>
              <li className="aboutItem">
              <div className="d-none d-md-block d-lg-block">
                <Image src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                </div>
                <div className="aboutItemText">
                  <h3 className="title">Back End Skills</h3>
                  <p className="description">Node.js, MySQL, MongoDB, API development, Docker, AWS</p>
                </div>
              </li>
              <li className="aboutItem">
              <div className="d-none d-md-block d-lg-block">
                <Image src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
                </div>
                <div className= "aboutItemText">
                  <h3 className="title">UI Designer</h3>
                  <p className="description">Adobe Creative Suite, Figma</p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
  );
};
