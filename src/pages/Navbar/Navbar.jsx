import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getImageUrl } from "../../utils";
import '../scss/Navbar.scss';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        // <nav className="navbar">
            <Container>
                <Row className="align-items-center">
                    <Col xs={9} md={3}>
                        <a className="navbar--title" href="/">Portfolio</a>
                    </Col>
                    <Col className="align-right">
                        <img className="menuBtn" 
                             src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                             alt="menu-button" 
                             onClick={() => setMenuOpen(!menuOpen)} />
                    </Col>
                {/* </Row>
                <Row> */}
                    <Col>
                        <ul className={`menuItems ${menuOpen ? "menu-Open" : ""}`}
                            onClick={() => setMenuOpen(false)}>
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        // </nav>
    );
};
