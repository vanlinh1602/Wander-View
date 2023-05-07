import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { Location } from '../../types/loaction';
import type { LocationState } from '../types/location';

export const initialState: LocationState = {
  data: [],
  loading: false,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    getLocations(state) {
      state.loading = true;
    },
    fetchLocations(state, action: PayloadAction<Location[]>) {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer } = locationSlice;
