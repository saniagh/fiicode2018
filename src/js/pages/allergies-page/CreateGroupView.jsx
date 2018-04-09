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
      allergiesOptedFor: [],
      shareLinkExists: true,
      shareLinkExpires: false,
      allowGroupChat: false,
      ownerEmailAddress: '',
      ownerFullName: '',
      choosingDateForIndex: -1,
      savingGroup: false,
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
          'Content-type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify({
          groupName: this.state.groupName,
          groupMotto: this.state.groupMotto,
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
        });
      }).catch((err) => {
        this.setState({
          savingGroup: false,
        });
      });
    }
  };

  // remember to add the owner as the single participant to the group

  render() {
    return <CreateGroup groupChat={this.state.groupChat}
                        groupMotto={this.state.groupMotto}
                        allergiesOptedFor={this.state.allergiesOptedFor}
                        shareLinkExists={this.state.shareLinkExists}
                        shareLinkExpires={this.state.shareLinkExpires}
                        allowGroupChat={this.state.allowGroupChat}
                        ownerEmailAddress={this.state.ownerEmailAddress}
                        ownerFullName={this.state.ownerFullName}
                        savingGroup={this.state.savingGroup}
                        onGroupNameChange={this.onGroupNameChange}
                        onGroupMottoChange={this.onGroupMottoChange}
                        onSelectAlertTime={this.onSelectAlertTime}
                        onShareLinkExistsChange={this.onShareLinkExistsChange}
                        onShareLinkExpiresChange={this.onShareLinkExpiresChange}
                        onAllowGroupChatChange={this.onAllowGroupChatChange}
                        onOwnerEmailAddressChange={this.onOwnerEmailAddressChange}
                        onOwnerFullNameChange={this.onOwnerFullNameChange}
                        onChoosingDateIndexChange={this.onChoosingDateIndexChange}
                        onSaveGroup={this.onSaveGroup}
                        onHideModal={this.props.onHideModal}/>;
  }
}
CreateGroupView.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    allergies: state.allergiesReducer.allergies,
    selected: state.allergiesReducer.selected,
    email: state.userReducer.email,
  };
};

export default connect(mapStateToProps)(CreateGroupView);
