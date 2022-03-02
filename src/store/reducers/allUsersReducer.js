import { allUsersTypes } from "../types";

export default function allUsersReducer(state = [], action) {
  switch(action.type) {
    case allUsersTypes.SET_USERS:
      if(action.payload !== undefined) {
        return [
          ...action.payload
        ]
      }
      break;
    case allUsersTypes.LOAD_USERS_ERROR:
      console.log('error');
      alert('Users loading error, please reload page')
      return state
    default:
      return state
  }  
}