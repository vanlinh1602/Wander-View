import { put, takeLatest } from 'redux-saga/effects';

import { actions } from '../reducers/user';
import type { SignInAction, UserInfo } from '../type/users';
import { backendService } from '../../services';

function* signIn(action: SignInAction) {
  const data = action.payload;
  if (data) {
    const { email, uid } = data;
    const result: WithApiResult<UserInfo | null> =
      yield backendService.post<UserInfo>('api/user', {
        uid,
        email,
      });
    if (result.kind === 'ok') {
      if (result.data) {
        yield put(actions.fetchUser(result.data));
      }
    }
  }
}

export default function* usersSaga() {
  yield takeLatest(actions.signIn.type, signIn);
}
