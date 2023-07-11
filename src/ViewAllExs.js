import ExerciseCard from "./ExerciseCard";
import { EXERCISES } from "./EXERCISES";

const ViewAllExs = () => {
    console.log("Hi, don't worry - the button is working!");

    return (
        <div>
            {EXERCISES.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise} />)}
        </div>
        ); 
    };  

export default ViewAllExs;