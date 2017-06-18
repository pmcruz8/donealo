import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import { Organizations } from '../../../collections/organizations';
import { createContainer } from 'meteor/react-meteor-data';

class SettingsPersonal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username : null,
      lastname : null
    }; 

    this.saveSettings = this.saveSettings.bind(this);
    this.onSaveSettings = this.onSaveSettings.bind(this); 
  }

  componentDidMount() {
    const currUser = Meteor.userId();
    Tracker.autorun(() => {
      
      const user_data = Meteor.users.findOne(currUser); 

      if (user_data) {
        this.setState({ username: user_data.profile.firstName === undefined ? "" : user_data.profile.firstName });
        this.setState({ lastname: user_data.profile.lastName === undefined ? "" : user_data.profile.lastName });
      }
    });
  }

  onSaveSettings(e) {
    e.preventDefault();

    // Get values via this.refs
    this.setState = ({
      username: this.refs.username.value,
      lastname: this.refs.lastname.value
    }); 

    this.saveSettings(this.state);
  }

  saveSettings(data) {

    Meteor.call('savePersonalInfo', data);
  }

  render() {
    return (
      <div>
        <div className="col-md-12 margin-top-20">
          <label>Nombre</label>
          <input className="form-control" 
            ref="username" 
            placeholder="Nombre"
            value={this.state.username !== null ? this.state.username : ""}
            onChange={this.onSaveSettings} />
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Apellido</label>
          <input className="form-control" 
            ref="lastname" 
            placeholder="Apellido"
            value={this.state.lastname !== null ? this.state.lastname : ""}
            onChange={this.onSaveSettings} />
        </div>
        <div className="margin-top-20 pull-right">
          <button className="btn btn-primary" onClick={this.onSaveSettings}>Save</button>
        </div>
      </div>
    );
  }
}

export default SettingsPersonal; 
