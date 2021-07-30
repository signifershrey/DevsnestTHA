import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, loadTodo } from "../actions/index";

const Addtodo = () => {
  const [item, setItem] = useState(" ");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Add a Todo..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch(
            addItem({
              title: item,
              done: false,
            })
          );
          setItem(" ");
        }}
      >
        Add
      </button>
      <div>
        <button
          onClick={() => {
            dispatch(loadTodo());
          }}
        >
          Fake Todos
        </button>
      </div>
      <br />
    </div>
  );
};

export default Addtodo;
