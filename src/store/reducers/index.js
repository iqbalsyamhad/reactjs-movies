import { combineReducers } from "redux";
import { moviesReducer } from './moviesReducers';
import { movieSingleReducer } from "./movieSingleReducers";

// Using combine reducers to break up reducers into different files
export default combineReducers({
  moviesReducer,
  movieSingleReducer
});
