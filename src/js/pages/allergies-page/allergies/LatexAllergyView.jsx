import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LatexAllergy from './LatexAllergy.jsx';

class LatexAllergyView extends Component {
  render() {
    return <LatexAllergy latexAllergy={this.props.latexAllergy}
                         onSelect={this.props.onSelect}
                         router={this.context.router}
                         onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

LatexAllergyView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default LatexAllergyView;
