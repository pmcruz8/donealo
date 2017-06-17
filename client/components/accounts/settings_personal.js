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
      lastname : null,
      email    : null,
      password : null
    }; 

    this.saveSettings = this.saveSettings.bind(this);
    this.onSaveSettings = this.onSaveSettings.bind(this); 
  }

  onSaveSettings(e) {
    e.preventDefault();

    // Get values via this.refs
    this.setState = ({
      username: this.refs.username.value,
      lastname: this.refs.lastname.value,
      email   : this.refs.email.value,
      password: this.refs.password.value
    }); 

    this.saveSettings(this.state);
  }

  saveSettings(data) {

    Meteor.call('savePersonalInfo', data);
  }

  render() {
    return (
      //<SettingsPersonalData/>
      <div>
        <div className="col-md-12 margin-top-20">
          <label>Nombre</label>
          <input className="form-control" ref="username" placeholder={this.state.username}/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Apellido</label>
          <input className="form-control" ref="lastname" placeholder=""/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Email</label>
          <input className="form-control" ref="email" placeholder=""/>
        </div>
        <div className="col-md-12 margin-top-20">
          <label>Password</label>
          <input className="form-control" ref="password" placeholder=""/>
        </div>
        <div className="margin-top-20 pull-right">
          <button className="btn btn-primary" onClick={this.onSaveSettings}>Edit</button>
        </div>
      </div>
    );
  }
}

export default SettingsPersonal; 

// const Data = (props) => {
//   return (
//     <div>
//       { props.user.map(item => <SettingsPersonalData key={item._id} item={item}/>)
//       }
//     </div>
//   );
// };

// const SettingsPersonalData = (props) => {
//   return (
//       <div>
//         <div className="col-md-12 margin-top-20">
//           <label>Nombre</label>
//           <input className="form-control" ref="username" placeholder=""/>
//         </div>
//         <div className="col-md-12 margin-top-20">
//           <label>Apellido</label>
//           <input className="form-control" ref="lastname" placeholder=""/>
//         </div>
//         <div className="col-md-12 margin-top-20">
//           <label>Email</label>
//           <input className="form-control" ref="email" placeholder=""/>
//         </div>
//         <div className="col-md-12 margin-top-20">
//           <label>Password</label>
//           <input className="form-control" ref="password" placeholder=""/>
//         </div>
//         <div className="margin-top-20 pull-right">
//           <button className="btn btn-primary" onClick={this.onSaveSettings}>Edit</button>
//         </div>
//       </div>
//     )
// }

// export default SettingsPersonal = createContainer(() => {

//   const handle = Meteor.subscribe("organizations");
//   const isReady = handle.ready();

//   return {
//     isReady,
//     user: isReady ? Organizations.find({user: Meteor.userId()}).fetch() : [],
//   };

// }, Data);
