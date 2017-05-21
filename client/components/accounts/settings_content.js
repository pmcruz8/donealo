import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import SettingsOrg from './settings_org';
import SettingsPersonal from './settings_personal';

class SettingsContent extends Component {
  constructor(props) {
    super(props);
    this.handlePersonalClick = this.handlePersonalClick.bind(this);
    this.handleOrgClick = this.handleOrgClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handlePersonalClick() {
    this.setState({isLoggedIn: true});
  }

  handleOrgClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let settingsNavBar = null;
    if (isLoggedIn) {
      settingsNavBar = <OrgButton onClick={this.handleOrgClick} />;
    } else {
      settingsNavBar = <PersonalButton onClick={this.handlePersonalClick} />;
    }

    return (
      <div>
        <ul className="nav nav-tabs">
          <OrgButton onClick={this.handleOrgClick} />
          <PersonalButton onClick={this.handlePersonalClick} />
        </ul>

        <SettingsContainer isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

function SettingsOrgContent(props) {
  return <SettingsOrg />;
}

function SettingsPersonalContent(props) {
  return <SettingsPersonal />;
}

function SettingsContainer(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <SettingsOrgContent />;
  }
  return <SettingsPersonalContent />;
}

function OrgButton(props) {
  return (
    <li onClick={props.onClick} className="active"><a href="#">Personal</a></li>
  );
}

function PersonalButton(props) {
  return (
    <li onClick={props.onClick}><a href="#">Organización</a></li>
  );
}

function SettingsNav(props) {
  return (
    <ul className="nav nav-tabs">
      <PersonalButton onClick={this.handlePersonalClick} />
      <OrgButton onClick={this.handleOrgClick} />
    </ul>
  )
}

export default SettingsContent;
