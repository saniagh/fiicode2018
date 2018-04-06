import {
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  SHOW_SIGNUP_MODAL,
  HIDE_SIGNUP_MODAL,
} from '../../modules/actionTypes.js';

export default function navigationReducer(
    state = {
      login: {
        isModalVisible: false,
      },
      signup: {
        isModalVisible: false,
      },
    }, action) {
  switch (action.type) {
    case SHOW_LOGIN_MODAL:
      return {
        ...state,
        login: {
          isModalVisible: true,
        },
      };
    case HIDE_LOGIN_MODAL:
      return {
        ...state,
        login: {
          isModalVisible: false,
        },
      };
    case SHOW_SIGNUP_MODAL:
      return {
        ...state,
        signup: {
          isModalVisible: true,
        },
      };
    case HIDE_SIGNUP_MODAL:
      return {
        ...state,
        signup: {
          isModalVisible: false,
        },
      };
    default:
      return state;
  }
};
