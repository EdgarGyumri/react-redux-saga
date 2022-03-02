import { combineReducers } from "redux";
import allUsersReducer from "./allUsersReducer";
import singleUserReducer from './singleUserReducer';

const rootReducer = combineReducers({
  users: allUsersReducer,
  singleUser: singleUserReducer
});

export default rootReducer