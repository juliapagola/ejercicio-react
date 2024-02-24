import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Operators from "./Operators";

function Calculation(props) {
    
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);

    const firstNumberHandler = (event) => {
        setFirstNumber(event.target.value);
    }

    const secondNumberHandler = (event) => {
        setSecondNumber(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.calculate(parseFloat(firstNumber) + parseFloat(secondNumber));
    }

    
  return (
    <>
    <Container>
        <Form onSubmit={submitHandler}>
            <Row>
                <Col>
                    <Form.Label>Inserte un número: </Form.Label>
                    <Form.Control type="text" onChange={firstNumberHandler} value={firstNumber} />
                </Col>
                <Col>
                    <Form.Label>Inserte otro número: </Form.Label>
                    <Form.Control type="text" onChange={secondNumberHandler} value={secondNumber}/>
                </Col>
            </Row>
            <Row>
                <Operators />
            </Row>
            <Row>
                <Col>
                    <Button type="submit" variant="primary" >Calcular</Button>
                </Col>
            </Row>
        </Form>
    </Container>
    </>
  );
}

export default Calculation;