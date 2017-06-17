import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

import { Organizations } from '../../../collections/organizations';
import { createContainer } from 'meteor/react-meteor-data';

class SettingsProfile extends Component {
  constructor(props) {
    super(props); 

    this.saveSettings = this.saveSettings.bind(this); 
    this.onSaveSettings = this.onSaveSettings.bind(this); 

    this.state  ={
      about : null, 
      faq   : null
    }; 
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

// const Data = (props) => {
//   return (
//     <div>{props.user.map(item => <SettingsProfileData key={item._id} item={item}/>)}
//     </div>
//   ); 
// }; 

// const SettingsProfileData = (props) => {
//   return (
//       <div>
//         <div className="col-md-12 margin-top-20">
//           <label>Sobre Nosotors</label>
//           <input className="form-control" ref="about" placeholder={props.item.about}/>
//         </div>
//         <div className="col-md-12 margin-top-20">
//           <label>FAQ</label>
//           <input className="form-control" ref="faq" placeholder={props.item.faq}/>
//         </div>
//         <div className="margin-top-20 pull-right">
//           <button className="btn btn-primary" onClick={this.onSaveSettings}>Edit</button>
//         </div>
//       </div>
//     )
// }

// export default SettingsProfile = createContainer(() => {

//   const handle = Meteor.subscribe("organizations");
//   const isReady = handle.ready();

//   return {
//     isReady,
//     user: isReady ? Organizations.find({user: Meteor.userId()}).fetch() : [],
//   };

// }, Data);

