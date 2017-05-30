import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class SettingsOrg extends Component {
  constructor(props) {
    super(props);

    this.saveValues = this.saveValues.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
    this.onSaveSettings = this.onSaveSettings.bind(this);
  }

  saveValues(settingsValues) {
    return (
      settingsValues = Object.assign({}, settingsValues, settingsValues)
    );
  }

  onSaveSettings(e) {
    e.preventDefault();

    // Get values via this.refs
    var data = {
      organization: this.refs.organization.value,
      phone       : this.refs.phone.value,
      address     : this.refs.address.value,
      postal      : this.refs.postal.value,
      paypal      : this.refs.paypal.value,
      category    : this.refs.category.value,
      avatar      : this.refs.avatar. value,
      websiteURL  : this.refs.websiteURL.value,
      facebookURL : this.refs.facebookURL.value
    }

    this.saveValues(data);
    this.saveSettings(data);
  }

  saveSettings(data) {
    Meteor.call('saveOrgInfo', data);
  }

  render() {
    return (
      <div>
        <div className="col-md-12 margin-top-20">
          <label>Nombre de Organización</label>
          <input className="form-control" ref="organization" placeholder="Nombre de Organización"/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Teléfono de ATH-Móvil</label>
          <input className="form-control" ref="phone" placeholder="Teléfono"/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Dirección Física</label>
          <input className="form-control" ref="address" placeholder="Dirección Física"/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Dirección Postal</label>
          <input className="form-control" ref="postal" placeholder="Dirección Postal"/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Paypal Email</label>
          <input className="form-control" ref="paypal" placeholder="Paypal Email"/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Categoría</label>
          <input className="form-control" ref="category" placeholder="Categoría"/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Logo URL</label>
          <input className="form-control" ref="avatar" placeholder="Logo URL"/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Website URL</label>
          <input className="form-control" ref="websiteURL" placeholder="Website URL"/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Facebook URL</label>
          <input className="form-control" ref="facebookURL" placeholder="Facebook URL"/>
        </div>
        <div className="margin-top-20 pull-right">
          <button className="btn btn-primary" onClick={this.onSaveSettings}>Edit</button>
        </div>
      </div>
    )
  }
}

export default SettingsOrg;
