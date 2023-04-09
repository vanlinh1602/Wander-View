import { put, takeLatest } from 'redux-saga/effects';

function* fetchUsers() {
  const response = {
    data: {
      name: 'Linh',
      email: '123@gmail.com',
    },
  };
  yield put({ type: 'FETCH_SUCCESS', payload: response.data });
}

export default function* usersAction() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}
