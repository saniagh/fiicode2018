import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SkinAllergy from './SkinAllergy.jsx';

class SkinAllergyView extends Component {

  componentDidMount() {
    this.context.router.history.replace('/allergies/skin-allergy');
  }

  render() {
    return <SkinAllergy skinAllergy={this.props.skinAllergy}
                        onSelect={this.props.onSelect}
                        onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

SkinAllergyView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default SkinAllergyView;
