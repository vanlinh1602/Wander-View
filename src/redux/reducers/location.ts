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
    fetchLocations(state, action: PayloadAction<Location[] | undefined>) {
      if (action.payload) {
        state.data = action.payload;
      }
      state.loading = false;
    },
    fetchLocationRate(
      state,
      action: PayloadAction<{ rating: string; postId: string }>,
    ) {
      const { rating, postId } = action.payload;
      const filter = state.data.filter(loaction => loaction.id !== postId);
      const loaction = state.data.find(({ id }) => id === postId);
      if (loaction) {
        loaction.rating = rating;
        filter.push(loaction);
        state.data = filter;
      }
    },
    addLocation(state, _action: PayloadAction<Location>) {
      state.loading = true;
    },
  },
});

export const { actions, reducer } = locationSlice;
