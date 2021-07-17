import React from 'react'
import './App.css'
import {useState,useEffect} from 'react'

function App() {
  
  const [template, setTemplate] = useState([])
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes");
    .then((res)=>res/jspm)
  })

  return (
    <div className="App">
            
    </div>
  )
}

export default App
