import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PetAllergies from './PetAllergies.jsx';

class PetAllergiesView extends Component {

  componentDidMount() {
    this.context.router.history.replace('/allergies/pet-allergies');
  }

  render() {
    return <PetAllergies petAllergies={this.props.petAllergies}
                        onSelect={this.props.onSelect}
                        onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

PetAllergiesView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default PetAllergiesView;
