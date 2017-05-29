import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

import { Organizations } from '../../../collections/organizations';
import { createContainer } from 'meteor/react-meteor-data';

var profileValues = {
  about : null, 
  faq   : null
}

class SettingsProfile extends Component {
  constructor(props) {
    super(props); 

    this.saveValues = this.saveValues.bind(this); 
    this.saveSettings = this.saveSettings.bind(this); 
    this.onSaveSettings = this.onSaveSettings.bind(this); 
  }

  saveValues(profileValues) {
    return (
      profileValues = Object.assign({}, profileValues, profileValues)
    ); 
  }

  onSaveSettings(e) {
    e.preventDefault(); 

    // Get values via this.refs
    var data = {
      about: this.refs.about.value, 
      faq: this.refs.faq.value
    }

    this.saveValues(data); 
    this.saveSettings(data); 
  }

  saveSettings(data) {
    Meteor.call('saveProfileInfo', data); 
  }

  render() {
    <SettingsProfileData/>
  }
}

const Data = (props) => {
  return (
    <div>{props.user.map(item => <SettingsProfileData key={item._id} item={item}/>)}
    </div>
  ); 
}; 

const SettingsProfileData = (props) => {
  return (
      <div>
        <div className="col-md-12 margin-top-20">
          <label>Sobre Nosotors</label>
          <input className="form-control" ref="about" placeholder={props.item.about}/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>FAQ</label>
          <input className="form-control" ref="faq" placeholder={props.item.faq}/>
        </div>
        <div className="margin-top-20 pull-right">
          <button className="btn btn-primary" onClick={this.onSaveSettings}>Edit</button>
        </div>
      </div>
    )
}

export default SettingsProfile = createContainer(() => {

  const handle = Meteor.subscribe("organizations");
  const isReady = handle.ready();

  return {
    isReady,
    user: isReady ? Organizations.find({user: Meteor.userId()}).fetch() : [],
  };

}, Data);

