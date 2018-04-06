import {
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  SHOW_SIGNUP_MODAL,
  HIDE_SIGNUP_MODAL,
} from '../../modules/actionTypes.js';

export function onShowLoginModalAction() {
  return function (dispatch) {
    dispatch({
      type: SHOW_LOGIN_MODAL,
    });
  };
}

export function onHideLoginModalAction() {
  return function (dispatch) {
    dispatch({
      type: HIDE_LOGIN_MODAL,
    });
  };
}

export function onShowSignupModalAction() {
  return function (dispatch) {
    dispatch({
      type: SHOW_SIGNUP_MODAL,
    });
  };
}

export function onHideSignupModalAction() {
  return function (dispatch) {
    dispatch({
      type: HIDE_SIGNUP_MODAL,
    });
  };
}
