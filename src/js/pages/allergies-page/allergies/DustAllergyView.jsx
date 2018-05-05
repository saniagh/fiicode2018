import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DustAllergy from './DustAllergy.jsx';

class DustAllergyView extends Component {

  render() {
    return <DustAllergy dustAllergy={this.props.dustAllergy}
                        onSelect={this.props.onSelect}
                        router={this.context.router}
                        onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

DustAllergyView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default DustAllergyView;
