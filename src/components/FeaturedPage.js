export default function FeaturedPage({ exerciseList }) {
  const featuredExercise =
    exerciseList[Math.floor(Math.random() * exerciseList.length)];

  return (
    <div className="p-5">
      <h5>Check out this featured exercise:</h5>
      <br />
      <h2 className="display-3">{featuredExercise.name}</h2>
      <br />
        <strong>Description:</strong> {featuredExercise.desc}
    </div>
  );
}
