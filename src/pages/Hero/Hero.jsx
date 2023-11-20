import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { getImageUrl } from "../../utils";
import "../scss/Hero.scss";

export const Hero = () => {
    return (
        <section className="hero--section">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="hero--content">
                        <h1 className="hero--title">Hi, I'm Amanda</h1>
                        <p className="hero--description">I'm a full stack developer. Reach out if you'd like to know more!</p>
                        <a href="mailto:amanda.yuzy@gmail.com" className="contactBtn">Contact Me</a>
                    </Col>
                    <Col md={6}>
                        <Image src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me" className="heroImg"/>
                    </Col>
                </Row>
            </Container>
            <div className="topBlur" />
            <div className="bottomBlur" />
        </section>
    );
};
