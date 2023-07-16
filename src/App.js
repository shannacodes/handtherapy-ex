import React, { useState } from "react";
import logo from "../src/images/logo2.png";
import { EXERCISES } from "./data/arrays/EXERCISES.js";
import "../src/styles/home.css";
import HomePage from "./pages/HomePage";
import RandomPage from "./components/RandomPage";
import { Link, Route, Routes } from "react-router-dom";
import ExerciseCard from "./components/ExerciseCard";
import ExercisePage from "./pages/ExercisePage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const [exerciseList, setExerciseList] = useState(EXERCISES);

  return (
    <div className="bg-white text-dark border p-5 m-5 text-center">
      <img src={logo} alt="Hand Exercise Generator App Logo" />
      <p></p>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Hand and Arm Exercises
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/random">
              Random
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage exerciseList={exerciseList} />} />
          <Route
            path="/random/"
            element={<RandomPage exerciseList={exerciseList} />}
          />
          <Route
            path="/exercise/:exerciseId"
            element={<ExercisePage exerciseList={exerciseList} />} // : means URL param
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
