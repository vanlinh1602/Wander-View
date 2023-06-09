import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Plan, SignInAction, UserInfo, UserState } from '../types/users';

export const initialState: UserState = {
  info: {},
  admin: false,
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
      state.admin = false;
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
    fetchAdmin(state, action: PayloadAction<boolean>) {
      state.admin = action.payload;
    },
    savePlan(state, _action: PayloadAction<Plan>) {
      state.loading = true;
    },
    removePlan(state, _action: PayloadAction<string>) {
      state.loading = true;
    },
    updateUserSave(state, _action: PayloadAction<string>) {
      state.loading = true;
    },
  },
});

export const { actions, reducer } = userSlice;
