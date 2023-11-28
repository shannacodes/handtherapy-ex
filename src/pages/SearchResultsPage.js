import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

function SearchResultsPage() {
  const { searchTerm } = useParams();
  const [filteredExercises, setFilteredExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://us-central1-hand-ex-gen.cloudfunctions.net/myApp/exercises"
        );

        const data = await response.json();

        const filteredData = data.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            exercise.category
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            exercise.desc.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredExercises(filteredData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [searchTerm]);

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
                  <li key={exercise._id}>
                    <strong>{exercise.name}</strong> - {exercise.desc} -{" "}
                    <Link to={`/expage/${exercise._id}`}>Details</Link>
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

export default SearchResultsPage;
