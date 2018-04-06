import React from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import HomeView from './home/HomeView.jsx';
import ManageAllergies from './control-panel/ManageAllergies.jsx';

const Routes = withRouter(() => {
  return <Switch>
    <Route exact path={`/`} component={HomeView}/>
    <Route path={'/control-panel'} component={ManageAllergies}/>
  </Switch>;

});

export default Routes;
