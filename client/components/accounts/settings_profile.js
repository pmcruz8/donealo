import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

var profileValues = {
  about : null, 
  faq   : null
}

class SettingsProfile extends Component {
  constructor(props) {
    super(props); 

    this.saveValues = this.saveValues.bind(this); 
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
    Meteor.call('saveProfileValues', data); 
  }

  render() {
    return (
      <div>
        <div className="col-md-12 margin-top-20">
          <label>Sobre Nosotors</label>
          <input className="form-control" ref="about" placeholder="Sobre Nosotros"/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>FAQ</label>
          <input className="form-control" ref="faq" placeholder="FAQ"/>
        </div>
        <div className="margin-top-20 pull-right">
          <button className="btn btn-primary">Edit</button>
        </div>
      </div>
    )
  }
}

export default SettingsProfile;
