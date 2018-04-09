import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomeView from './home/HomeView.jsx';
import ManageAllergies from './control-panel/ManageAllergies.jsx';
import AllAllergiesView from './allergies-page/AllAllergiesView.jsx';
import CreateGroupView from './allergies-page/CreateGroupView.jsx';

const Routes = withRouter(() => {
  return <Switch>
    <Route exact path={`/`} component={HomeView}/>
    <Route path={'/control-panel'} component={ManageAllergies}/>
    <Route path={'/allergies'} component={AllAllergiesView}/>
    <Route path={`/create-group`} component={CreateGroupView}/>
  </Switch>;

});

export default Routes;
