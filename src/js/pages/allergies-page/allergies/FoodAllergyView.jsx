import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FoodAllergy from './FoodAllergy.jsx';

class FoodAllergyView extends Component {

  componentDidMount() {
    this.context.router.history.replace('/allergies/food-allergy');
  }

  render() {
    return <FoodAllergy foodAllergy={this.props.foodAllergy}
                        onSelect={this.props.onSelect}
                        onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

FoodAllergyView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default FoodAllergyView;
