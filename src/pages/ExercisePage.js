import { useParams } from "react-router-dom";

export default function ExercisePage({ exerciseList }) {
  let { exerciseId } = useParams(); // exerciseId matches route path from App.js
  exerciseId = parseInt(exerciseId);

  const exercise = exerciseList.find((e) => e.id === exerciseId);

  if (!exercise) {
    return <h2>Game not found.</h2>;
  }

  return (
    <div>
      <h3>{exercise.name}</h3>
      <p>Description: {exercise.desc}</p>
      <p>Type: {exercise.category}</p>
    </div>
  );
}
