import React, { Component } from 'react';
import { notification } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import qs from 'qs';

import Auth from '../../modules/Auth.js';

import CreateGroup from './CreateGroup.jsx';

class CreateGroupView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupName: '',
      groupMotto: '',
      groupMessage: '',
      allergiesOptedFor: [],
      shareLinkExists: true,
      shareLinkExpires: false,
      allowGroupChat: false,
      ownerEmailAddress: '',
      ownerFullName: '',
      choosingDateForIndex: -1,
      savingGroup: false,
      savedGroup: false,
    };
  }

  componentDidMount() {

    if (Auth.isUserAuthenticated()) {
      this.setState({
        ownerEmailAddress: this.props.email,
      });
    }

    if (this.props.selected.length === 0) {
      this.context.router.history.replace('/allergies');
    }

    const allergies = this.props.allergies;
    const selected = this.props.selected;
    let allergiesOptedFor = [];

    allergies.map((allergy) => {
      for (let i = 0; i < selected.length; i++) {
        if (allergy._id === selected[i]) {
          allergiesOptedFor.push(allergy);
        }
      }
    });

    this.setState({
      allergiesOptedFor: allergiesOptedFor,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (Auth.isUserAuthenticated() && nextProps.email) {
      this.setState({
        ownerEmailAddress: nextProps.email,
      });
    }
  }

  onGroupNameChange = (e) => {
    this.setState({
      groupName: e.target.value,
    });
  };

  onGroupMottoChange = (e) => {
    this.setState({
      groupMotto: e.target.value,
    });
  };

  onGroupMessageChange = (e) => {
    this.setState({
      groupMessage: e.target.value,
    });
  };

  onSelectAlertTime = (value) => {
    let newAllergiesOptedFor = this.state.allergiesOptedFor;

    newAllergiesOptedFor[this.state.choosingDateForIndex].alertTime = value._d;

    this.setState({
      allergiesOptedFor: newAllergiesOptedFor,
    });
  };

  onShareLinkExistsChange = () => {
    this.setState({
      shareLinkExists: !this.state.shareLinkExists,
    });
  };

  onShareLinkExpiresChange = () => {
    this.setState({
      shareLinkExpires: !this.state.shareLinkExpires,
    });
  };

  onAllowGroupChatChange = () => {
    this.setState({
      allowGroupChat: !this.state.allowGroupChat,
    });
  };

  onOwnerEmailAddressChange = (e) => {
    this.setState({
      ownerEmailAddress: e.target.value,
    });
  };

  onOwnerFullNameChange = (e) => {
    this.setState({
      ownerFullName: e.target.value,
    });
  };

  onChoosingDateIndexChange = (index) => {
    this.setState({
      choosingDateForIndex: index,
    });
  };

  onSaveGroup = () => {
    this.setState({
      savingGroup: true,
    });

    let newParticipants = [
      {
        participantEmailAddress: this.state.ownerEmailAddress,
        participantFullName: this.state.ownerFullName,
        participantRole: 'Owner',
      },
    ];

    let datesSelected = true;
    const allergiesOptedFor = this.state.allergiesOptedFor;

    for (let i = 0; i < allergiesOptedFor.length; i++) {
      if (typeof allergiesOptedFor[i].alertTime === 'undefined')
        datesSelected = false;
    }

    if (datesSelected === true) {
      axios({
        method: 'post',
        url: '/allergies/save-group',
        headers: {
          'Authorization': `bearer ${Auth.getToken()}`,
          'Content-type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify({
          userId: this.props.userId,
          groupName: this.state.groupName,
          groupMotto: this.state.groupMotto,
          groupMessage: this.state.groupMessage,
          allergiesOptedFor: JSON.stringify(this.state.allergiesOptedFor),
          ownerEmailAddress: this.state.ownerEmailAddress,
          ownerFullName: this.state.ownerFullName,
          shareLinkExists: this.state.shareLinkExists,
          shareLinkExpires: this.state.shareLinkExpires,
          allowGroupChat: this.state.allowGroupChat,
          participants: JSON.stringify(newParticipants),
        }),
      }).then((res) => {
        this.setState({
          savingGroup: false,
          savedGroup: true,
        });
        notification.success({
          message: 'Success!',
          description: 'You will be redirected shortly!',
        });

        // should redirect to the newly created group
        // make a progress visual maybe
        setTimeout(() => {
          this.props.history.push(
              `/groups/verified/${res.data.groupId}&${res.data.groupPassCode}`);
        }, 3000);
      }).catch(() => {
        this.setState({
          savingGroup: false,
          savedGroup: true,
        });
        notification.error({
          message: 'Oops!',
          description: 'Have you filled all required fields?',
        });
      });
    } else {
      this.setState({
        savingGroup: false,
      });
      notification.error({
        message: 'Select dates!',
        description: 'Make sure you select a date for when you want to receive an email as a reminder.',
      });
    }
  };

  // remember to add the owner as the single participant to the group

  render() {

    if (Auth.isUserAuthenticated()) {
      return <CreateGroup groupChat={this.state.groupChat}
                          groupMotto={this.state.groupMotto}
                          groupMessage={this.state.groupMessage}
                          allergiesOptedFor={this.state.allergiesOptedFor}
                          shareLinkExists={this.state.shareLinkExists}
                          shareLinkExpires={this.state.shareLinkExpires}
                          allowGroupChat={this.state.allowGroupChat}
                          ownerEmailAddress={this.state.ownerEmailAddress}
                          ownerFullName={this.state.ownerFullName}
                          savingGroup={this.state.savingGroup}
                          savedGroup={this.state.savedGroup}
                          onGroupNameChange={this.onGroupNameChange}
                          onGroupMottoChange={this.onGroupMottoChange}
                          onGroupMessageChange={this.onGroupMessageChange}
                          onSelectAlertTime={this.onSelectAlertTime}
                          onShareLinkExistsChange={this.onShareLinkExistsChange}
                          onShareLinkExpiresChange={this.onShareLinkExpiresChange}
                          onAllowGroupChatChange={this.onAllowGroupChatChange}
                          onOwnerEmailAddressChange={this.onOwnerEmailAddressChange}
                          onOwnerFullNameChange={this.onOwnerFullNameChange}
                          onChoosingDateIndexChange={this.onChoosingDateIndexChange}
                          onSaveGroup={this.onSaveGroup}
                          onHideModal={this.props.onHideModal}/>;
    } else return <div className={this.state.mainClassName}>
      <div className="page-header">
        Hello there! Please login first!
      </div>
    </div>;
  }
}
CreateGroupView.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    userId: state.userReducer.id,
    allergies: state.allergiesReducer.allergies,
    selected: state.allergiesReducer.selected,
    email: state.userReducer.email,
  };
};

export default connect(mapStateToProps)(CreateGroupView);
