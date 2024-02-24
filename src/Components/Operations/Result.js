import { Container } from "react-bootstrap";

function Result(props) {
  return (
    <div className="bg-primary-subtle mt-3">
    <Container>
      <h1 className="mb-0">El resultado es: {props.result}</h1>
    </Container>
    </div>
  );
}

export default Result;