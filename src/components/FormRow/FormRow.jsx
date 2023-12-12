import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FormField from '../FormField/FormField';

const FormRow = ({ rowData }) => {
  return (
    <Row className="mb-3">
      {rowData.map(field => (
        <Col md={field.md} xs={field.xs} key={field.id}>
          <FormField field={field} />
        </Col>
      ))}
    </Row>
  );
};

export default FormRow;
