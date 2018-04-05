import {
  ON_USERNAME_OR_EMAIL_CHANGE_LOGIN,
  ON_PASSWORD_CHANGE_LOGIN,
  ON_LOGIN_INITIATE,
  ON_LOGIN_SUCCESS,
  ON_LOGIN_FAILURE,
  ON_CLEAR_STATUS_ERRORS_MESSAGE_LOGIN,
  ON_USERNAME_CHANGE_SIGNUP,
  ON_EMAIL_CHANGE_SIGNUP,
  ON_PASSWORD_CHANGE_SIGNUP,
  ON_CONFIRM_PASSWORD_CHANGE_SIGNUP,
  ON_SIGNUP_INITIATE,
  ON_SIGNUP_SUCCESS,
  ON_SIGNUP_FAILURE,
  ON_CLEAR_STATUS_ERRORS_MESSAGE_SIGNUP,
  ON_REMEMBER_ME_CHANGE,
} from '../../modules/actionTypes.js';

import { onGetUserCredentials } from './userActions.js';

import axios from 'axios';
import qs from 'qs';
import Auth from '../../modules/Auth.js';

export function onUsernameOrEmailChangeAction(usernameOrEmail) {
  return function (dispatch) {
    dispatch({
      type: ON_USERNAME_OR_EMAIL_CHANGE_LOGIN,
      usernameOrEmail: usernameOrEmail,
    });
  };
}

export function onLoginPasswordChangeAction(password) {
  return function (dispatch) {
    dispatch({
      type: ON_PASSWORD_CHANGE_LOGIN,
      password: password,
    });
  };
}

export function onLoginInitiate() {
  return { type: ON_LOGIN_INITIATE };
}

export function onLoginSuccess() {
  return { type: ON_LOGIN_SUCCESS };
}

export function onLoginFailure(errors, message) {
  return {
    type: ON_LOGIN_FAILURE,
    errors: errors ? errors : {},
    message: message,
  };
}

export function onLoginRequestAction(usernameOrEmail, password, rememberMe) {
  return function (dispatch) {
    dispatch(onLoginInitiate());
    return axios({
      method: 'post',
      url: '/authentication/login',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        usernameOrEmail: usernameOrEmail,
        password: password,
        rememberMe: rememberMe,
      }),
    }).then((res) => {
      Auth.authenticateUser(res.data.token);

      axios({
        method: 'post',
        url: '/authentication/decode-credentials',
        headers: {
          'Authorization': `bearer ${res.data.token}`,
          'Content-type': 'application/x-www-form-urlencoded',
        },
      }).then((res) => {
        const response = res.data;
        dispatch(onGetUserCredentials(response.id,
            response.username, response.email, response.isAdmin));
        dispatch(onLoginSuccess());
      }).catch(() => {
        // if something went wrong then there is something wrong with the server or with the jwt
        // it's best to deauthenticate the user
        // this is not likely to run if the first one fails, but this is just a fail check
        Auth.deauthenticateUser();
        location.reload();
      });

    }).catch((err) => {
      dispatch(
          onLoginFailure(err.response.data.errors, err.response.data.message));
    });
  };
}

export function onClearStatusErrorsMessageLoginAction() {
  return { type: ON_CLEAR_STATUS_ERRORS_MESSAGE_LOGIN };
}

export function onUsernameChangeAction(username) {
  return function (dispatch) {
    dispatch({
      type: ON_USERNAME_CHANGE_SIGNUP,
      username: username,
    });
  };
}

export function onEmailChangeAction(email) {
  return function (dispatch) {
    dispatch({
      type: ON_EMAIL_CHANGE_SIGNUP,
      email: email,
    });
  };
}

export function onPasswordChangeAction(password) {
  return function (dispatch) {
    dispatch({
      type: ON_PASSWORD_CHANGE_SIGNUP,
      password: password,
    });
  };
}

export function onConfirmPasswordChangeAction(confirmPassword) {
  return function (dispatch) {
    dispatch({
      type: ON_CONFIRM_PASSWORD_CHANGE_SIGNUP,
      confirmPassword: confirmPassword,
    });
  };
}

export function onSignupInitiate() {
  return { type: ON_SIGNUP_INITIATE };
}

export function onSignupSuccess() {
  location.reload();
  return { type: ON_SIGNUP_SUCCESS };
}

export function onSignupFailure(errors, message) {
  return {
    type: ON_SIGNUP_FAILURE,
    errors: errors,
    message: message,
  };
}

export function onSignupRequestAction(
    username, email, password, confirmPassword) {
  return function (dispatch) {
    dispatch(onSignupInitiate());
    return axios({
      method: 'post',
      url: '/authentication/signup',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      }),
    }).then((res) => {
      Auth.authenticateUser(res.data.token);
      dispatch(onSignupSuccess());
    }).catch((err) => {
      dispatch(
          onSignupFailure(
              err.response.data.errors ? err.response.data.errors : {},
              err.response.data.message));
    });
  };
}

export function onRememberMeChangeAction() {
  return {
    type: ON_REMEMBER_ME_CHANGE,
  };
}

export function onClearStatusErrorsMessageSignupAction() {
  return { type: ON_CLEAR_STATUS_ERRORS_MESSAGE_SIGNUP };
}
