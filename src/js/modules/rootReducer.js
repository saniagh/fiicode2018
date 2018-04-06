import { combineReducers } from 'redux';
import authReducer from '../pages/auth/authReducer.js';
import navigationReducer from '../pages/navigation/navigationReducer.js';
import userReducer from '../pages/auth/userReducer.js';

const rootReducer = combineReducers({
  authReducer: authReducer,
  navigationReducer: navigationReducer,
  userReducer: userReducer,
});

export default rootReducer;
