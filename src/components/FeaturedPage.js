import { Container } from "react-bootstrap";

export default function FeaturedPage({ exerciseList }) {
  const featuredExercise =
    exerciseList[Math.floor(Math.random() * exerciseList.length)];

  return (
    <>
      <Container className="py-5">
        <div className="p-3">
          <h5>Check out this featured exercise:</h5>
        </div>
        <div className="bg-light text-black border rounded p-4 m-2">
          <h2>{featuredExercise.name}</h2>
          <p>
            <strong>Description:</strong> {featuredExercise.desc}
          </p>
          <p>
            <strong>Instructions:</strong> {featuredExercise.instr}
          </p>
        </div>
      </Container>
    </>
  );
}
