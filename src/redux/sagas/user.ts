import type { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

import { backendService } from '../../services';
import { actions } from '../reducers/user';
import type { SignInAction, UserInfo } from '../types/users';

function* signIn(action: SignInAction) {
  const data = action.payload;
  if (data) {
    const { email, uid } = data;
    const result: WithApiResult<UserInfo | null> =
      yield backendService.post<UserInfo>('api/getUser', {
        uid,
        email,
      });
    if (result.kind === 'ok' && result.data) {
      yield put(actions.fetchUser({ ...result.data, uid }));
    }
  }
}

function* updateUser(action: PayloadAction<UserInfo>) {
  const userData = action.payload;
  const updated: WithApiResult<boolean> = yield backendService.post(
    'api/updateUser',
    userData,
  );
  if (updated.kind === 'ok') {
    yield put(actions.fetchUser(userData));
  }
}

export default function* usersSaga() {
  yield takeLatest(actions.signIn.type, signIn);
  yield takeLatest(actions.updateUser.type, updateUser);
}
