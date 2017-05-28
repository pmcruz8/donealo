import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom'
import Settings from './settings';
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

var loginValues = {
  name         : null,
  lastname     : null,
  email        : null,
  password     : null,
  organization : null,
  licence      : null
}

class Login extends Component {
  constructor(props) {
    super(props);

    this.saveValues = this.saveValues.bind(this);
    this.onRegistration = this.onRegistration.bind(this);
  }

  saveValues(loginValues) {
    return (
      loginValues = Object.assign({}, loginValues, loginValues)
    );
  }

  onRegistration(e) {
    e.preventDefault();

    // Get values via this.refs
    var data = {
      email        : this.refs.email.value,
      password     : this.refs.password.value,
      name         : this.refs.name.value,
      lastname     : this.refs.lastname.value,
      organization : this.refs.organization.value,
      licence      : this.refs.licence.value
    }

    this.saveValues(data);
    this.createUser(data);
  }

  createUser(data) {
    let user = {
      email: data["email"],
      password: data["password"]
    };

    Accounts.createUser(user,
      function(error) {
        if (error) {
          Bert.alert('There was an error, please try again', 'danger');
          history.push('/register')

        } else {
          Bert.alert( 'Welcome ' + user["email"], 'success', 'growl-top-right');
          history.push('/settings')
        };
      }
    );
  }

  render() {
    return (
      <div className="bg-dark text-center login-container">
        <div className="text-center">
          <Link to="/"><img className="login-logo" src="../../../img/logo.png" /></Link>
        </div>
        <div className="register-form-container">
          <form className="form-horizontal">
            <div className="form-group">
              <div className="col-md-12">
                <input type="text" ref="name" className="form-control" id="inputName" placeholder="Nombre" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <input type="text" ref="lastname" className="form-control" id="inputLastName" placeholder="Apellido" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <input type="text" ref="organization" className="form-control" id="inputOrg" placeholder="Organización" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <input type="email" ref="email" className="form-control" id="inputEmail3" placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <input type="password" ref="password" className="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12">
                <input type="text" ref="licence" className="form-control" id="inputAccessCode" placeholder="Código de Invitación" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12 margin-top-10">
                <button type="submit" onClick={this.onRegistration} className="btn btn-success full-width">Registrar</button>
              </div>
              <div className="col-md-12 margin-top-10">
                <Link to="/login">Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
