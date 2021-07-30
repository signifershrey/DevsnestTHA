import './App.css';
import Addtodo from './components/Addtodo';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Addtodo/>
      <List/>
    </div>
  );
}

export default App;
