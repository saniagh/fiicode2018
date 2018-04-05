import { combineReducers } from 'redux';
import authReducer from '../pages/auth/authReducer.js';
import userReducer from '../pages/auth/userReducer.js';

const rootReducer = combineReducers({
  authReducer: authReducer,
  userReducer: userReducer,
});

export default rootReducer;
