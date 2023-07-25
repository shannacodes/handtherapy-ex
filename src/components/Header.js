import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo2 from "../images/logo3.png";
import darklogo from "../images/darklogo.png";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="text-center">
        <img src={darklogo} alt="Hand Exercise Generator App Logo" />
        <p></p>
        <Navbar className="navbarStyle" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo2} alt="Small navbar logo" width="55" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="text-white" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/random">
                Random
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/crudexercise">
                Create Exercise
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
