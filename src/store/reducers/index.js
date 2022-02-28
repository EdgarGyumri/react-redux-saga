import { combineReducers } from "redux";
import allUsersReducer from "./allUsersReducer";

const rootReducer = combineReducers({
  users: allUsersReducer
});

export default rootReducer