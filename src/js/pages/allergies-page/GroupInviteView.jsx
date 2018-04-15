import React, { Component } from 'react';
import { notification } from 'antd';
import axios from 'axios';
import qs from 'qs';

import GroupInvite from './GroupInvite.jsx';

class GroupInviteView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: '',
      fullName: '',
      participants: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'post',
      url: '/allergies/check-share-link-validity',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        shareLink: `localhost/group-invite/${this.props.match.params.shareLink}`,
      }),
    }).then((res) => {
      this.setState({
        participants: res.data.participants,
      });
    }).catch((err) => {
      if (err.response.status === 401)
        notification.error({
          message: 'Expired!',
          description: 'This share link has expired!',
        });
    });
  }

  onEmailAddressChange = (e) => {
    this.setState({
      emailAddress: e.target.value,
    });
  };

  onFullNameChange = (e) => {
    this.setState({
      fullName: e.target.value,
    });
  };

  onEnterGroup = () => {
    axios({
      method: 'post',
      url: '/allergies/on-enter-group',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        shareLink: `localhost/group-invite/${this.props.match.params.shareLink}`,
        emailAddress: this.state.emailAddress,
        fullName: this.state.fullName,
        participants: JSON.stringify(this.state.participants),
      }),
    }).then((res) => {
      notification.success({
        message: 'Success!',
        description: 'You have entered this group. You will be redirected shortly.',
      });

      setTimeout(() => {
        this.props.history.push(
            `/groups/verified/${res.data.groupId}&${res.data.groupPassCode}`);
      }, 3000);
    }).catch(() => {
      notification.error({
        message: 'Error',
        description: 'Make sure you enter your email address',
      });
    });
  };

  render() {
    return <GroupInvite emailAddress={this.state.emailAddress}
                        fullName={this.state.fullName}
                        onEmailAddressChange={this.onEmailAddressChange}
                        onFullNameChange={this.onFullNameChange}
                        onEnterGroup={this.onEnterGroup}/>;
  }
}

export default GroupInviteView;
