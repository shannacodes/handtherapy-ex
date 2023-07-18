import React, { useState } from "react";
import { EXERCISES } from "./data/arrays/EXERCISES.js";
import "../src/styles/home.css";
import HomePage from "./pages/HomePage";
import RandomPage from "./components/RandomPage";
import { Route, Routes } from "react-router-dom";
import ExercisePage from "./pages/ExercisePage";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [exerciseList, setExerciseList] = useState(EXERCISES);

  return (
    <div>
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
      <Footer />
    </div>
  );
}

export default App;
