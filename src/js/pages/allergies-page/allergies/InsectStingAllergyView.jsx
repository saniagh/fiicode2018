import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InsectStingAllergy from './InsectStingAllergy.jsx';

class InsectStingAllergyView extends Component {

  componentDidMount() {
    this.context.router.history.replace('/allergies/insect-sting-allergy');
  }

  render() {
    return <InsectStingAllergy insectStingAllergy={this.props.insectStingAllergy}
                        onSelect={this.props.onSelect}
                        onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

InsectStingAllergyView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default InsectStingAllergyView;
