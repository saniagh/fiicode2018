import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomeView from './home/HomeView.jsx';
import ManageAllergies from './control-panel/ManageAllergies.jsx';
import AllAllergiesView from './allergies-page/AllAllergiesView.jsx';
import CreateGroupView from './allergies-page/CreateGroupView.jsx';
import GroupAccessView from './allergies-page/GroupAccessView.jsx';
import GroupInviteView from './allergies-page/GroupInviteView.jsx';
import MyGroupsView from './allergies-page/MyGroupsView.jsx';

// TODO a not found page.

const Routes = withRouter(() => {
  return <Switch>
    <Route exact path={`/`} component={HomeView}/>
    <Route path={'/control-panel'} component={ManageAllergies}/>
    <Route path={'/allergies'} component={AllAllergiesView}/>
    <Route path={`/create-group`} component={CreateGroupView}/>
    <Route path={'/groups/:groupId'} component={GroupAccessView}/>
    <Route path={'/group-invite/:shareLink'} component={GroupInviteView}/>
    <Route path={'/my-groups'} component={MyGroupsView}/>
    <Route path={'*'} component={HomeView}/>
  </Switch>;

});

export default Routes;
