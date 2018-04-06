import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { notification } from 'antd';
import { connect } from 'react-redux';
import {
  onShowLoginModalAction,
  onHideLoginModalAction,
  onShowSignupModalAction,
  onHideSignupModalAction,
} from './navigationActions.js';

import {
  onGetUserCredentials,
} from '../auth/userActions.js';

import Navigation from './Navigation.jsx';

let createHandlers = function (dispatch) {
  let onShowLoginModal = function () {
    dispatch(onShowLoginModalAction());
  };

  let onHideLoginModal = function () {
    dispatch(onHideLoginModalAction());
  };

  let onShowSignupModal = function () {
    dispatch(onShowSignupModalAction());
  };

  let onHideSignupModal = function () {
    dispatch(onHideSignupModalAction());
  };

  let onGetUserCredentialsHandler = function (id, username, email, isAdmin) {
    dispatch(onGetUserCredentials(id, username, email, isAdmin));
  };

  return {
    onShowLoginModal,
    onHideLoginModal,
    onShowSignupModal,
    onHideSignupModal,
    onGetUserCredentialsHandler,
  };
};

class NavigationView extends Component {
  constructor(props) {
    super(props);

    this.handlers = createHandlers(this.props.dispatch);
  }

  onShowLoginModal = () => {
    this.handlers.onShowLoginModal();
  };

  onHideLoginModal = () => {
    this.handlers.onHideLoginModal();
  };

  onShowSignupModal = () => {
    this.handlers.onShowSignupModal();
  };

  onHideSignupModal = () => {
    this.handlers.onHideSignupModal();
  };

  render() {
    return <Navigation login={this.props.login}
                       signup={this.props.signup}
                       router={this.context.router}
                       location={this.props.location}
                       isAdmin={this.props.isAdmin}
                       onShowLoginModal={this.onShowLoginModal}
                       onHideLoginModal={this.onHideLoginModal}
                       onShowSignupModal={this.onShowSignupModal}
                       onHideSignupModal={this.onHideSignupModal}
                       onGetUserCredentialsHandler={this.handlers.onGetUserCredentialsHandler}/>;
  }
}
NavigationView.propTypes = {
  login: PropTypes.shape({
    isModalVisible: PropTypes.bool,
  }),
  signup: PropTypes.shape({
    isModalVisible: PropTypes.bool,
  }),
};

NavigationView.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    login: state.navigationReducer.login,
    signup: state.navigationReducer.signup,
    isAdmin: state.userReducer.isAdmin,
  };
};

export default connect(mapStateToProps)(NavigationView);
