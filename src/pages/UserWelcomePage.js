import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col className="py-3">
          <h1>Woohoo! You are logged in.</h1>
        </Col>
      </Row>
      <Row>
        <Col className="m-3 p-3">
          <div>
            <p>Login was successful. Now let's make some exercises!</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
