import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MoldAllergy from './MoldAllergy.jsx';

class MoldAllergyView extends Component {

  componentDidMount() {
    this.context.router.history.replace('/allergies/mold-allergy');
  }

  render() {
    return <MoldAllergy moldAllergy={this.props.moldAllergy}
                         onSelect={this.props.onSelect}
                         onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

MoldAllergyView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default MoldAllergyView;
