import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '../reducers/user';
import type { RootState } from '../type/RootState';

const selectDomain = (state: RootState) => state?.users || initialState;

export const selectUser = createSelector([selectDomain], state => state.user);
