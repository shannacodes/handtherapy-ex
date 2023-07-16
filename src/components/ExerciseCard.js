import { Link } from "react-router-dom";

function ExerciseCard({ exercise }) {
  // Displays exs in a CARD
  return (
    <div className="bg-light text-black border rounded p-4 m-2">
      <h3>{exercise.name}</h3>
      <p>Description: {exercise.desc}</p>
      <p>
        <em>Type: {exercise.category}</em>
      </p>
      <Link to={"/exercise/" + exercise.id}>Details</Link>
    </div>
  );
}

export default ExerciseCard;
