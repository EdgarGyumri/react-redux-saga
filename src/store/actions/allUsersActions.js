import { allUsersTypes } from '../types'

function allUsersLoad(payload){
  return {
    type: allUsersTypes.SET_USERS,
    payload
  }
}
function allUsersLoadError(){
  return {
    type: allUsersTypes.LOAD_USERS_ERROR,
  }
}

export {
  allUsersLoad,
  allUsersLoadError
}