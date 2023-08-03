import React from "react";
import { useParams, Link } from "react-router-dom";
import { EXERCISES } from "../data/arrays/EXERCISES";
import { Container, Row, Col } from "reactstrap";

export default function SearchResultsPage() {
  const { searchTerm } = useParams();

  const filteredExercises = EXERCISES.filter(
    (exercise) =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col className="p-3">
            <h2>Search Results for "{searchTerm}"</h2>
            {filteredExercises.length === 0 ? (
              <p>No results found.</p>
            ) : (
              <ul>
                {filteredExercises.map((exercise) => (
                  <li key={exercise.id}>
                    <strong>{exercise.name}</strong> - {exercise.desc} -{" "}
                    <Link to={`/exercise/${exercise.id}`}>Details</Link>
                  </li>
                ))}
              </ul>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
