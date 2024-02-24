import React from 'react';
import { Col, Button} from 'react-bootstrap';
import { useState } from 'react';

function Operators() {

    const [operator, setOperator] = useState('');
    const [variant, setVariant] = useState({
        sum: 'primary',
        substract: 'primary',
        multiply: 'primary',
        divide: 'primary'
    });

    const clickHandler = (event) => {
        setOperator(event.target.value);
        setVariant({
            sum: 'primary',
            substract: 'primary',
            multiply: 'primary',
            divide: 'primary'
        });
        setVariant({
            [event.target.value]: 'outline-primary'
        });
    }

  return (
    <>
        <Col>
        <Button variant={variant['sum']} value={'sum'} className='my-3 me-3' onClick={clickHandler}>Sumar</Button>
        <Button variant={variant['substract']} value={'substract'} className='m-3' onClick={clickHandler}>Restar</Button>
        <Button variant={variant['multiply']} value={'multiply'} className='m-3' onClick={clickHandler}>Multiplicar</Button>
        <Button variant={variant['divide']} value={'divide'} className='m-3' onClick={clickHandler}>Dividir</Button>
        </Col>
    </>
  );
}

export default Operators;