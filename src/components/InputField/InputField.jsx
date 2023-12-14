import React from 'react';
import Form from 'react-bootstrap/Form';

function InputField({ type, value, onChange, placeholder }) {
    return (
        <Form.Control
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default InputField;
