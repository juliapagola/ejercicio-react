import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function Calculation() {
    
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(0);

    const firstNumberHandler = (event) => {
        setFirstNumber(event.target.value);
    }

    const secondNumberHandler = (event) => {
        setSecondNumber(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
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
                <Col>
                    <Form.Label>Resultado: {result}</Form.Label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" >Calcular</Button>
                </Col>
            </Row>
        </Form>
    </Container>
    </>
  );
}

export default Calculation;