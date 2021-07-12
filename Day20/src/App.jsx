import React, { useState } from "react";
import Card from "./Card";
import "./App.css";

 const Data = [
   {
     food: "Banana 🍌",
     calorie: 110,
   },
   {
     food: "Carrot 🥕",
     calorie: 70,
   },
   {
     food: "Beer 🍻",
     calorie: 200,
   },
   {
     food: "Champaigne 🍾",
     calorie: 179,
   },
   {
     food: "Noodles 🍜",
     calorie: 220,
   },
   {
     food: "Coding 💻",
     calorie: 0,
   },
 ];


function App() {
 
  const [state, setState] = useState(Data);

  const handleDelete = (index) => {
    const newState = state.filter((val, idx) => idx !== index);
    setState(newState);
    // console.log("newSatte");
  };

  return (
    <div className="App">
      {state.map((val, idx) => {
        return (
          <Card
            key={idx} //Key cannot be used as a reference
            name={val.food}
            calorie={val.calorie}
            index={idx}
            handleDelete={handleDelete}
          />
        );
      })}
      
    </div>
  );
}

export default App;
