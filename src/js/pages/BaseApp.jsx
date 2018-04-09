import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import Auth from '../modules/Auth.js';

import { Layout, notification, BackTop, LocaleProvider, Card } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
const { Content, Footer } = Layout;

import NavigationView from './navigation/NavigationView.jsx';
import FooterView from './navigation/FooterView.jsx';
import { smoothScroll } from '../modules/scrollFunction.js';

import {
  onGetUserCredentials,
} from './auth/userActions.js';

import Routes from './Routes.jsx';

let createHandlers = function (dispatch) {

  let onGetUserCredentialsHandler = function (id, username, email, isAdmin) {
    dispatch(onGetUserCredentials(id, username, email, isAdmin));
  };

  return {
    onGetUserCredentialsHandler,
  };
};

class BaseApp extends Component {
  constructor(props) {
    super(props);
    this.handlers = createHandlers(this.props.dispatch);
  }

  componentDidMount() {
    if (Auth.isUserAuthenticated()) {
      axios({
        method: 'post',
        url: '/authentication/auth-validation',
        headers: {
          'Authorization': `bearer ${Auth.getToken()}`,
          'Content-type': 'application/x-www-form-urlencoded',
        },
      }).then(() => {
        // the jwt has not expired and the user exists
        // fetch his credentials and fill up the reducer

        axios({
          method: 'post',
          url: '/authentication/decode-credentials',
          headers: {
            'Authorization': `bearer ${Auth.getToken()}`,
            'Content-type': 'application/x-www-form-urlencoded',
          },
        }).then((res) => {
          const response = res.data;
          this.handlers.onGetUserCredentialsHandler(response.id,
              response.username, response.email, response.isAdmin);
        }).catch(() => {
          // if something went wrong then there is something wrong with the server or with the jwt
          // it's best to deauthenticate the user
          // this is not likely to run if the first one fails, but this is just a fail check
          Auth.deauthenticateUser();
          location.reload();
        });

      }).catch(() => {
        // the jwt has expired or the user does not exist
        Auth.deauthenticateUser();

        // force a full page reload to avoid errors
        location.reload();
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname.indexOf('/allergies/') === -1)
      smoothScroll();
  }

  render() {

    const mediaQuery = window.matchMedia('(max-width: 1100px)');
    return (
        <div className={`site-wrap`} aria-hidden="false">
          <Layout style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <header className="top-header">
              <NavigationView location={this.context.router.route.location}/>
            </header>
            <LocaleProvider locale={enUS}>
              <div id="main" role="main">
                <Layout>
                  <Content>
                    <Routes/>
                  </Content>
                </Layout>
              </div>
            </LocaleProvider>
            <footer>
              <Footer>
                <FooterView/>
              </Footer>
            </footer>
            <BackTop/>
          </Layout>
        </div>
    );
  }
}

BaseApp.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(connect()(BaseApp));
