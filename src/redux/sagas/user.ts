import { put, takeLatest } from 'redux-saga/effects';

import { actions } from '../reducers/user';
import type { FetchUsersAction, UserInfo } from '../type/users';
import { backendService } from '../../services';

function* fetchUsers(action: FetchUsersAction) {
  const user = action.payload?.user;
  const result: WithApiResult<UserInfo | null> =
    yield backendService.post<UserInfo>('api/user', user);
  if (result.kind === 'ok') {
    if (result.data) {
      yield put(actions.fetchSuccess(result.data));
    }
  }
}

export default function* usersSaga() {
  yield takeLatest(actions.fetchUser.type, fetchUsers);
}
