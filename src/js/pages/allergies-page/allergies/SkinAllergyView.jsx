import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SkinAllergy from './SkinAllergy.jsx';

class SkinAllergyView extends Component {

  render() {
    return <SkinAllergy skinAllergy={this.props.skinAllergy}
                        onSelect={this.props.onSelect}
                        router={this.context.router}
                        onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

SkinAllergyView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default SkinAllergyView;
