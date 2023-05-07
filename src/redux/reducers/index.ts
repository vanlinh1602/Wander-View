import { combineReducers } from '@reduxjs/toolkit';

import { reducer as locationReducer } from './location';
import { reducer as userReducer } from './user';

const rootReducer = combineReducers({
  user: userReducer,
  location: locationReducer,
});

export default rootReducer;
