export default function RandomPage({ exerciseList }) {
  const randomExercise =
    exerciseList[Math.floor(Math.random() * exerciseList.length)];

  return (
    <div>
      <h5>Check out this random exercise:</h5>
      <br />
      <br />
      <h2 className="display-3">{randomExercise.name}</h2>
      <br />
      <br />
      <p>
        <strong>Description:</strong> {randomExercise.desc}
      </p>
    </div>
  );
}
