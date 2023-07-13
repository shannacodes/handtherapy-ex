import React, { useState } from "react";
import logo from "../src/images/logo2.png";
import { EXERCISES } from "./data/arrays/EXERCISES.js";
import ExerciseCard from "./components/ExerciseCard.js";
import "../src/buttonStyle.css"

function App() {
  // const exBtn = {
  //   color: "white",
  //   backgroundColor: "#5080FD",
  //   padding: "14px",
  //   margin: "4px 2px",
  //   fontSize: "18px",
  //   fontWeight: "bold",
  //   border: "none",
  //   borderRadius: "8px",
  // };

  const [exerciseFilter, setExerciseFilter] = useState("Finger");

  let filteredExercises;
  if (exerciseFilter === "All") {
    filteredExercises = EXERCISES;
  } else {
    filteredExercises = EXERCISES.filter(
      (exercise) => exercise.category === exerciseFilter
    );
  }

  return (
    <div className="bg-light text-dark border p-5 m-5 text-center">
      <img src={logo} alt="Hand Exercise Generator App Logo" />
      <br />
      <p>
        View exercises by body part:
        <br />
        <button className="buttonStyle" onClick={() => setExerciseFilter("Finger")}>
          Fingers
        </button>{" "}
        <button className="buttonStyle" onClick={() => setExerciseFilter("Wrist")}>
          Wrist
        </button>{" "}
        <button className="buttonStyle" onClick={() => setExerciseFilter("Elbow")}>
          Elbow
        </button>{" "}
        <button className="buttonStyle" onClick={() => setExerciseFilter("Shoulder")}>
          Shoulder
        </button>
        <br />
        <button className="buttonStyle" onClick={() => setExerciseFilter("All")}>
          {" "}
          View All Exercises
        </button>
        <br />
        <br />
      </p>
      <div>
        {filteredExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}

export default App;
