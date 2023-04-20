import { combineReducers } from '@reduxjs/toolkit';
import { reducer as usersReducer } from './user';

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
