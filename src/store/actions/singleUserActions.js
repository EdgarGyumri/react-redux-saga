import { singleUserTypes } from "../types";

function singleUserLoad(payload) {
  return {
    type: singleUserTypes.SET_USER,
    payload
  }
}

function singleUserLoadError() {
  return {
    type: singleUserTypes.LOAD_USER_ERROR
  }
}

export {
  singleUserLoad,
  singleUserLoadError
}