import React from "react";

const Card = ({ name, calorie, handleDelete, index }) => {
  return (
    <div style={{ border: "2px solid black", width: "400px", margin: "5px" }}>
      <h2>Item : {name}</h2>
      <p>
        {name} contains {calorie} calories.
      </p>
      <button onClick={() => handleDelete(index) }>
        Delete
      </button>
    </div>
  );
};

export default Card;
