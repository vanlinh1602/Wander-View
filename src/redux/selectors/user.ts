import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '../reducers/user';
import type { RootState } from '../types/RootState';

const selectDomain = (state: RootState) => state?.user || initialState;

export const selectUser = createSelector([selectDomain], state => state.info);

export const selectUserAdmin = createSelector(
  [selectDomain],
  state => state.admin,
);

export const selectUserID = createSelector(
  [selectDomain],
  state => state.info?.uid,
);

export const selectUserPlans = createSelector(
  [selectDomain],
  state => state.info?.plans,
);

export const selectUserSaves = createSelector(
  [selectDomain],
  state => state.info?.save,
);

export const selectLoadingUser = createSelector(
  [selectDomain],
  state => state.loading,
);
