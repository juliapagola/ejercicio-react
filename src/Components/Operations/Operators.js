import React from 'react';
import { Form, Col } from 'react-bootstrap';

function Operators() {
  return (
    <>
    <Col>
        <Form.Label>Seleccione una operación: </Form.Label>
        <Form.Select>
            <option value="1">Suma</option>
            <option value="2">Resta</option>
            <option value="3">Multiplicación</option>
            <option value="4">División</option>
        </Form.Select>
    </Col>
    </>
  );
}

export default Operators;