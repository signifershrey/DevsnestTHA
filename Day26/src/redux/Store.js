import { createStore } from "redux";
import { userFormReducer } from "./userForm/reducer";

//It takes reducer function as parameter
const store = createStore(userFormReducer);

export default store;
 