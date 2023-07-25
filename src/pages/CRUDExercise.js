import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExercise, editExercise, deleteExercise } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import ExerciseForm from "../components/ExerciseForm";

export default function CRUDExercise() {
  const dispatch = useDispatch();
  const exerciseList = useSelector((state) => state.exercise.exerciseList);

  const handleAddExercise = (newExerciseData) => {
    const newExercise = {
      id: uuidv4(), // UUID generated
      ...newExerciseData,
    };
    dispatch(addExercise(newExercise));
  };

  const handleEditExercise = (exerciseId, updatedExerciseData) => {
    const updatedExercise = {
      id: exerciseId,
      ...updatedExerciseData,
    };
    dispatch(editExercise(exerciseId, updatedExercise));
  };

  const handleDeleteExercise = (exerciseId) => {
    dispatch(deleteExercise(exerciseId));
  };

  const [editingExercise, setEditingExercise] = useState(null);

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
          <p>
            Fill out the form below, then click the "Add New Exercise" button.
          </p>
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
