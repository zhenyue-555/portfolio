import React from 'react';
import { Form } from 'react-bootstrap';

const FormField = ({ field }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="text-md">{field.label}</Form.Label>
      {field.type === "textarea" ? (
        <Form.Control as="textarea" name={field.id} id={field.id} rows="8" required placeholder={field.placeholder}/>
      ) : (
        <Form.Control type={field.type} name={field.id} id={field.id} required pattern={field.pattern || null} minLength={field.minLength || null} placeholder={field.placeholder || null}/>
      )}
    </Form.Group>
  );
};

export default FormField;
