import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFirstNameInput,
  updateLastNameInput,
} from "../redux/userForm/userFormAction";

const Form = () => {
  //useselector can access the whole store
  const fName = useSelector((state) => state.firstName);
  const lName = useSelector((state) => state.lastName);
  // console.log(fName);
  
  //To use dispatch in react-redux we use Dispatch
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User Form</h1>
      <form style={{ margin: "20px" }} action="">
        <label>FirstName :</label>
        <input
          onChange={(e) => dispatch(updateFirstNameInput(e.target.value))}
          type="text"
        />
        <hr />
        <label>LastName :</label>
        <input
          onChange={(e) => dispatch(updateLastNameInput(e.target.value))}
          type="text"
        />
      </form>
      <div style={{ margin: "20px" }} className="res">
        <h2>SHOW</h2>
        <p>FirstName: {fName}</p>
        <p>LastName: {lName}</p>
      </div>
    </div>
  );
};

export default Form;
