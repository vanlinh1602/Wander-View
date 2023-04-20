import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { SignInAction, UserInfo, Users } from '../type/users';

export const initialState: Users = {
  user: {},
  loading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signIn(state, _action: SignInAction) {
      state.loading = true;
    },
    fetchUser(state, action: PayloadAction<UserInfo>) {
      state.loading = false;
      if (action.payload) {
        state.user = action.payload;
      } else {
        state.user = {};
      }
    },
  },
});

export const { actions, reducer } = usersSlice;
