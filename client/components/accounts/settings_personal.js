import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

var personalValues = {
  username : null, 
  lastname : null, 
  email    : null,
  password : null
}

class SettingsPersonal extends Component {
  constructor(props) {
    super(props); 

    this.saveValues = this.saveValues.bind(this); 
    this.saveSettings = this,saveSettings.bind(this); 
    this.onSaveSettings = this.onSaveSettings.bind(this); 
  }

  saveValues(personalValues) {
    return (
      personalValues = Object.assign({}, personalValues, personalValues)
    ); 
  }

  onSaveSettings(e) {
    e.preventDefault(); 

    // Get values via this.refs
    var data = {
      username: this.refs.username.value, 
      lastname: this.refs.lastname.value, 
      email   : this.refs.email.value, 
      password: this.refs.password.value
    }

    this.saveValues(data); 
    this.saveSettings(data); 
  }

  saveSettings(data) {
    Meteor.call('savePersonalInfo', data); 
  }

  render() {
    return (
      <div>
        <div className="col-md-12 margin-top-20">
          <label>Nombre</label>
          <input className="form-control" ref="username" placeholder="Nombre"/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Apellido</label>
          <input className="form-control" ref="lastname" placeholder="Apellido"/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Email</label>
          <input className="form-control" ref="email" placeholder="Email"/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Password</label>
          <input className="form-control" ref="password" placeholder="Password"/>
        </div>
        <div className="margin-top-20 pull-right">
          <button className="btn btn-primary" onClick={this.onSaveSettings}>Edit</button>
        </div>
      </div>
    )
  }
}

export default SettingsPersonal;
