import { all } from 'redux-saga/effects';

import locationSaga from './location';
import usersSaga from './user';

export default function* rootSaga() {
  yield all([usersSaga(), locationSaga()]);
}
