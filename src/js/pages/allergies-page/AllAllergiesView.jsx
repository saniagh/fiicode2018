import React, { Component } from 'react';
import { notification } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import { Route } from 'react-router-dom';

import {
  onConfirmSelectionAction,
} from './allergiesActions.js';

import AllAllergies from './AllAllergies.jsx';

import FoodAllergyView from './allergies/FoodAllergyView.jsx';

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
      allAllergies: [],
      allergies: [],
      selected: [],
      foodAllergy: {},
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/allergies/get-allergies',
    }).then((res) => {
      let allergies = res.data.allergies;
      let length = allergies.length;
      let newAllergies = [];

      for (let i = 0; i < length; i++) {
        if (allergies[i].isGeneralAllergy === false)
          newAllergies.push(allergies[i]);
        if (allergies[i].type === 'Food Allergy')
          this.setState({
            foodAllergy: allergies[i],
          });
      }

      this.setState({
        allergies: newAllergies,
        allAllergies: res.data.allergies,
      });
    }).catch((err) => {
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

  onConfirmSelectionOneAllergy = (allergy) => {
    this.handlers.onConfirmSelection(allergy, this.state.allAllergies);
  };

  render() {
    return (
        <div>
          <Route exact path={`/allergies`} render={() => {
            return <AllAllergies allergies={this.state.allergies}
                                 selected={this.state.selected}
                                 onSelect={this.onSelect}
                                 onConfirmSelection={this.onConfirmSelection}/>;
          }}/>
          <Route exact path={`/allergies/food-allergy`} render={() => {
            return <FoodAllergyView foodAllergy={this.state.foodAllergy}
                                    onSelect={this.onSelect}
                                    onConfirmSelectionOneAllergy={this.onConfirmSelectionOneAllergy}/>;
          }}/>
        </div>
    );
  }
}

export default connect()(AllAllergiesView);
