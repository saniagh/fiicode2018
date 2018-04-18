import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DustAllergy from './DustAllergy.jsx';

class DustAllergyView extends Component {

  componentDidMount() {
    this.context.router.history.replace('/allergies/dust-allergy');
  }

  render() {
    return <DustAllergy dustAllergy={this.props.dustAllergy}
                        onSelect={this.props.onSelect}
                        onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

DustAllergyView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default DustAllergyView;
