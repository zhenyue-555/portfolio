import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../scss/Contact.scss";

export const Contact = () => {
  // Define the form fields in rows
  const formRows = [
    [
      { id: "first-name", label: "First Name", type: "text", md: 6, xs: 12 },
      { id: "last-name", label: "Last Name", type: "text", md: 6, xs: 12 }
    ],
    [
      { id: "email", label: "Email", type: "email", md: 6, xs: 12 },
      { id: "phone-number", label: "Phone Number", type: "number", md: 6, xs: 12 }
    ]
  ];

  return (
    <Container id="Contact" className="contact--section">
      <Row className="text-h2">
        <h2>Contact Me</h2>
      </Row>
      <Form className="contact--form--container" action="https://formspree.io/mdorjzyb" method="POST">
        {/* Map over the formRows array to create rows */}
        {formRows.map((row, rowIndex) => (
          <Row className="mb-3" key={rowIndex}>
            {/* Map over each field in the row */}
            {row.map(field => (
              <Col md={field.md} xs={field.xs} key={field.id}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-md">{field.label}</Form.Label>
                  <Form.Control type={field.type} name={field.id} id={field.id} required />
                </Form.Group>
              </Col>
            ))}
          </Row>
        ))}
        <Form.Group className="mb-3">
          <Form.Label className="text-md">Message</Form.Label>
          <Form.Control as="textarea" name="message" id="message" rows="8" required placeholder="Type your message..."/>
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">Submit</Button>
        </div>
      </Form>
    </Container>
  );
};
