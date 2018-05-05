import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MoldAllergy from './MoldAllergy.jsx';

class MoldAllergyView extends Component {
  render() {
    return <MoldAllergy moldAllergy={this.props.moldAllergy}
                        onSelect={this.props.onSelect}
                        router={this.context.router}
                        onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

MoldAllergyView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default MoldAllergyView;
