import React, { useState } from "react";
import ViewAllExs from "./components/ViewAllExs.js";
import logo from "../src/images/logo2.png";

function App() {
  const [showExercises, setShowExercises] = useState(false);

  const handleShowExercises = () => {
    setShowExercises(true);
  };

  const handleClearExercises = () => {
    setShowExercises(false);
  };

  return (
    <div className="bg-light text-dark border p-5 m-5 text-center">
      <img src={logo} alt="Hand Exercise Generator App Logo" />
      <br />
      <br />
      <p>
        View exercises by body part:
        <br />
        <button className="btn btn-dark text-light">Fingers</button>{" "}
        <button className="btn btn-dark text-light">Wrist</button>{" "}
        <button className="btn btn-dark text-light">Elbow</button>{" "}
        <button className="btn btn-dark text-light">Shoulder</button>
      </p>
      <p>
        {showExercises ? (
          <button
            className="btn btn-primary text-light"
            onClick={handleClearExercises}
          >
            Clear Exercises
          </button>
        ) : (
          <button
            className="btn btn-dark text-light"
            onClick={handleShowExercises}
          >
            View All Exercises
          </button>
        )}
      </p>
      <br />
      <br />
      <div className="text-center">{showExercises && <ViewAllExs />}</div>
    </div>
  );
}

export default App;
