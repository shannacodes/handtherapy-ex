import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExerciseCard from "../components/ExerciseCard";

export default function BrowsePage() {
  const [exerciseList, setExerciseList] = useState([]);
  const [exerciseFilter, setExerciseFilter] = useState("Finger");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/exercises");
        if (response.ok) {
          const data = await response.json();
          setExerciseList(data);
        } else {
          console.error("Error fetching exercises:", response.status);
        }
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchData();
  }, []);

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
            <h1>Browse Exercises Below</h1>
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
              <ExerciseCard key={exercise._id} exercise={exercise} />
            ))}
            <br /> <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
