export default function RandomPage({ exerciseList }) {
  const randomExercise =
    exerciseList[Math.floor(Math.random() * exerciseList.length)];

  return (
    <div>
      <h5>Check out this random exercise:</h5>
      <h2 className="display-1">{randomExercise.name}</h2>
    </div>
  );
}
