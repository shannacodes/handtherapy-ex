import React, { useState } from "react";

export default function ExerciseForm({ onSubmit }) {
  const [exerciseData, setExerciseData] = useState({
    name: "",
    desc: "",
    category: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExerciseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(exerciseData);
    setExerciseData({
      name: "",
      desc: "",
      category: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <strong>Exercise Name: </strong>
      </label>{" "}
      <input
        type="text"
        name="name"
        value={exerciseData.name}
        onChange={handleChange}
        placeholder="Write the name of your exercise..."
      />
      <br />
      <label>
        <strong>Description: </strong>
      </label>{" "}
      <input
        type="text"
        name="desc"
        value={exerciseData.desc}
        onChange={handleChange}
        placeholder="Write a brief description about your exercise..."
      />
      <br />
      <label>
        <strong>Category: </strong>
      </label>{" "}
      <input
        type="text"
        name="category"
        value={exerciseData.category}
        onChange={handleChange}
        placeholder="Choose one..."
      />
      <br />
      <button className="smallButtonStyle" type="submit">
        Add New Exercise
      </button>
    </form>
  );
}
