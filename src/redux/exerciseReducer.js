import { ADD_EXERCISE, EDIT_EXERCISE, DELETE_EXERCISE } from "./actions";
import { EXERCISES } from "../data/arrays/EXERCISES";

const initialState = {
  exerciseList: EXERCISES,
};

const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXERCISE:
      return {
        ...state,
        exerciseList: [...state.exerciseList, action.payload],
      };
    case EDIT_EXERCISE:
      return {
        ...state,
        exerciseList: state.exerciseList.map((exercise) =>
          exercise.id === action.payload.exerciseId
            ? { ...exercise, ...action.payload.updatedExercise }
            : exercise
        ),
      };
    case DELETE_EXERCISE:
      return {
        ...state,
        exerciseList: state.exerciseList.filter(
          (exercise) => exercise.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default exerciseReducer;
