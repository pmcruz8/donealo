import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'; 
import { Tracker } from 'meteor/tracker';

import { Organizations } from '../../../collections/organizations';
import { createContainer } from 'meteor/react-meteor-data';

class SettingsOrg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organization: null,
      phone       : null,
      address     : null,
      postal      : null,
      paypal      : null,
      category    : null,
      avatar      : null,
      websiteURL  : null,
      facebookURL : null
    }; 

    this.upload = this.upload.bind(this); 
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

        this.setState({ organization: org_data.name === undefined ? "" : org_data.name }); 
        this.setState({ phone: org_data.phone === undefined ? "" : org_data.phone }); 
        this.setState({ address: org_data.address === undefined ? "" : org_data.address }); 
        this.setState({ postal: org_data.postal === undefined ? "" : org_data.postal }); 
        this.setState({ paypal: org_data.paypal === undefined ? "" : org_data.paypal }); 
        this.setState({ category: org_data.category === undefined ? "" : org_data.category }); 
        this.setState({ avatar: org_data.avatar === undefined ? "" : org_data.avatar }); 
        this.setState({ websiteURL: org_data.websiteURL === undefined ? "" : org_data.websiteURL }); 
        this.setState({ facebookURL: org_data.facebookURL === undefined ? "" : org_data.facebookURL }); 
      }
    });

    Slingshot.fileRestrictions('avatar', {
      allowedFileTypes: ["image/png", "image/jpeg", "image/jpg"],
      maxSize: 5 * 500 * 500
    });
  }

  upload() {
    let userId = Meteor.user()._id;
    let metaContext = { avatarId: userId };
    let uploader = new Slingshot.Upload("UsersAvatar", metaContext);
    uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) {
        if (error) {
            alert (error);
        } else {
            Meteor.call('saveAvatar', downloadUrl); 
        }
    });
  }

  onSubmit() {
    let avatarUrl = downloadUrl;
    Meteor.users.update(Meteor.userId(), {
        $set: {profile: avatarUrl}
    });
  }

  onSaveSettings(e) {
    e.preventDefault();

    // Get values via this.refs
    this.setState({ 
      organization: this.refs.organization.value !== "" ? 
        this.refs.organization.value 
        : this.state.organization, 

      phone: this.refs.phone.value !== "" ? 
        this.refs.phone.value 
        : this.state.phone, 

      address: this.refs.address.value !== "" ? 
        this.refs.address.value 
        : this.state.address, 

      postal: this.refs.postal.value !== "" ? 
        this.refs.postal.value 
        : this.state.postal, 

      paypal: this.refs.paypal.value !== "" ? 
        this.refs.paypal.value 
        : this.state.paypal, 

      category: this.refs.category.value !== "" ? 
        this.refs.category.value 
        : this.state.category, 

      avatar: this.refs.avatar.value !== "" ? 
        this.refs.avatar.value 
        : this.state.avatar, 

      websiteURL: this.refs.websiteURL.value !== "" ? 
        this.refs.websiteURL.value 
        : this.state.websiteURL, 

      facebookURL: this.refs.facebookURL.value !== "" ? 
        this.refs.facebookURL.value 
        : this.state.facebookURL 
    
    }, function () {
      this.saveSettings(this.state);
    }); 
  }

  saveSettings(data) {
    Meteor.call('saveOrgInfo', data);
  }

  render() {
    return (
      <div>
        <div className="col-md-12 margin-top-20">
          <label>Nombre de Organización</label>
          <input className="form-control" 
            ref="organization" 
            placeholder={this.state.organization} 
            value={this.state.organization !== null ? this.state.organization : ""}
            onChange={this.onSaveSettings}/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Teléfono de ATH-Móvil</label>
          <input className="form-control" 
            ref="phone" 
            placeholder="(787)-555-5555"
            value={this.state.phone !== null ? this.state.phone : ""}
            onChange={this.onSaveSettings}/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Dirección Física</label>
          <input className="form-control" 
            ref="address" 
            placeholder="Urb. Sabana del Palmar 818 calle Palma Real" 
            value={this.state.address !== null ? this.state.address : ""}
            onChange={this.onSaveSettings}/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Dirección Postal</label>
          <input className="form-control" 
            ref="postal" 
            placeholder="818 Apt. #432" 
            value={this.state.postal !== null ? this.state.postal : ""}
            onChange={this.onSaveSettings}/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Paypal Email</label>
          <input className="form-control" 
            ref="paypal" 
            placeholder="paypal@donations.com" 
            value={this.state.paypal !== null ? this.state.paypal : ""}
            onChange={this.onSaveSettings}/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Categoría</label>
          <select value={this.state.category !== null ? this.state.category : ""}
            className="form-control" 
            ref="category"
            onChange={this.onSaveSettings}>
              <option value="salud">Salud</option>
              <option value="educacion">Educación</option>
              <option value="arte_cultura">Arte y Cultura</option>
              <option value="animales">Animales</option>
              <option value="ambiente">Ambiente y Naturaleza</option>
              <option value="familia">Familia</option>
          </select>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Logo / Foto de perfíl</label>
          <form>
            <input className="form-control" type="file" id="input" onChange={this.upload} />
            <br /><button type="submit" onClick={this.onSubmit}>Upload</button>
          </form>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Website URL</label>
          <input className="form-control" 
            ref="websiteURL" 
            placeholder="http://"
            value={this.state.websiteURL !== null ? this.state.websiteURL : ""}
            onChange={this.onSaveSettings}/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Facebook URL</label>
          <input className="form-control" 
            ref="facebookURL" 
            placeholder="facebook.com/organization"
            value={this.state.facebookURL !== null ? this.state.facebookURL : ""}
            onChange={this.onSaveSettings}/>
        </div>
        <div className="margin-top-20 pull-right">
          <button className="btn btn-primary" onClick={this.onSaveSettings}>Edit</button>
        </div>
      </div>
    ); 
  }
}

export default SettingsOrg;
