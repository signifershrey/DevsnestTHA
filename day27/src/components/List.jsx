import { useSelector } from "react-redux";
import {removeItem} from '../actions/index'
import { useDispatch } from "react-redux";
import React from "react";

const List = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h5 style={{ display: "inline-block", margin: "20px" }}>
            {todo.title}
          </h5>
          <button
            onClick={() => {
              dispatch(removeItem(index));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
