import { Container } from "react-bootstrap";

function Result(props) {
  return (
    <div className="mt-3">
    <Container>
      <h1>El resultado es: {props.result}</h1>
    </Container>
    </div>
  );
}

export default Result;