import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function ExercisePage({ exerciseList }) {
  let { exerciseId } = useParams(); // exerciseId matches route path from App.js
  // exerciseId = parseInt(exerciseId); PARSING NOT NECESSARY

  const exercise = exerciseList.find((e) => e._id === exerciseId);

  if (!exercise) {
    return <h2>Exercise not found.</h2>;
  }

  return (
    <Container className="py-5">
      <div>
        {/* <img
          src={exercise.image}
          alt={exercise.name}
          style={{ maxWidth: "100%", height: "auto" }}
        /> */}
        <h3>{exercise.name}</h3>
        <p>
          <strong>Description:</strong> {exercise.desc}
        </p>
        <p>
          <strong>Instructions:</strong> {exercise.instr}
        </p>
        <p>
          <strong>Category:</strong> {exercise.category}
        </p>
      </div>
    </Container>
  );
}
