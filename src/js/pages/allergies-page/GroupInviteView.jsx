import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';
import axios from 'axios';
import qs from 'qs';

import Auth from '../../modules/Auth.js';

import GroupInvite from './GroupInvite.jsx';

class GroupInviteView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: '',
      fullName: '',
      participants: [],
      enteringGroup: false,
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

    if (this.props.email) {
      this.setState({
        emailAddress: this.props.email,
      });
    }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.email) {
      this.setState({
        emailAddress: nextProps.email,
      });
    }
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

    this.setState({
      enteringGroup: true,
    });

    let alreadyInGroup = false;

    this.state.participants.map((participant) => {
      if (participant.participantEmailAddress === this.state.emailAddress) {
        notification.error({
          message: 'User already in group!',
          description: 'This user is already a participant of this group.',
        });
        alreadyInGroup = true;
        this.setState({
          enteringGroup: false,
        });
      }
    });

    if (alreadyInGroup === false) {
      axios({
        method: 'post',
        url: '/allergies/on-enter-group',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify({
          isLoggedIn: Auth.isUserAuthenticated(),
          shareLink: `localhost/group-invite/${this.props.match.params.shareLink}`,
          emailAddress: this.state.emailAddress,
          fullName: this.state.fullName,
          participants: JSON.stringify(this.state.participants),
        }),
      }).then((res) => {
        this.setState({
          enteringGroup: true,
        });
        notification.success({
          message: 'Success!',
          description: 'You have entered this group. You will be redirected shortly.',
        });

        setTimeout(() => {
          this.props.history.push(
              `/groups/verified/${res.data.groupId}&${res.data.groupPassCode}`);
        }, 3000);
      }).catch(() => {
        this.setState({
          enteringGroup: false,
        });
        notification.error({
          message: 'Error',
          description: 'Make sure you enter your email address',
        });
      });
    }
  };

  render() {
    return <GroupInvite email={this.props.email}
                        emailAddress={this.state.emailAddress}
                        fullName={this.state.fullName}
                        enteringGroup={this.state.enteringGroup}
                        onEmailAddressChange={this.onEmailAddressChange}
                        onFullNameChange={this.onFullNameChange}
                        onEnterGroup={this.onEnterGroup}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.userReducer.email,
  };
};

export default connect(mapStateToProps)(GroupInviteView);
