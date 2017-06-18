import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import SettingsOrg from './settings_org';
import SettingsPersonal from './settings_personal';
import SettingsContent from './settings_content';
import Login from './login';
import Navbar from '../home_page/navigation_bar';


import createHistory from 'history/createBrowserHistory';
import { browserHistory, Route, Router } from 'react-router-dom';
import { Switch } from 'react-router';

const history = createHistory()

function requireAuth() {
  if (!Meteor.userId()) {
    history.replace('/login');
  }
}

const SettingsBody = () => {
  return (
    <div className="bg-dark text-center login-container">
      <Navbar />
        <div className="container background-settings col-md-6 col-md-offset-3 settings-container pb-20">
          <h3>Settings</h3>
          <SettingsContent />
        </div>
    </div>
  )
}

class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/settings' component={SettingsBody} onEnter={requireAuth()} />
        </Switch>
      </Router>
    )
  }
}

export default Settings;
