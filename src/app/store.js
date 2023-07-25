import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "../redux/exerciseReducer";

export const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
  },
});
