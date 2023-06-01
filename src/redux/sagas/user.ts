import type { PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { put, select, takeLatest } from 'redux-saga/effects';

import { backendService } from '../../services';
import { actions } from '../reducers/user';
import { selectUser } from '../selectors/user';
import type { Plan, SignInAction, UserInfo } from '../types/users';

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

function* savePlan(action: PayloadAction<Plan>) {
  const plan = action.payload;
  const user: UserInfo = yield select(selectUser);
  const result: WithApiResult<string> = yield backendService.post(
    'api/updatePlan',
    { userId: user.uid, plan },
  );
  if (result.kind === 'ok') {
    yield put(
      actions.fetchUser({
        plans: {
          ...user.plans,
          [result.data]: plan,
        },
      }),
    );
  }
}

function* removePlan(action: PayloadAction<string>) {
  const planId = action.payload;
  const user: UserInfo = yield select(selectUser);

  const userPlans = _.cloneDeep(user.plans);
  _.unset(userPlans, [planId]);

  const result: WithApiResult<string> = yield backendService.post(
    'api/updatePlan',
    { userId: user.uid, plan: userPlans, isRemove: true },
  );
  if (result.kind === 'ok') {
    yield put(
      actions.fetchUser({
        plans: {
          ...userPlans,
        },
      }),
    );
  }
}

function* updateUserSave(action: PayloadAction<string>) {
  const postId = action.payload;
  const user: UserInfo = yield select(selectUser);

  let dataUpdated;
  if (user.save) {
    if (user.save.includes(postId)) {
      dataUpdated = user.save.filter(id => id !== postId);
    } else {
      dataUpdated = _.cloneDeep(user.save);
      dataUpdated.push(postId);
    }
  } else {
    dataUpdated = [postId];
  }

  const result: WithApiResult<string> = yield backendService.post(
    'api/updateUserSave',
    {
      data: dataUpdated,
      userId: user.uid,
    },
  );

  if (result.kind === 'ok') {
    yield put(
      actions.fetchUser({
        save: dataUpdated,
      }),
    );
  }
}
export default function* usersSaga() {
  yield takeLatest(actions.signIn.type, signIn);
  yield takeLatest(actions.updateUser.type, updateUser);
  yield takeLatest(actions.savePlan.type, savePlan);
  yield takeLatest(actions.removePlan.type, removePlan);
  yield takeLatest(actions.updateUserSave.type, updateUserSave);
}
