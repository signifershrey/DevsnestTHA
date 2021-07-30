import todoReducer from "./Todoreducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
