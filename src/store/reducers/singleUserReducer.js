import { singleUserTypes } from "../types";

export default function singleUserReducer(state = {}, action) {
  switch (action.type) {
    case singleUserTypes.SET_USER:
      return {
          name: action.payload.name,
          username: action.payload.username,
          email: action.payload.email,
          address: action.payload.address.street
      }
    case singleUserTypes.LOAD_USER_ERROR:
      alert('User loading error, please check user id again')
      return state
    default:
      return state
  }
}