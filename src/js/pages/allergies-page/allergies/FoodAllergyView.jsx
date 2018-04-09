import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import FoodAllergy from './FoodAllergy.jsx';

class FoodAllergyView extends Component {

  componentDidMount() {
    this.context.router.history.replace('/allergies/food-allergy');

    //delete this when done
    //use it to create the custom allergies for each, non-protein/already in table allergy

    /*
     axios({
     method: 'get',
     url: '/allergies/save-custom-allergy',
     }).then(() => {

     }).catch(() => {

     });
     */
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
