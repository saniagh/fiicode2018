import React, { Component } from 'react';
import { Card, notification } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import qs from 'qs';

import Auth from '../../modules/Auth.js';

import MyGroups from './MyGroups.jsx';

class MyGroupsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchingGroups: false,
      componentHasEmail: false,
      ownGroups: [],
      participantGroups: [],
    };
  }

  componentDidMount() {

    this.setState({
      fetchingGroups: true,
    });

    if (this.props.email) {
      this.setState({
        componentHasEmail: true,
      });
      axios({
        method: 'post',
        url: '/allergies/get-my-groups',
        headers: {
          'Authorization': `bearer ${Auth.getToken()}`,
          'Content-type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify({
          email: this.props.email,
        }),
      }).then((res) => {

        this.setState({
          fetchingGroups: false,
          ownGroups: res.data.ownGroups,
          participantGroups: res.data.participantGroups,
        });
      }).catch(() => {
        notification.error({
          message: 'Oops!',
          description: 'No groups found :(',
        });
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.email && this.state.componentHasEmail === false) {
      this.setState({
        componentHasEmail: true,
        fetchingGroups: true,
      });
      axios({
        method: 'post',
        url: '/allergies/get-my-groups',
        headers: {
          'Authorization': `bearer ${Auth.getToken()}`,
          'Content-type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify({
          email: nextProps.email,
        }),
      }).then((res) => {

        this.setState({
          fetchingGroups: false,
          ownGroups: res.data.ownGroups,
          participantGroups: res.data.participantGroups,
        });
      }).catch(() => {
        notification.error({
          message: 'Oops!',
          description: 'No groups found :(',
        });
      });
    }
  }

  render() {

    if (Auth.isUserAuthenticated)
      return <MyGroups ownGroups={this.state.ownGroups}
                       participantGroups={this.state.participantGroups}/>;
    else return <Card loading={true}
                      noHovering={true}
                      bordered={false}></Card>;
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.userReducer.email,
  };
};

export default connect(mapStateToProps)(MyGroupsView);
