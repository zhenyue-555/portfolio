import React from 'react';
import { Button } from 'react-bootstrap';

const SubmitButton = ({ text }) => {
  return (
    <div className="text-center">
      <Button variant="primary" type="submit">{text}</Button>
    </div>
  );
};

export default SubmitButton;
