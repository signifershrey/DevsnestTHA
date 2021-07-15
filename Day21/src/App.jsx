import React, { useState } from "react";
import "./App.css";
// import Form from "./Form";
import UseEFFECT from "./UseEFFECT";
import Card from "./Card";

function App() {
  const [userInput, setUserInput] = useState({food:"" , cals:""});
  const [state, setState] = useState([]);


  const handleDelete = (index) => {
    setState((prevState) => prevState.filter((val,idx) => idx != index));
  }

const handleEdit = (index,food,calorie) => {
  
}
  return (
    <div className="App">
      <p>Learning Use Effect and Forms (Hidden from this Page) </p>
      {/* <UseEFFECT /> */}
      {/* <Form /> */}
      <br />
      <h1> Calorie Tracker </h1>
      <br />
      <hr />
      <form>
        <label>
          Enter Food
          <input type="text" placeholder="Add Item"></input>
        </label>
        <br></br>
        <label>
          Enter Calorie
          <input type="number" placeholder="Enter Calorie"></input>
        </label>
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
