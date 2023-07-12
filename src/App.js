import React, { useState } from "react";
import ViewAllExs from "./components/ViewAllExs.js";

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
      <h1>Hand Therapy Exercise Generator</h1>
      <p>
        View exercises by body part:
        <br />
        <button className="btn btn-info text-light">Fingers</button>{" "}
        <button className="btn btn-info text-light">Wrist</button>{" "}
        <button className="btn btn-info text-light">Elbow</button>{" "}
        <button className="btn btn-info text-light">Shoulder</button>
      </p>
      <p>
        {showExercises ? (
          <button
            className="btn btn-info text-light"
            onClick={handleClearExercises}
          >
            Clear Exercises
          </button>
        ) : (
          <button
            className="btn btn-info text-light"
            onClick={handleShowExercises}
          >
            View All Exercises
          </button>
        )}
      </p>
      <div className="text-center">{showExercises && <ViewAllExs />}</div>
    </div>
  );
}

export default App;
