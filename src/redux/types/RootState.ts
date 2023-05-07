import type { LocationState } from './location';
import type { UserState } from './users';

export type RootState = {
  user: UserState;
  location: LocationState;
};
