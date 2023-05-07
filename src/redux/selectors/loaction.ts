import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '../reducers/location';
import type { RootState } from '../types/RootState';

const selectDomain = (state: RootState) => state?.location || initialState;

export const selectLocations = createSelector(
  [selectDomain],
  state => state.data,
);

export const selectLoadingLocations = createSelector(
  [selectDomain],
  state => state.loading,
);
