import ExerciseCard from "./ExerciseCard.js";
import { EXERCISES } from "./EXERCISES.js";

function App() {
  return (
    <div>
      <h1>Hand Exercise Generator</h1>
        {EXERCISES.map( exercise => <ExerciseCard exercise = {exercise} /> ) }
            {/* "For each exercise in the list of exercises, create an ExerciseCard component and show that exercise using the component." */}
    </div> 
  );
}

export default App;
