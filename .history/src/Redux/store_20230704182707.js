import { createStore } from "react-redux";
import {reducer} from "./reducer.js"

const store = createStore(reducer);

export default store;