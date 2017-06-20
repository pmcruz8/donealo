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
      A1 : null,
      A2 : null, 
      A3 : null
    }; 

    this.saveSettings = this.saveSettings.bind(this); 
    this.onSaveSettings = this.onSaveSettings.bind(this); 
    this.onSaveSettingsToDB = this.onSaveSettingsToDB.bind(this); 
  }

  componentDidMount() {
    const currUser = Meteor.userId();
    const handle = Meteor.subscribe('organization.user', currUser);
    
    Tracker.autorun(() => {
      const isReady = handle.ready();
      
      if (isReady) {
        const org_data = Organizations.findOne({user:currUser}); 

        this.setState({ about: org_data.about === undefined ? "" : org_data.about }); 
        this.setState({ A1: org_data.A1 === undefined ? "" : org_data.A1 }); 
        this.setState({ A2: org_data.A2 === undefined ? "" : org_data.A2 }); 
        this.setState({ A3: org_data.A3 === undefined ? "" : org_data.A3 }); 
      }
    });
  }

  onSaveSettings(e) {
    e.preventDefault(); 

    // Get values via this.refs
    this.setState({ 
      about: this.refs.about.value !== undefined ?
        this.refs.about.value 
        : this.state.about, 
      
      A1: this.refs.A1.value !== undefined ?
        this.refs.A1.value 
        : this.state.A1, 

      A2: this.refs.A2.value !== undefined ?
        this.refs.A2.value 
        : this.state.A2, 

      A3: this.refs.A3.value !== undefined ?
        this.refs.A3.value 
        : this.state.A3
    
    }, function () {
      this.saveSettings(this.state); 
    });
  }

  onSaveSettingsToDB(e) {
    this.saveSettings(this.state); 
    Bert.alert('Hemos guardado la información correctamente', 'success');
  }

  saveSettings(data) {
    Meteor.call('saveProfileInfo', data); 
  }

  render() {
    return (
      <div>
        <div className="col-md-12 margin-top-20">
          <label>Sobre Nosotors</label>
          <textarea className="form-control" 
            ref="about" 
            rows="5"
            placeholder="Sobre Nosotors"
            value={this.state.about !== null ? this.state.about : ""}
            onChange={this.onSaveSettings} />
        </div>
        <div className="col-md-12 margin-top-20">
          <label>¿Para qué usaremos las donaciones monetarias?</label>
          <textarea className="form-control" 
          ref="A1" 
          rows="2"
          placeholder="FAQ" 
          value={this.state.A1 !== null ? this.state.A1 : ""}
          onChange={this.onSaveSettings} />
        </div>
        <div className="col-md-12 margin-top-20">
          <label>¿Para qué usaremos las donaciones monetarias?</label>
          <textarea className="form-control" 
          ref="A2" 
          rows="2"
          placeholder="FAQ" 
          value={this.state.A2 !== null ? this.state.A2 : ""}
          onChange={this.onSaveSettings} />
        </div>
        <div className="col-md-12 margin-top-20">
          <label>¿Para qué usaremos las donaciones monetarias?</label>
          <textarea className="form-control" 
          ref="A3" 
          rows="2"
          placeholder="FAQ" 
          value={this.state.A3 !== null ? this.state.A3 : ""}
          onChange={this.onSaveSettings} />
        </div>
        <div className="margin-top-20 pull-right">
          <button className="btn btn-primary" onClick={this.onSaveSettingsToDB}>Save</button>
        </div>
      </div>
    ); 
  }
}

export default SettingsProfile; 

