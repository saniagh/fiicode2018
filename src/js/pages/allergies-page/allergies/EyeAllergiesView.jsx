import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EyeAllergies from './EyeAllergies.jsx';

class EyeAllergiesView extends Component {

  componentDidMount() {
    this.context.router.history.replace('/allergies/eye-allergies');
  }

  render() {
    return <EyeAllergies eyeAllergies={this.props.eyeAllergies}
                        onSelect={this.props.onSelect}
                        onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

EyeAllergiesView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default EyeAllergiesView;
