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
    this.state = {isPersonal: false};
  }

  // active nav tab == Personal
  // if Org tab is clicked,
    // remove active class from active tab
    // set active class from org tab
    // render the org tab component

  handlePersonalClick() {
    this.setState({isPersonal: true});
  }

  handleOrgClick() {
    this.setState({isPersonal: false});
  }

  render() {
    const isPersonal = this.state.isPersonal;

    let settingsNavBar = null;
    if (isPersonal) {
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

        <SettingsContainer isPersonal={isPersonal} />
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
  const isPersonal = props.isPersonal;
  if (isPersonal) {
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
