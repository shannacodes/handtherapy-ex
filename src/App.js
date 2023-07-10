import React, {useState} from "react";
import ViewAllExs from "./ViewAllExs.js";

function App() {
  const [showExercises, setShowExercises] = useState(false); 

  const handleShowExercises = () => {
    setShowExercises(true);
  }

  return (
    <div className='bg-light text-dark border p-5 m-3'>
      <h1>Hand Exercise Generator</h1>
      <p>Click to filter exercises by button below.</p>
      <p><button onClick={handleShowExercises}>View All Exercises</button></p>
      <div>
        {showExercises && <ViewAllExs />}
      </div>
    </div> 
  );
}

export default App;
