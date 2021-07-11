
import './App.css';
import Item from './Item';

import Fooditem from './Fooditem';
import { List } from './list';
//Useful link - CSS to react-css
function App() {

  const item = {
    title : "Burger",
    cal : 56
  }

  return (
    <div className="App">
      <h1>Calorie Read Only</h1>
      <img src="./images/food-icon" alt="icon" />
      {/* <h2>{item.title}</h2> */}
      <div className="container">
        <Item title={item.title} cal={item.cal} />
        <Item title="Pizza" cal="100" />
        <Item title="Coke" cal="130" />
        {/* <Item title="Brownie" cal="230" />
        <Item title="Momos" cal="80" />
        <Item title="Franky" cal="130" />
        <Item title="Lassania" cal="150" /> */}
        {List.map((food,index) => {
          return <Fooditem key={index} item={food} ></Fooditem>}
          )}
      </div>

    </div>
  );
}

export default App;
