function ExerciseCard ({exercise}) { // Displays exs in a CARD
   return (
    <div className="bg-secondary text-light border p-4 m-2">
        <h3>{exercise.name}</h3>
        <p>Description: {exercise.desc}</p>
        <p><em>Type: {exercise.category}</em></p> 
   </div>
   ) 
}

export default ExerciseCard;
