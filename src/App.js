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
import Header from "./components/Header";

function App() {
  const [exerciseList, setExerciseList] = useState(EXERCISES);

  return (
    <div className="text-center">
      <Header />

      <main>
        <Container className="mt-4">
          <Routes>
            <Route
              path="/"
              element={<HomePage exerciseList={exerciseList} />}
            />
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
      </main>
    </div>
  );
}

export default App;
