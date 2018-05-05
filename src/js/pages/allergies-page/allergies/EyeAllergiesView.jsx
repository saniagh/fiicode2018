import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EyeAllergies from './EyeAllergies.jsx';

class EyeAllergiesView extends Component {
  render() {
    return <EyeAllergies eyeAllergies={this.props.eyeAllergies}
                         onSelect={this.props.onSelect}
                         router={this.context.router}
                         onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

EyeAllergiesView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default EyeAllergiesView;
