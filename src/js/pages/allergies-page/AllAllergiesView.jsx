import React, { Component } from 'react';
import { notification } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  onConfirmSelectionAction,
} from './allergiesActions.js';

import AllAllergies from './AllAllergies.jsx';

let createHandlers = function (dispatch) {
  let onConfirmSelection = function (selected, allergies) {
    dispatch(onConfirmSelectionAction(selected, allergies));
  };

  return {
    onConfirmSelection,
  };
};

class AllAllergiesView extends Component {
  constructor(props) {
    super(props);

    this.handlers = createHandlers(this.props.dispatch);

    this.state = {
      fetchingAllergies: false,
      allergies: [],
      selected: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/allergies/get-allergies',
    }).then((res) => {
      this.setState({
        allergies: res.data.allergies,
      });
    }).catch(() => {
    });
  }

  onSelect = (id) => {

    let exists = false;

    let newSelected = this.state.selected;

    for (let i = 0; i < newSelected.length; i++) {
      if (newSelected[i] === id) {
        newSelected = newSelected.filter(a => a !== id);
        exists = true;
      }
    }

    if (!exists) {
      newSelected.push(id);
    }

    this.setState({
      selected: newSelected,
    });
  };

  onConfirmSelection = () => {
    this.handlers.onConfirmSelection(this.state.selected, this.state.allergies);
    if (this.state.selected.length === 0) {
      notification.warning({
        message: 'No allergies selected',
        description: 'Cannot create group unless you select at least one allergy',
      });
    }
  };

  render() {
    return <AllAllergies allergies={this.state.allergies}
                         selected={this.state.selected}
                         onSelect={this.onSelect}
                         onConfirmSelection={this.onConfirmSelection}/>;
  }
}

export default connect()(AllAllergiesView);
