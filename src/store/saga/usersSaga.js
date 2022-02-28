import { put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import types from './../types/index';
import actions from './../actions/index';

function* loadUsers(action) {
  try {
    const response = yield fetch('https://jsonplaceholder.typicode.com/users')
    const result = yield response.json();
    yield put(actions.allUsersActions.allUsersLoad(result))
  } catch (error) {
    console.log(error, 'error');
  }
}

export default function* usersSaga() {
  yield takeEvery(types.allUsersTypes.LOAD_USERS, loadUsers)
}