import { all, put, takeEvery } from 'redux-saga/effects';
import { allUsersTypes, singleUserTypes } from '../types';
import actions from './../actions/index';

async function loadSingleUser(action) {
  const id = action.id;
  return await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json())
}

async function loadAllUsers() {
  return await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
}

function* loadSingleUserSaga(action) {
  try {
    const user = yield loadSingleUser(action);
    
    yield put(actions.singleUserActions.singleUserLoad(user))
  } catch (error) {
    console.log(error);
    yield put(actions.singleUserActions.singleUserLoadError())
  }
}

function* loadUsersSaga() {
  try {
    const users = yield loadAllUsers();
    yield put(actions.allUsersActions.allUsersLoad(users))
  } catch (error) {
    yield put(actions.allUsersActions.allUsersLoadError())
  }
}

function* sagaWatcher() {
  yield takeEvery(allUsersTypes.LOAD_USERS, loadUsersSaga)
  yield takeEvery(singleUserTypes.LOAD_USER, loadSingleUserSaga)
}

export default function* rootSaga() {
  yield all([
    sagaWatcher()
  ])
}