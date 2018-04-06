import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  onUsernameOrEmailChangeAction,
  onLoginPasswordChangeAction,
  onLoginRequestAction,
  onClearStatusErrorsMessageLoginAction,
  onRememberMeChangeAction,
} from '../authActions.js';
import {
  onHideLoginModalAction,
  onShowSignupModalAction,
} from '../../navigation/navigationActions';

import Login from './Login.jsx';

let createHandlers = function (dispatch) {
  let onUsernameOrEmailChange = function (usernameOrEmail) {
    dispatch(onUsernameOrEmailChangeAction(usernameOrEmail));
  };

  let onPasswordChange = function (password) {
    dispatch(onLoginPasswordChangeAction(password));
  };

  let onLogin = function (usernameOrEmail, password, rememberMe) {
    dispatch(onLoginRequestAction(usernameOrEmail, password, rememberMe));
  };

  let onClearStatusErrorsMessage = function () {
    dispatch(onClearStatusErrorsMessageLoginAction());
  };

  let onHideLoginModal = function () {
    dispatch(onHideLoginModalAction());
  };

  let onShowSignupModal = function () {
    dispatch(onShowSignupModalAction());
  };

  let onRememberMeChangeHandler = function () {
    dispatch(onRememberMeChangeAction());
  };

  return {
    onUsernameOrEmailChange,
    onPasswordChange,
    onLogin,
    onHideLoginModal,
    onShowSignupModal,
    onClearStatusErrorsMessage,
    onRememberMeChangeHandler,
  };
};

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.handlers = createHandlers(this.props.dispatch);
  }

  onUsernameOrEmailChange = (e) => {
    this.handlers.onUsernameOrEmailChange(e.target.value);
  };

  onPasswordChange = (e) => {
    this.handlers.onPasswordChange(e.target.value);
  };

  onRedirect = () => {
  };

  onLogin = () => {
    this.handlers.onLogin(this.props.usernameOrEmail, this.props.password, this.props.rememberMe);
  };

  onClearStatusErrorsMessage = () => {
    this.handlers.onClearStatusErrorsMessage();
  };

  onHideLoginModal = () => {
    this.handlers.onHideLoginModal();
  };

  onShowSignupModal = () => {
    this.handlers.onShowSignupModal();
  };

  render() {
    return <Login usernameOrEmail={this.props.usernameOrEmail}
                  password={this.props.password}
                  status={this.props.status}
                  errors={this.props.errors}
                  message={this.props.message}
                  onUsernameOrEmailChange={this.onUsernameOrEmailChange}
                  onPasswordChange={this.onPasswordChange}
                  onRedirect={this.onRedirect}
                  onLogin={this.onLogin}
                  onClearStatusErrorsMessage={this.onClearStatusErrorsMessage}
                  onRememberMeChangeHandler={this.handlers.onRememberMeChangeHandler}
                  onHideLoginModal={this.onHideLoginModal}
                  onShowSignupModal={this.onShowSignupModal}/>;
  }
}
LoginView.propTypes = {
  usernameOrEmail: PropTypes.string,
  password: PropTypes.string,
  status: PropTypes.string,
};

LoginView.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    usernameOrEmail: state.authReducer.login.usernameOrEmail,
    password: state.authReducer.login.password,
    rememberMe: state.authReducer.login.rememberMe,
    status: state.authReducer.login.status,
    errors: state.authReducer.login.errors,
    message: state.authReducer.login.message,
  };
};

export default connect(mapStateToProps)(LoginView);
