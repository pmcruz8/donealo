import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import SettingsOrg from './settings_org';
import SettingsPersonal from './settings_personal';
import SettingsProfile from './settings_profile';


class SettingsContent extends Component {
  constructor(props) {
    super(props);
    this.handlePersonalClick = this.handlePersonalClick.bind(this);
    this.handleOrgClick = this.handleOrgClick.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.state = {isPersonal:true,isOrg: false,isProfile:false};
  }

  // active nav tab == Personal
  // if Org tab is clicked,
    // remove active class from active tab
    // set active class from org tab
    // render the org tab component

  handlePersonalClick() {
    this.setState({isOrg: false});
    this.setState({isPersonal: true});
    this.setState({isProfile: false});
  }

  handleOrgClick() {
    this.setState({isOrg: true});
    this.setState({isPersonal: false});
    this.setState({isProfile: false});
  }

  handleProfileClick() {
    this.setState({isOrg: false});
    this.setState({isPersonal: false});
    this.setState({isProfile: true});
  }

  render() {
    const isOrg = this.state.isOrg;
    const isPersonal = this.state.isPersonal;
    const isProfile = this.state.isProfile;


    let settingsNavBar = null;
    if (isOrg) {
      settingsNavBar = <OrgButton onClick={this.handleOrgClick} />;
    } else if (isPersonal) {
      settingsNavBar = <PersonalButton onClick={this.handlePersonalClick} />;
    } else if (isProfile) {
      settingsNavBar = <ProfileButton onClick={this.handleProfileClick} />;
    }

    return (
      <div>
        <ul className="nav nav-tabs">
          <PersonalButton onClick={this.handlePersonalClick} active={ this.state.isPersonal ? 'active' : '' }/>
          <OrgButton onClick={this.handleOrgClick}  active={ this.state.isOrg ? 'active' : '' }/>
          <ProfileButton onClick={this.handleProfileClick} active={ this.state.isProfile ? 'active' : '' } />
        </ul>

        <SettingsContainer isOrg={isOrg} isProfile={isProfile} isPersonal={isPersonal}/>
      </div>
    );
  }
}

function SettingsOrgContent(props) {
  return <SettingsOrg />;
}

function SettingsProfileContent(props) {
  return <SettingsProfile />;
}

function SettingsPersonalContent(props) {
  return <SettingsPersonal />;
}

function SettingsContainer(props) {
  const isOrg = props.isOrg;
  const isPersonal = props.isPersonal;
  const isProfile = props.isProfile;

  if (isOrg) {
    return <SettingsOrgContent />;
  } else if (isProfile) {
    return <SettingsProfileContent />;
  }
    return <SettingsPersonalContent />
}

function OrgButton(props) {
  return (
    <li onClick={props.onClick} className={props.active}><a href="#">Organización</a></li>
  );
}

function ProfileButton(props) {
  return (
    <li onClick={props.onClick} className={props.active}><a href="#">Profile</a></li>
  );
}

function PersonalButton(props) {
  return (
    <li onClick={props.onClick} className={props.active}><a href="#">Personal</a></li>
  );
}

// function SettingsNav(props) {
//   return (
//     <ul className="nav nav-tabs">
//       <PersonalButton onClick={this.handlePersonalClick} />
//       <OrgButton onClick={this.handleOrgClick} />
//       <ProfileButton/>
//     </ul>
//   )
// }

export default SettingsContent;
