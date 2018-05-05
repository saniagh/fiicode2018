import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AllergicRhinitis from './AllergicRhinitis.jsx';

class AllergicRhinitisView extends Component {
  render() {
    return <AllergicRhinitis allergicRhinitis={this.props.allergicRhinitis}
                             onSelect={this.props.onSelect}
                             router={this.context.router}
                             onConfirmSelectionOneAllergy={this.props.onConfirmSelectionOneAllergy}/>;
  }
}

AllergicRhinitisView.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default AllergicRhinitisView;
