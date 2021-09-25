import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { usersReducer } from './users';

const rootReducer = combineReducers({
  authReducer,
  usersReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
