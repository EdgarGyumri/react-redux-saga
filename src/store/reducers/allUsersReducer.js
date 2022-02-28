import types from "../types";

export default function allUsersReducer(state = [], action) {
  switch(action.type) {
    case types.allUsersTypes.LOAD_USERS: 
      if(action.payload !== undefined) {
        return [
          ...action.payload
        ]
      }
    default:
      return state
  }
  
}