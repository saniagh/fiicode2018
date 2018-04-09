import React, { Component } from 'react';
import { notification, Card } from 'antd';
import axios from 'axios';
import qs from 'qs';

import Group from './Group.jsx';

class GroupView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchingGroup: false,
      fetchedGroup: false,
      group: [],
    };
  }

  componentDidMount() {
    if (this.props.match.params.groupId && this.props.match.params.passCode) {

      this.setState({
        fetchingGroup: true,
      });

      axios({
        method: 'post',
        url: '/allergies/get-group',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify({
          groupId: this.props.match.params.groupId,
          passCode: this.props.match.params.passCode,
        }),
      }).then((res) => {
        this.setState({
          group: res.data.group[0],
          fetchingGroup: false,
          fetchedGroup: true,
        });
      }).catch(() => {
        notification.error({
          message: 'Oops!',
          description: 'The group id passcode combination didn\'t work.',
        });
        this.setState({
          fetchingGroup: false,
        });
      });
    }
  }

  render() {

    if (this.state.fetchedGroup === true)
      return <Group pathname={this.props.location.pathname}
                    fetchingGroup={this.state.fetchingGroup}
                    group={this.state.group}/>;
    else return <Card loading={true}
                      noHovering={true}
                      bordered={false}></Card>;
  }
}

export default GroupView;