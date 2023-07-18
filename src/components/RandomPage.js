export default function RandomPage({ exerciseList }) {
  const randomExercise =
    exerciseList[Math.floor(Math.random() * exerciseList.length)];

  return (
    <div className="p-5">
      <h5>Check out this random exercise:</h5>
      <br />
      <h2 className="display-3">{randomExercise.name}</h2>
      <br />
        <strong>Description:</strong> {randomExercise.desc}
    </div>
  );
}
