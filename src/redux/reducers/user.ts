import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FetchUsersAction, UserInfo, Users } from '../type/users';

export const initialState: Users = {
  user: {},
  loading: false,
};

const usersSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    fetchUser(state, _action: FetchUsersAction) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<UserInfo>) {
      state.loading = false;
      state.user = action.payload;
    },
  },
});

export const { actions, reducer } = usersSlice;
