import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { getImageUrl } from "../../utils/imagepath";
import "./Hero.scss";
import { TypeAnimation } from 'react-type-animation';
// import '../scss/Hero.scss';

  

export const Hero = () => {

    return (
        // <section className="hero--section">
            <Container className="hero--section">
                <Row className="align-items-center">
                    <Col xs={8} md={6} className="hero--content">
                        <h1 className="hero--title">Hello, My name is Amanda</h1>
                        <span id="feature-text"></span>
                        <p className="hero--description">I'm a <TypeAnimation
                                sequence={["full stack developer", 1000, "Team Player", 1000, "Designer", 1000]}
                                speed={50}
                                repeat={Infinity}
                                />. Reach out if you'd like to know more!</p>
                        <a href="mailto:amanda.yuzy@gmail.com" className="contactBtn">Contact Me</a>
                    </Col>
                    <Col xs={4} md={6}>
                        <Image src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me" className="heroImg"/>
                    </Col>
                </Row>
            </Container>
        // </section>
    );
};

