import React, { useEffect, useState } from "react";
import axios from "axios";
// import { EXERCISES } from "./data/arrays/EXERCISES.js";
import "../src/styles/home.css";
import BrowsePage from "./pages/BrowsePage.js";
import FeaturedPage from "./components/FeaturedPage.js";
import { Route, Routes } from "react-router-dom";
import ExercisePage from "./pages/ExercisePage";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CRUDExercise from "./pages/CRUDExercise.js";
import WelcomePage from "./pages/WelcomePage.js";
import SearchResultsPage from "./pages/SearchResultsPage.js";

function App() {
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/exercises")
      .then((response) => {
        setExerciseList(response.data);
        console.log("Exercise List:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Header />

      <main>
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route
              path="/browse/"
              element={<BrowsePage exerciseList={exerciseList} />}
            />
            <Route
              path="/featured/"
              element={<FeaturedPage exerciseList={exerciseList} />}
            />
            <Route
              path="/exercise/:exerciseId"
              element={<ExercisePage exerciseList={exerciseList} />}
            />
            <Route path="/create" element={<CRUDExercise />} />
            <Route
              path="/search-results/:searchTerm"
              element={<SearchResultsPage />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
