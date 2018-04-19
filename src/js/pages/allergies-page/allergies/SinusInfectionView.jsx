import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SinusInfection from './SinusInfection.jsx';

class SinusInfectionView extends Component {

  componentDidMount() {
    this.context.router.history.replace('/allergies/sinus-infection');
  }

  render() {
    return <SinusInfection sinusInfection={this.props.sinusInfection}
                         onSelect={this.props.onSelect}
                         onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

SinusInfectionView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default SinusInfectionView;
