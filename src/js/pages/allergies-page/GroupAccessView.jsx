import React, { Component } from 'react';
import { notification } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import qs from 'qs';
import { Route } from 'react-router-dom';
import GroupView from './GroupView.jsx';

import Auth from '../../modules/Auth.js';

import GroupAccess from './GroupAccess.jsx';

class GroupAccessView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passCode: '',
      group: {},
    };
  }

  onPassCodeChange = (e) => {
    this.setState({
      passCode: e.target.value,
    });
  };

  // if the user is registered, redirect him to his groups overview

  onVerifyGroupIdAndPassCode = () => {

    axios({
      method: 'post',
      url: '/allergies/get-group',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        passCode: this.state.passCode,
        groupId: this.props.match.params.groupId,
      }),
    }).then((res) => {

      notification.success({
        message: 'Success!',
        description: 'You will be redirected shortly',
      });

      setTimeout(() => {
        this.props.history.push(
            `/groups/verified/${this.props.match.params.groupId}&${this.state.passCode}`);
      }, 1000);
    }).catch(() => {
      notification.error({
        message: 'Oops!',
        description: 'Sorry, the combination on passcode and group id didn\'t work.',
      });
    });
  };

  render() {
    return (
        <span>
            <Route exact path={`/groups/:groupId`} render={() => {
              return <GroupAccess passCode={this.state.passCode}
                                  onPassCodeChange={this.onPassCodeChange}
                                  onVerifyGroupIdAndPassCode={this.onVerifyGroupIdAndPassCode}/>;
            }}/>
          <Route exact path={`/groups/verified/:groupId&:passCode`}
                 component={GroupView}/>
        </span>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.userReducer.email,
  };
};

export default connect(mapStateToProps)(GroupAccessView);
