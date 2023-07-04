function ExerciseCard (props) {
   return (
    <div className="bg-secondary text-light border p-4 m-2">
        <h4>{props.exercise.name}</h4>
        <p>{props.exercise.desc}</p>
        <h5>{props.exercise.category}</h5> 
  </div>
   ) 
}

export default ExerciseCard