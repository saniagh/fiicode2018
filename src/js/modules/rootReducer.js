import { combineReducers } from 'redux';
import authReducer from '../pages/auth/authReducer.js';
import navigationReducer from '../pages/navigation/navigationReducer.js';
import allergiesReducer from '../pages/allergies-page/allergiesReducer.js';
import userReducer from '../pages/auth/userReducer.js';

const rootReducer = combineReducers({
  authReducer: authReducer,
  navigationReducer: navigationReducer,
  allergiesReducer: allergiesReducer,
  userReducer: userReducer,
});

export default rootReducer;
