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
import LoginPage from "./pages/LoginPage.js";
import UserWelcomePage from "./pages/UserWelcomePage.js";
import SearchResultsPage from "./pages/SearchResultsPage.js";

async function fetchData() {
  try {
    const response = await axios.get("http://localhost:8080/exercises");
    return response.data;
  } catch (error) {
    throw error;
  }
}

function App() {
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(() => {
    async function fetchDataAndSetExerciseList() {
      try {
        const data = await fetchData();
        setExerciseList(data);
        console.log("Exercise List:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchDataAndSetExerciseList();
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
              path="/expage/:exerciseId"
              element={<ExercisePage exerciseList={exerciseList} />}
            />
            <Route path="/create/" element={<CRUDExercise />} />
            <Route path="/users/login" element={<LoginPage />} />
            <Route path="/users/welcome" element={<UserWelcomePage />} />
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
