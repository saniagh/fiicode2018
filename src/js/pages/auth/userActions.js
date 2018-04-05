import {
  ON_GET_USER_CREDENTIALS,
} from '../../modules/actionTypes.js';

export function onGetUserCredentials(id, username, email, isAdmin) {
  return {
    type: ON_GET_USER_CREDENTIALS,
    id: id,
    username: username,
    email: email,
    isAdmin: isAdmin,
  };
}
