import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import authSaga from './authSaga';
import usersSaga from './usersSaga';

export const sagaMiddleware = createSagaMiddleware();

export default function* rootSaga() {
  yield all([authSaga(), usersSaga()]);
}
