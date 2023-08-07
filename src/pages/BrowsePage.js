import { useState } from "react";
import ExerciseCard from "../components/ExerciseCard";
import { Container, Row, Col } from "react-bootstrap";

export default function HomePage({ exerciseList }) {
  const [exerciseFilter, setExerciseFilter] = useState("Finger");

  let filteredExercises;
  if (exerciseFilter === "All") {
    filteredExercises = exerciseList;
  } else {
    filteredExercises = exerciseList.filter(
      (exercise) => exercise.category === exerciseFilter
    );
  }

  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col className="py-3">
            <h1>Browse Exercises</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4}>
            View exercises by body part:
            <br />
            <br />
            <button
              className="buttonStyle"
              onClick={() => setExerciseFilter("Finger")}
            >
              Fingers
            </button>{" "}
            <button
              className="buttonStyle"
              onClick={() => setExerciseFilter("Wrist")}
            >
              Wrist
            </button>{" "}
            <button
              className="buttonStyle"
              onClick={() => setExerciseFilter("Elbow")}
            >
              Elbow
            </button>{" "}
            <button
              className="buttonStyle"
              onClick={() => setExerciseFilter("Shoulder")}
            >
              Shoulder
            </button>
            <br />
            <button
              className="buttonStyle"
              onClick={() => setExerciseFilter("All")}
            >
              {" "}
              View All Exercises
            </button>
          </Col>
          <Col>
            {filteredExercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
            <br /> <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
