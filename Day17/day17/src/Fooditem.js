import React from "react";
import './Fooditem.css';

const Fooditem = ({ item }) => {
  const { food, calorie } = item;
  return (
    <div className="fooditem" >
      <h2>
        {food} contains {calorie} calories
      </h2>
    </div>
  );
};

export default Fooditem;
