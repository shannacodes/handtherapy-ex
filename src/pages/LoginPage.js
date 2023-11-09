import { Container, Row, Col } from "reactstrap";

export default function UserLogin() {
  return (
    <Container className="py-5">
      <Row>
        <Col className="py-3">
          <h1>Login</h1>
        </Col>
      </Row>
      <Row>
        <Col className="m-3 p-3">
          <div>
            <p>Login Form will go here.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
