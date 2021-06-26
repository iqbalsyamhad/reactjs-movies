import { combineReducers } from "redux";
import { movieReducer } from './movieReducers';

// Using combine reducers to break up reducers into different files
export default combineReducers({
  movieReducer,
});
