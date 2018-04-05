import {
  ON_GET_USER_CREDENTIALS,
} from '../../modules/actionTypes.js';

export default function userReducer(
    state = {
      id: '',
      username: '',
      email: '',
      isAdmin: false,
    }, action) {
  switch (action.type) {
    case ON_GET_USER_CREDENTIALS:
      return {
        id: action.id,
        username: action.username,
        email: action.email,
        isAdmin: action.isAdmin,
      };
    default:
      return state;
  }
}
