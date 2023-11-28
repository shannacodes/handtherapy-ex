import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default function LogoutPage() {
  return (
    <Container className="py-5">
      <Row>
        <Col className="py-3">
          <h1>You've successfully logged out.</h1>
        </Col>
      </Row>
      <Row>
        <Col className="m-3 p-3">
          <div>
            <p>
              Sign in again by clicking <Link to="/users/login">here</Link>.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
