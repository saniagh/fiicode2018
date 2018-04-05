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

export default function authReducer(
    state = {
      login: {
        usernameOrEmail: '',
        password: '',
        rememberMe: false,
        errors: {},
        message: '',
        status: 'NOT_ATTEMPTED',
      },
      signup: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {},
        message: '',
        status: 'NOT_ATTEMPTED',
      },
    }, action) {
  switch (action.type) {
    case ON_USERNAME_OR_EMAIL_CHANGE_LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          usernameOrEmail: action.usernameOrEmail,
        },
      };
    case ON_PASSWORD_CHANGE_LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          password: action.password,
        },
      };
    case ON_LOGIN_INITIATE:
      return {
        ...state,
        login: {
          ...state.login,
          status: 'ATTEMPTING',
        },
      };
    case ON_LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          status: 'SUCCESS',
        },
      };
    case ON_LOGIN_FAILURE:
      return {
        ...state,
        login: {
          ...state.login,
          status: 'FAILURE',
          errors: action.errors,
          message: action.message,
        },
      };
    case ON_CLEAR_STATUS_ERRORS_MESSAGE_LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          status: 'NOT_ATTEMPTED',
          errors: {},
          message: '',
        },
      };
    case ON_USERNAME_CHANGE_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          username: action.username,
        },
      };
    case ON_EMAIL_CHANGE_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          email: action.email,
        },
      };
    case ON_PASSWORD_CHANGE_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          password: action.password,
        },
      };
    case ON_CONFIRM_PASSWORD_CHANGE_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          confirmPassword: action.confirmPassword,
        },
      };
    case ON_SIGNUP_INITIATE:
      return {
        ...state,
        signup: {
          ...state.signup,
          status: 'ATTEMPTING',
        },
      };
    case ON_SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          ...state.signup,
          status: 'SUCCESS',
        },
      };
    case ON_SIGNUP_FAILURE:
      return {
        ...state,
        signup: {
          ...state.signup,
          status: 'FAILURE',
          errors: action.errors,
          message: action.message,
        },
      };
    case ON_CLEAR_STATUS_ERRORS_MESSAGE_SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          status: 'NOT_ATTEMPTED',
          errors: {},
          message: '',
        },
      };
    case ON_REMEMBER_ME_CHANGE:
      return {
        ...state,
        login: {
          ...state.login,
          rememberMe: !state.login.rememberMe,
        },
      };
    default:
      return state;
  }
};
