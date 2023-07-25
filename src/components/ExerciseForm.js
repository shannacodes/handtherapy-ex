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
        placeholder="Exercise Title..."
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
        placeholder="Brief Description..."
      />
      <br />
      <label>
        <strong>Category: </strong>
      </label>{" "}
      <select
        name="category"
        value={exerciseData.category}
        onChange={handleChange}
      >
        <option value="">Choose one...</option>
        <option value="Finger">Finger</option>
        <option value="Thumb">Thumb</option>
        <option value="Wrist">Wrist</option>
        <option value="Forearm">Forearm</option>
        <option value="Elbow">Elbow</option>
        <option value="Shoulder">Shoulder</option>
        <option value="Other">Other</option>
      </select>
      <br />
      <button className="buttonStyle" type="submit">
        Add New Exercise
      </button>
    </form>
  );
}
