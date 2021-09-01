import React, { FC, ReactElement  , useState , useEffect , useContext} from "react";
import "./App.css";
import ThemeToggler from "./Components/ThemeToggler";
import TodoInput from "./Components/TodoInput";
import TodoItem from "./Components/TodoItem";
import { useThemeContext } from "./context/themeContext";
import { useTodoContext } from "./context/todoContext";


function App() {
  const { todos } = useTodoContext();
  const { theme } = useThemeContext();

  return (
    <div className={`App ${!theme && "dark-theme"}`}>
      <ThemeToggler />
      <TodoInput />
      <div className="todoitem__container">
        {todos.map((val, idx) => (
          <TodoItem key={idx} {...val} index={idx} />
        ))}
      </div>
    </div>
  );
}


//Passing Props in Typescript coming from main.tsx

// const App = ({ title,desc }: AppProps) => {
//   return (
//     <div className="App">
//       <h1>{title}</h1>
//       <h6>{desc}</h6>
//     </div>
//   );
// };

export default App;
