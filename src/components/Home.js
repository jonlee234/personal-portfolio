import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import picture from "../images/laptop_black.jpeg";

function Home() {
  return (
    <Container fluid="true">
      <Row>
        <Col>
          <h1>Jonathane Leavell</h1>
          <h1>Junior Web Developer</h1>
        </Col>
        <Col className="d-flex justify-content-end">
          <img src={picture} alt="laptop" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
