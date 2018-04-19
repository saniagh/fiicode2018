import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CockroachAllergy from './CockroachAllergy.jsx';

class CockroachAllergyView extends Component {

  componentDidMount() {
    this.context.router.history.replace('/allergies/cockroach-allergy');
  }

  render() {
    return <CockroachAllergy cockroachAllergy={this.props.cockroachAllergy}
                         onSelect={this.props.onSelect}
                         onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

CockroachAllergyView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default CockroachAllergyView;
