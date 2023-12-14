import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

function AddForm({ onSubmit, text, setText, placeholder }) {
  return (
    <Form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
        />
        <Button variant="secondary" size="sm" type="submit">Add</Button>
      </InputGroup>
    </Form>
  );
}

export default AddForm;
