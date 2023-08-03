import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import logo2 from "../images/logo3.png";
import darklogo from "../images/darklogo.png";
import SearchBar from "./SearchBar";
import { createBrowserHistory } from "history";
import "../styles/header.css";

const Header = () => {
  const history = createBrowserHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
    history.push(`/search-results/${value}`);
    console.log("searchTerm:", value); // THIS WORKS!
  };

  const handleSubmit = (e) => {
    handleSearch(searchTerm);
  };

  return (
    <header>
      <div>
        <Container>
          <Row>
            <Col xs={12} className="text-right">
              <form
                className="d-flex justify-content-end p-3"
                onSubmit={handleSubmit}
              >
                <SearchBar onChange={handleSearch} />
                <button type="submit">Search</button>
              </form>
            </Col>
            <Col xs={12} className="text-center">
              <img src={darklogo} alt="Hand Exercise Generator App Logo" />
            </Col>
          </Row>
        </Container>

        <Navbar className="navbarStyle" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo2} alt="Small navbar logo" width="55" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="text-white" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/browse">
                Browse
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/featured">
                Featured Exercise
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
