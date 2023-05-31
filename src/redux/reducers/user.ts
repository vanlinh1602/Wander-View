import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Plan, SignInAction, UserInfo, UserState } from '../types/users';

export const initialState: UserState = {
  info: {},
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn(state, _action: SignInAction) {
      state.loading = true;
    },
    signOut(state) {
      state.info = {};
    },
    fetchUser(state, action: PayloadAction<UserInfo>) {
      state.loading = false;
      state.info = {
        ...state.info,
        ...action.payload,
      };
    },
    updateUser(state, _action: PayloadAction<UserInfo>) {
      state.loading = true;
    },
    savePlan(state, _action: PayloadAction<Plan>) {
      state.loading = true;
    },
    removePlan(state, _action: PayloadAction<string>) {
      state.loading = true;
    },
  },
});

export const { actions, reducer } = userSlice;
