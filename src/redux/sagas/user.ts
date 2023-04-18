import { put, takeLatest } from 'redux-saga/effects';

import { actions } from '../reducers/user';

function* fetchUsers() {
  const response = {
    data: {
      name: 'Linh',
      email: '123@gmail.com',
    },
  };
  yield put(actions.fetchSuccess(response.data));
}

export default function* usersSaga() {
  yield takeLatest(actions.fetchUser.type, fetchUsers);
}
