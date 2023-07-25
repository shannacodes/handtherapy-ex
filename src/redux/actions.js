export const ADD_EXERCISE = "ADD_EXERCISE";
export const EDIT_EXERCISE = "EDIT_EXERCISE";
export const DELETE_EXERCISE = "DELETE_EXERCISE";

export const addExercise = (newExercise) => ({
  type: ADD_EXERCISE,
  payload: newExercise,
});

export const editExercise = (exerciseId, updatedExercise) => ({
  type: EDIT_EXERCISE,
  payload: { exerciseId, updatedExercise },
});

export const deleteExercise = (exerciseId) => ({
  type: DELETE_EXERCISE,
  payload: exerciseId,
});
