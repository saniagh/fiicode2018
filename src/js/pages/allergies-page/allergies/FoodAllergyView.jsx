import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FoodAllergy from './FoodAllergy.jsx';

class FoodAllergyView extends Component {

  render() {
    return <FoodAllergy foodAllergy={this.props.foodAllergy}
                        onSelect={this.props.onSelect}
                        router={this.context.router}
                        onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

FoodAllergyView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default FoodAllergyView;
