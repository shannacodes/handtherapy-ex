import { Container, Row, Col } from "reactstrap";

export default function WelcomePage() {
  return (
    <Container className="py-5">
      <Row>
        <Col className="py-3">
          <h1>Welcome</h1>
        </Col>
      </Row>
      <Row>
        <Col className="m-3 p-3">
          <div>
            <p>
              <strong>The Hand Exercise Generator</strong> aims to help physical
              and occupational therapists (and other related professionals) to
              create and share custom hand and upper extremity exercises and
              home programs easily, efficiently, and sustainably.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
