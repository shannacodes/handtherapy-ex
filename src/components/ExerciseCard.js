import { Link } from "react-router-dom";

function ExerciseCard({ exercise }) {
  // Displays exs in a CARD
  return (
    <div className="bg-light text-black border rounded p-4 m-2">
      {/* <img
        src={exercise.image}
        alt={exercise.name}
        style={{ maxWidth: "100%", height: "auto" }}
      /> */}
      <h4>{exercise.name}</h4>
      <p>
        <strong>Description:</strong> {exercise.desc}
        <br></br>
      </p>
      <p>
        <strong>Type:</strong> {exercise.category}
      </p>
      <Link to={"/expage/" + exercise._id}>Details</Link>
    </div>
  );
}

export default ExerciseCard;
