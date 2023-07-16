import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { reducer } from "./reducer.js"

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, composedEnhancer);
export default store;