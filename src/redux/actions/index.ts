import { all } from 'redux-saga/effects';
import usersAction from './user';

export default function* rootSaga() {
  yield all([usersAction()]);
}