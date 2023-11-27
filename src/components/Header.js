import React, { useState, useEffect } from "react";
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
  const [tokenIsPresent, setTokenIsPresent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Check if the token is present in localStorage
    const storedToken = localStorage.getItem("token");
    setTokenIsPresent(!!storedToken);
    setIsLoggedIn(true);
  }, []);

  const handleSearch = (value) => {
    setSearchTerm(value);
    history.push(`/search-results/${value}`);
    console.log("searchTerm:", value); // THIS WORKS!
  };

  const handleSubmit = (e) => {
    handleSearch(searchTerm);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    history.push("/users/login");
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
                <button type="submit" className="smallButtonStyle">
                  Search
                </button>
              </form>
            </Col>
            <Col xs={12} className="text-center">
              <img
                src={darklogo}
                alt="Hand Exercise Generator App Logo"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>

        <Navbar className="navbarStyle" expanded={expanded} expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={logo2}
                alt="Small navbar logo"
                width="55"
                className="img-fluid"
              />
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => setExpanded(!expanded)}
            />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="linkStyle" as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link className="linkStyle" as={Link} to="/browse">
                  Browse
                </Nav.Link>
                <Nav.Link className="linkStyle" as={Link} to="/featured">
                  Featured Exercise
                </Nav.Link>
                <Nav.Link className="linkStyle" as={Link} to="/create">
                  Create Exercise
                </Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                {isLoggedIn && tokenIsPresent ? (
                  // User is looged in, show logout link
                  <Nav.Link
                    className="special"
                    as={Link}
                    to="/users/logout"
                    onClick={handleLogout}
                  >
                    Logout
                  </Nav.Link>
                ) : (
                  // User is NOT logged in, show LOGIN link
                  <Nav.Link className="special" as={Link} to="/users/login">
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
