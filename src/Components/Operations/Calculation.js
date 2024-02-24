import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Operators from "./Operators";

function Calculation(props) {
    
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [operator, setOperator] = useState('');

    const firstNumberHandler = (event) => {
        setFirstNumber(event.target.value);
    }

    const secondNumberHandler = (event) => {
        setSecondNumber(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(operator === 'sum'){
            sumHandler();
        }
        else if(operator === 'substract'){
            substractHandler();
        }
        else if(operator === 'multiply'){
            multiplyHandler();
        }
        else if(operator === 'divide'){
            divideHandler();
        }
        else{
            alert('Seleccione una operación');
        }
    }

    const sumHandler = () => {
        const result = parseFloat(firstNumber) + parseFloat(secondNumber);
        props.calculate(result);
    }

    const substractHandler = () => {
        const result = parseFloat(firstNumber) - parseFloat(secondNumber);
        props.calculate(result);
    }

    const multiplyHandler = () => {
        const result = parseFloat(firstNumber) * parseFloat(secondNumber);
        props.calculate(result);
    }

    const divideHandler = () => {
        const result = parseFloat(firstNumber) / parseFloat(secondNumber);
        props.calculate(result);
    }

    const operatorChange = (operator) =>{
        setOperator(operator);
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
                <Row></Row>
                <Col>
                    <Form.Label>Inserte otro número: </Form.Label>
                    <Form.Control type="text" onChange={secondNumberHandler} value={secondNumber}/>
                </Col>
            </Row>
            <Operators operatorChange={operatorChange}/>
            <Row>
                <Col>
                    <Button type="submit" variant="dark" >Calcular</Button>
                </Col>
            </Row>
        </Form>
    </Container>
    </>
  );
}

export default Calculation;