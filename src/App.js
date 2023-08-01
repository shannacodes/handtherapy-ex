import React, { useState } from "react";
import { EXERCISES } from "./data/arrays/EXERCISES.js";
import "../src/styles/home.css";
import HomePage from "./pages/Browse.js";
import FeaturedPage from "./components/FeaturedPage.js";
import { Route, Routes } from "react-router-dom";
import ExercisePage from "./pages/ExercisePage";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CRUDExercise from "./pages/CRUDExercise.js";
import WelcomePage from "./pages/WelcomePage.js";

function App() {
  const [exerciseList] = useState(EXERCISES); // Removed setExerciseList from this line

  return (
    <div>
      <Header />

      <main>
        <Container className="mt-4">
          <Routes>
            <Route
              path="/"
              element={<WelcomePage />}
            />
            <Route
              path="/browse/"
              element={<HomePage exerciseList={exerciseList} />}
            />
            <Route
              path="/featured/"
              element={<FeaturedPage exerciseList={exerciseList} />}
            />
            <Route
              path="/exercise/:exerciseId"
              element={<ExercisePage exerciseList={exerciseList} />} // : means URL param
            />
            <Route path="/crudexercise" element={<CRUDExercise />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
