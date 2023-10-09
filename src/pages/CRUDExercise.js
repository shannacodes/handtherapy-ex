import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteExercise } from "../redux/actions";
import ExerciseForm from "../components/ExerciseForm";
import axios from "axios";

export default function CRUDExercise() {
  const dispatch = useDispatch();
  const [exerciseList, setExerciseList] = useState([]);
  const [editingExercise, setEditingExercise] = useState(null);
  const resource = "http://localhost:3002/exercises";

  useEffect(() => {
    axios
      .get(resource)
      .then((response) => {
        setExerciseList(response.data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  const handleAddExercise = (newExerciseData) => {
    axios
      .post(resource, newExerciseData)
      .then((response) => {
        setExerciseList([...exerciseList, response.data]);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  const handleEditExercise = (exerciseId, updatedExerciseData) => {
    axios
      .put(`${resource}/${exerciseId}`, updatedExerciseData)
      .then((response) => {
        const updatedExercises = exerciseList.map((exercise) => {
          if (exercise.id === exerciseId) {
            return { ...exercise, ...updatedExerciseData };
          }
          return exercise;
        });

        setExerciseList(updatedExercises);

        // Clear the editing state
        setEditingExercise(null);
      })
      .catch((error) => {
        // Handle error here
      });
  };

  const handleDeleteExercise = (exerciseId) => {
    // Make a DELETE request to delete the exercise on the server.
    axios
      .delete(`${resource}/${exerciseId}`)
      .then((response) => {
        // Dispatch an action to remove the exercise from Redux state.
        dispatch(deleteExercise(exerciseId));

        setExerciseList((prevExerciseList) =>
          prevExerciseList.filter((exercise) => exercise.id !== exerciseId)
        );
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <div>
      {editingExercise ? (
        <>
          <h2>Edit Exercise</h2>
          <ExerciseForm
            onSubmit={(updatedExerciseData) => {
              handleEditExercise(editingExercise.id, updatedExerciseData);
              setEditingExercise(null); // Clear the editing state
            }}
            initialData={editingExercise}
          />
          <br />
        </>
      ) : (
        <>
          <h2>Create Your Own Exercise</h2>
          <p>Fill out the form below, then click the "Submit" button.</p>
          <ExerciseForm onSubmit={handleAddExercise} />
          <br />
          <br />
          <h2>List of Exercises</h2>
          <ul>
            {exerciseList.map((exercise) => (
              <li key={exercise.id}>
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
                  onClick={() => handleDeleteExercise(exercise.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
