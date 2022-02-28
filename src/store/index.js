import { applyMiddleware, createStore } from "redux";
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga'
import usersSaga from './saga/usersSaga';

const sagaMiddleware = createSagaMiddleware();

// const logger = store => next => action => {
//   console.log(store, action, 'store');
//   next(action)
// }

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(usersSaga)

export default store