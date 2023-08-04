import { Link } from "react-router-dom";

function ExerciseCard({ exercise }) {
  // Displays exs in a CARD
  return (
    <div className="bg-light text-black border rounded p-4 m-2">
      <img
        src={exercise.image}
        alt={exercise.name}
        style={{ maxWidth: "100%", height: "auto" }}
      /><br></br><br></br>
      <h3>{exercise.name}</h3>
      <p>
        <strong>Description:</strong> {exercise.desc}
        <br></br>
      </p>
      <p>
        <strong>Type:</strong> {exercise.category}
      </p>
      <Link to={"/exercise/" + exercise.id}>Details</Link>
    </div>
  );
}

export default ExerciseCard;
