import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DrugAllergies from './DrugAllergies.jsx';

class DrugAllergiesView extends Component {

  render() {
    return <DrugAllergies drugAllergies={this.props.drugAllergies}
                          onSelect={this.props.onSelect}
                          router={this.context.router}
                          onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

DrugAllergiesView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default DrugAllergiesView;
