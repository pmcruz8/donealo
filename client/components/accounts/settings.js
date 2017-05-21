import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import SettingsOrg from './settings_org';
import SettingsPersonal from './settings_personal';
import Test from './settings_content';


class Settings extends Component {
  constructor(props) {
    super(props);
  }

  // active nav tab == Personal
  // if Org tab is clicked,
    // remove active class from active tab
    // set active class from org tab
    // render the org tab component

  render(props) {

    return (
      <div className="container background-settings col-md-6 col-md-offset-3">

        <h3>Settings</h3>

        <Test />
      </div>
    )
  }
}

export default Settings;
