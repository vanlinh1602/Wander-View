import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Users } from '../type/users';

export const initialState: Users = {
  user: {},
  loading: false,
};

const usersSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    fetchUser(state, _action) {
      state.loading = true;
    },
    fetchSuccess(
      state,
      action: PayloadAction<{ name: string; email: string }>,
    ) {
      state.loading = false;
      state.user = action.payload;
    },
  },
});

export const { actions, reducer } = usersSlice;
