import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  onUsernameChangeAction,
  onEmailChangeAction,
  onPasswordChangeAction,
  onConfirmPasswordChangeAction,
  onSignupRequestAction,
  onClearStatusErrorsMessageSignupAction,
} from '../authActions.js';
import {
  onShowLoginModalAction,
  onHideSignupModalAction,
} from '../../navigation/navigationActions.js';

import Signup from './Signup.jsx';

let createHandlers = function (dispatch) {
  let onUsernameChange = function (username) {
    dispatch(onUsernameChangeAction(username));
  };

  let onEmailChange = function (email) {
    dispatch(onEmailChangeAction(email));
  };

  let onPasswordChange = function (password) {
    dispatch(onPasswordChangeAction(password));
  };

  let onConfirmPasswordChange = function (confirmPassword) {
    dispatch(onConfirmPasswordChangeAction(confirmPassword));
  };

  let onSignup = function (username, email, password, confirmPassword) {
    dispatch(onSignupRequestAction(username, email, password, confirmPassword));
  };

  let onClearStatusErrorsMessage = function () {
    dispatch(onClearStatusErrorsMessageSignupAction());
  };

  let onShowLoginModal = function () {
    dispatch(onShowLoginModalAction());
  };

  let onHideSignupModal = function () {
    dispatch(onHideSignupModalAction());
  };

  return {
    onUsernameChange,
    onEmailChange,
    onPasswordChange,
    onConfirmPasswordChange,
    onSignup,
    onClearStatusErrorsMessage,
    onShowLoginModal,
    onHideSignupModal,
  };
};

class SignupView extends Component {
  constructor(props) {
    super(props);
    this.handlers = createHandlers(this.props.dispatch);

    this.state = {
      checked: false,
    };
  }

  onUsernameChange = (e) => {
    this.handlers.onUsernameChange(e.target.value);
  };

  onEmailChange = (e) => {
    this.handlers.onEmailChange(e.target.value);
  };

  onPasswordChange = (e) => {
    this.handlers.onPasswordChange(e.target.value);
  };

  onConfirmPasswordChange = (e) => {
    this.handlers.onConfirmPasswordChange(e.target.value);
  };

  onAgreeTermsOfService = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  onRedirect = () => {
    this.context.router.history.replace('/');
  };

  onSignup = () => {
    const value = this.props;
    this.handlers.onSignup(value.username, value.email, value.password,
        value.confirmPassword);
  };

  onClearStatusErrorsMessage = () => {
    this.handlers.onClearStatusErrorsMessage();
  };

  onShowLoginModal = () => {
    this.handlers.onShowLoginModal();
  };

  onHideSignupModal = () => {
    this.handlers.onHideSignupModal();
  };

  render() {
    return <Signup username={this.props.username}
                   email={this.props.email}
                   password={this.props.password}
                   confirmPassword={this.props.confirmPassword}
                   checked={this.state.checked}
                   status={this.props.status}
                   errors={this.props.errors}
                   message={this.props.message}
                   onUsernameChange={this.onUsernameChange}
                   onEmailChange={this.onEmailChange}
                   onPasswordChange={this.onPasswordChange}
                   onConfirmPasswordChange={this.onConfirmPasswordChange}
                   onAgreeTermsOfService={this.onAgreeTermsOfService}
                   onRedirect={this.onRedirect}
                   onSignup={this.onSignup}
                   onClearStatusErrorsMessage={this.onClearStatusErrorsMessage}
                   onShowLoginModal={this.onShowLoginModal}
                   onHideSignupModal={this.onHideSignupModal}/>;
  }
}
SignupView.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  status: PropTypes.string,
  errors: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  message: PropTypes.string,
};
SignupView.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    username: state.authReducer.signup.username,
    email: state.authReducer.signup.email,
    password: state.authReducer.signup.password,
    confirmPassword: state.authReducer.signup.confirmPassword,
    status: state.authReducer.signup.status,
    errors: state.authReducer.signup.errors,
    message: state.authReducer.signup.message,
  };
};

export default connect(mapStateToProps)(SignupView);
