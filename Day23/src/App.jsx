import React, { useState } from 'react'
import './App.css'

import {useArray} from './useArray';

function App() {
  const todos = useArray(['Hie' , 'Hey' , 'Hello'])

  return (
    <div className="App">
      <h1>TODO's</h1>
      <button onClick={()=> todos.add(Math.random())}> add</button>
      <br />
      <ul>
        {
          todos.value.map((todo,i) => (
            <li key={i}>
              {todo}
              <button onClick={()=> todos.removeByIndex(i)}>Delete</button>  
            </li>
          ))
        }
      </ul>
      <button onClick={()=>todos.clear()}>Clear</button>
    </div>
  )
}

export default App;
