import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InsectStingAllergy from './InsectStingAllergy.jsx';

class InsectStingAllergyView extends Component {

  render() {
    return <InsectStingAllergy
        insectStingAllergy={this.props.insectStingAllergy}
        onSelect={this.props.onSelect}
        router={this.context.router}
        onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

InsectStingAllergyView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default InsectStingAllergyView;
