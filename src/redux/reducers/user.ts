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
    fetchUser(state, action: PayloadAction<UserInfo>) {
      state.loading = false;
      if (action.payload) {
        state.info = action.payload;
      } else {
        state.info = {};
      }
    },
  },
});

export const { actions, reducer } = userSlice;
