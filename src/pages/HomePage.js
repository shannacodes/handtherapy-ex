import { useState } from "react";
import ExerciseCard from "../components/ExerciseCard";

export default function HomePage({exerciseList}) {
  const [exerciseFilter, setExerciseFilter] = useState("Finger");

  let filteredExercises;
  if (exerciseFilter === "All") {
    filteredExercises = exerciseList;
  } else {
    filteredExercises = exerciseList.filter(
      (exercise) => exercise.category === exerciseFilter
    );
  }

  return (
    <div>
      <p>
        View exercises by body part:
        <br />
        <button
          className="buttonStyle"
          onClick={() => setExerciseFilter("Finger")}
        >
          Fingers
        </button>{" "}
        <button
          className="buttonStyle"
          onClick={() => setExerciseFilter("Wrist")}
        >
          Wrist
        </button>{" "}
        <button
          className="buttonStyle"
          onClick={() => setExerciseFilter("Elbow")}
        >
          Elbow
        </button>{" "}
        <button
          className="buttonStyle"
          onClick={() => setExerciseFilter("Shoulder")}
        >
          Shoulder
        </button>
        <br />
        <button
          className="buttonStyle"
          onClick={() => setExerciseFilter("All")}
        >
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
