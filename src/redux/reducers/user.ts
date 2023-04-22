import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { SignInAction, User, UserInfo } from '../types/users';

export const initialState: User = {
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
  },
});

export const { actions, reducer } = userSlice;
