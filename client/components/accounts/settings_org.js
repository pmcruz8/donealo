import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

import { Organizations } from '../../../collections/organizations';
import { createContainer } from 'meteor/react-meteor-data';

class SettingsOrg extends Component {
  constructor(props) {
    super(props);

    this.saveSettings = this.saveSettings.bind(this);
    this.onSaveSettings = this.onSaveSettings.bind(this);

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
  }

  onSaveSettings(e) {
    e.preventDefault();

    // Get values via this.refs
    this.setState = ({
      organization: this.refs.organization.value,
      phone       : this.refs.phone.value,
      address     : this.refs.address.value,
      postal      : this.refs.postal.value,
      paypal      : this.refs.paypal.value,
      category    : this.refs.category.value,
      avatar      : this.refs.avatar. value,
      websiteURL  : this.refs.websiteURL.value,
      facebookURL : this.refs.facebookURL.value
    }); 

    this.saveSettings(this.state);
  }

  saveSettings(data) {
    Meteor.call('saveOrgInfo', data);
  }

  render() {
    return (
      <div>
        <div className="col-md-12 margin-top-20">
          <label>Nombre de Organización</label>
          <input className="form-control" name="organization" placeholder=""/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Teléfono de ATH-Móvil</label>
          <input className="form-control" ref="phone" placeholder=""/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Dirección Física</label>
          <input className="form-control" ref="address" placeholder=""/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Dirección Postal</label>
          <input className="form-control" ref="postal" placeholder=""/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Paypal Email</label>
          <input className="form-control" ref="paypal" placeholder=""/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Categoría</label>
          <input className="form-control" ref="category" placeholder=""/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Logo URL</label>
          <input className="form-control" ref="avatar" placeholder=""/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Website URL</label>
          <input className="form-control" ref="websiteURL" placeholder=""/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Facebook URL</label>
          <input className="form-control" ref="facebookURL" placeholder=""/>
        </div>
        <div className="margin-top-20 pull-right">
          <button className="btn btn-primary" onClick={this.onSaveSettings}>Edit</button>
        </div>
      </div>
    ); 
  }
}

export default SettingsOrg;

// const Data = (props) => {
//   return (
//     <div>
//       { props.user.map(item => <SettingsOrgData key={item._id} item={item}/>)
//       }
//     </div>
//   );
// };

// const SettingsOrgData = (props) => {
//   return (
//     <div>
//       <div className="col-md-12 margin-top-20">
//         <label>Nombre de Organización</label>
//         <input className="form-control" name="organization" placeholder={props.item.name}/>
//       </div>
//       <div className="col-md-12 margin-top-20">
//         <label>Teléfono de ATH-Móvil</label>
//         <input className="form-control" ref="phone" placeholder={props.item.phone}/>
//       </div>
//       <div className="col-md-12 margin-top-20">
//         <label>Dirección Física</label>
//         <input className="form-control" ref="address" placeholder={props.item.address}/>
//       </div>
//       <div className="col-md-12 margin-top-20">
//         <label>Dirección Postal</label>
//         <input className="form-control" ref="postal" placeholder={props.item.postal}/>
//       </div>
//       <div className="col-md-12 margin-top-20">
//         <label>Paypal Email</label>
//         <input className="form-control" ref="paypal" placeholder={props.item.paypal}/>
//       </div>
//       <div className="col-md-12 margin-top-20">
//         <label>Categoría</label>
//         <input className="form-control" ref="category" placeholder={props.item.category}/>
//       </div>
//       <div className="col-md-12 margin-top-20">
//         <label>Logo URL</label>
//         <input className="form-control" ref="avatar" placeholder={props.item.avatar}/>
//       </div>
//       <div className="col-md-12 margin-top-20">
//         <label>Website URL</label>
//         <input className="form-control" ref="websiteURL" placeholder={props.item.websiteURL}/>
//       </div>
//       <div className="col-md-12 margin-top-20">
//         <label>Facebook URL</label>
//         <input className="form-control" ref="facebookURL" placeholder={props.item.facebookURL}/>
//       </div>
//       <div className="margin-top-20 pull-right">
//         <button className="btn btn-primary" onClick={this.onSaveSettings}>Edit</button>
//       </div>
//     </div>
//   )
// }

// export default SettingsOrg = createContainer(() => {

//   const handle = Meteor.subscribe("organizations");
//   const isReady = handle.ready();

//   return {
//     isReady,
//     user: isReady ? Organizations.find({user: Meteor.userId()}).fetch() : [],
//   };

// }, Data);
