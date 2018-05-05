import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CockroachAllergy from './CockroachAllergy.jsx';

class CockroachAllergyView extends Component {
  render() {
    return <CockroachAllergy cockroachAllergy={this.props.cockroachAllergy}
                             onSelect={this.props.onSelect}
                             router={this.context.router}
                             onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

CockroachAllergyView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default CockroachAllergyView;
