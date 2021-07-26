import React, { useState } from "react";
import "./App.css";
import  {Provider}  from "react-redux";
import store from "./redux/Store";
import Form from "./component/Form";

function App() {
  // console.log(store);
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hola Redux!</h1>
        <Form/>
      </div>
    </Provider>
  );
}

export default App;
