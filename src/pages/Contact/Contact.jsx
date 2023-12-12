import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./Contact.scss";
import FormRow from '../../components/FormRow/FormRow';
import  SubmitButton from '../../components/SubmitButton/SubmitButton';
// import '../scss/Contact.scss';

export const Contact = () => {
  const formRows = [
    [
      { id: "first-name", label: "First Name", type: "text", md: 6, xs: 12 },
      { id: "last-name", label: "Last Name", type: "text", md: 6, xs: 12 }
    ],
    [
      { id: "email", label: "Email", type: "email", placeholder: "example@email.com", md: 6, xs: 12},
      { id: "phone-number", label: "Phone Number", type: "text", pattern: "\\d*", minLength: "10", placeholder: "Please enter at least 10 digits", md: 6, xs: 12 }
    ],
    [
      { id: "message", label: "Message", type: "textarea", placeholder: "Type your message...", md: 12, xs: 12 }
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
            <FormRow rowData={row} key={rowIndex} />
          ))}
        <SubmitButton text="Submit" />
      </Form>
    </Container>
  );
};
