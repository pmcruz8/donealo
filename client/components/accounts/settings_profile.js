import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

import { Organizations } from '../../../collections/organizations';
import { createContainer } from 'meteor/react-meteor-data';

class SettingsProfile extends Component {
  constructor(props) {
    super(props); 

    this.state  ={
      about : null, 
      faq   : null
    }; 

    this.saveSettings = this.saveSettings.bind(this); 
    this.onSaveSettings = this.onSaveSettings.bind(this); 
  }

  componentDidMount() {
    const currUser = Meteor.userId();
    const handle = Meteor.subscribe('organization.user', currUser);
    
    Tracker.autorun(() => {
      const isReady = handle.ready();
      
      if (isReady) {

        const org_data = Organizations.findOne({user:currUser}); 

        this.setState({ about: org_data.about === undefined ? "" : org_data.about }); 
        this.setState({ faq: org_data.faq === undefined ? "" : org_data.faq }); 

      }
    });
  }

  onSaveSettings(e) {
    e.preventDefault(); 

    // Get values via this.refs
    this.setState = ({
      about: this.refs.about.value, 
      faq: this.refs.faq.value
    }); 

    this.saveSettings(this.state); 
  }

  saveSettings(data) {
    Meteor.call('saveProfileInfo', data); 
  }

  render() {
    //<SettingsProfileData/>
    return (
      <div>
        <div className="col-md-12 margin-top-20">
          <label>Sobre Nosotors</label>
          <input className="form-control" ref="about" placeholder=""/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>FAQ</label>
          <input className="form-control" ref="faq" placeholder=""/>
        </div>
        <div className="margin-top-20 pull-right">
          <button className="btn btn-primary" onClick={this.onSaveSettings}>Edit</button>
        </div>
      </div>
    ); 
  }
}

export default SettingsProfile; 

