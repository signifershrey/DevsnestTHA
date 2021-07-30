import rootReducer from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";

//,applyMiddleware()logger is used to console actions which trigger on changing UI.
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
