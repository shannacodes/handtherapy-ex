import axios from "axios";

export const ADD_EXERCISE = "ADD_EXERCISE";
export const EDIT_EXERCISE = "EDIT_EXERCISE";
export const DELETE_EXERCISE = "DELETE_EXERCISE";
export const FETCH_EXERCISES_SUCCESS = "FETCH_EXERCISES_SUCCESS";

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

export const fetchExercisesSuccess = (exercises) => ({
  type: FETCH_EXERCISES_SUCCESS,
  payload: exercises,
});

export const fetchExercises = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3002/exercises");
      dispatch(fetchExercisesSuccess(response.data.exercises));
    } catch (error) {
      // Handle error
    }
  };
};
