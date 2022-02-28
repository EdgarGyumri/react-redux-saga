import types from '../types'

function allUsersLoad(payload){
  return {
    type: types.allUsersTypes.LOAD_USERS,
    payload
  }
}

export {
  allUsersLoad
}