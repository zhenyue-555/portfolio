import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../scss/Contact.scss";

export const Contact = () => {
  return (
    <section id="Contact" className="contact--section">
      <Container>
        <Row className="text-h2">
          <h2>Contact Me</h2>
        </Row>
        <Form className="contact--form--container" action="https://formspree.io/mdorjzyb" method="POST">
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="text-md">First Name</Form.Label>
                <Form.Control type="text" name="first-name" id="first-name" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="text-md">Last Name</Form.Label>
                <Form.Control type="text" name="last-name" id="last-name" required />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="text-md">Email</Form.Label>
                <Form.Control type="email" name="email" id="email" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="text-md">Phone Number</Form.Label>
                <Form.Control type="number" name="phone-number" id="phone-number" required />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label className="text-md">Message</Form.Label>
            <Form.Control as="textarea" name="message" id="message" rows="8" required placeholder="Type your message..."/>
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};
