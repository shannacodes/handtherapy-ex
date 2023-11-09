import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteExercise } from "../redux/actions";
import ExerciseForm from "../components/ExerciseForm";
import { Container } from "reactstrap";

export default function CRUDExercise() {
  const dispatch = useDispatch();
  const [exerciseList, setExerciseList] = useState([]);
  const [editingExercise, setEditingExercise] = useState(null);
  const resource = "http://localhost:8080/exercises"; // important to run local server on this specific port

  useEffect(() => {
    // Fetch exercise data when the component mounts
    fetch(resource)
      .then((response) => response.json())
      .then((data) => setExerciseList(data))
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  const handleAddExercise = async (newExerciseData) => {
    try {
      const response = await fetch(resource, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQ4NmJiYzUyMzUzOTY2NDM3NDZmNzUiLCJpYXQiOjE2OTkzODU2MjYsImV4cCI6MTY5OTM4OTIyNn0.WCLwQO8qnvwhffM9IM190xQ-JmISPN-lB9FVG9O2Cz4",
        },
        body: JSON.stringify(newExerciseData),
      });
      const data = await response.json();
      setExerciseList([...exerciseList, data]);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleEditExercise = async (exerciseId, updatedExerciseData) => {
    try {
      const response = await fetch(`${resource}/${exerciseId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQ4NmJiYzUyMzUzOTY2NDM3NDZmNzUiLCJpYXQiOjE2OTkzODU2MjYsImV4cCI6MTY5OTM4OTIyNn0.WCLwQO8qnvwhffM9IM190xQ-JmISPN-lB9FVG9O2Cz4",
        },
        body: JSON.stringify(updatedExerciseData),
      });
      if (response.ok) {
        const updatedExercises = exerciseList.map((exercise) => {
          if (exercise._id === exerciseId) {
            return { ...exercise, ...updatedExerciseData };
          }
          return exercise;
        });
        setExerciseList(updatedExercises);
        setEditingExercise(null);
      } else {
        // Handle the error appropriately
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleDeleteExercise = async (exerciseId) => {
    try {
      const response = await fetch(`${resource}/${exerciseId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQ4NmJiYzUyMzUzOTY2NDM3NDZmNzUiLCJpYXQiOjE2OTkzODU2MjYsImV4cCI6MTY5OTM4OTIyNn0.WCLwQO8qnvwhffM9IM190xQ-JmISPN-lB9FVG9O2Cz4",
        },
      });
      if (response.ok) {
        // Dispatch an action to remove the exercise from Redux state
        dispatch(deleteExercise(exerciseId));
        setExerciseList((prevExerciseList) =>
          prevExerciseList.filter((exercise) => exercise._id !== exerciseId)
        );
      } else {
        // Handle the error appropriately
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      {editingExercise ? (
        <>
          <Container className="py-5">
            <h2>Edit Exercise</h2>
            <ExerciseForm
              onSubmit={(updatedExerciseData) => {
                handleEditExercise(editingExercise._id, updatedExerciseData);
                setEditingExercise(null); // Clear the editing state
              }}
              initialData={editingExercise}
            />
            <br />
          </Container>
        </>
      ) : (
        <>
          <Container className="py-5">
            <h2>Create Your Own Exercise</h2>
            <p>Fill out the form below, then click the "Submit" button.</p>
            <ExerciseForm onSubmit={handleAddExercise} />
            <br />
            <br />
            <h2>List of Exercises</h2>
            <ul>
              {exerciseList.map((exercise) => (
                <li key={exercise._id}>
                  <strong>Exercise Name:</strong> {exercise.name}
                  <br />
                  <strong>Description:</strong> {exercise.desc}
                  <br />
                  <strong>Instructions:</strong> {exercise.instr}
                  <br />
                  <strong>Category:</strong> {exercise.category} <br />
                  <button
                    className="smallButtonStyle"
                    onClick={() => setEditingExercise(exercise)}
                  >
                    Edit
                  </button>
                  <button
                    className="smallDeleteButtonStyle"
                    onClick={() => handleDeleteExercise(exercise._id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </Container>
        </>
      )}
    </div>
  );
}
