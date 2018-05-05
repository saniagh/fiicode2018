import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PetAllergies from './PetAllergies.jsx';

class PetAllergiesView extends Component {

  render() {
    return <PetAllergies petAllergies={this.props.petAllergies}
                        onSelect={this.props.onSelect}
                         router={this.context.router}
                        onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

PetAllergiesView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default PetAllergiesView;
