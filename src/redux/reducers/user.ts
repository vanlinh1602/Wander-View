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
    fetchUser(state, action: PayloadAction<UserInfo | undefined>) {
      state.loading = false;
      if (action.payload) {
        state.info = {
          ...state.info,
          ...action.payload,
        };
      } else {
        state.info = {};
      }
    },
    updateUser(state, _action: PayloadAction<UserInfo>) {
      state.loading = true;
    },
  },
});

export const { actions, reducer } = userSlice;
