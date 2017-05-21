import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

var loginValues = {
  email    : null,
  password : null
}

class Login extends Component {
  constructor(props) {
    super(props); 

    this.saveValues = this.saveValues.bind(this); 
    this.onLogin = this.onLogin.bind(this); 
  }

  saveValues(loginValues) {
    return (
      loginValues = Object.assign({}, loginValues, loginValues)
    ); 
  }

  onLogin(e) {
    e.preventDefault(); 

    // Get values via this.refs
    var data = {
      email    : this.refs.email.value,
      password : this.refs.password.value
    }

    this.saveValues(data); 
    this.loginUser(data); 
  }

  loginUser(data) {
    Meteor.call('loginUser', data, function(err, isValid) {
      if (!err) {
        console.log(Meteor.user()); 
      }
    });
  }

  render() {
    return (
      <div className="bg-dark text-center login-container">
      <div className="text-center">
        <Link to="/"><img className="login-logo" src="../../../img/logo.png" /></Link>
      </div>
      <div className="login-form-container">
        <form className="form-horizontal">
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
            <div className="col-md-12 margin-top-10">
              <button onClick={this.onLogin} type="submit" className="btn btn-success full-width">Login</button>
            </div>
            <div className="col-md-12 margin-top-10">
              <Link to="/registro"><button className="btn btn-primary">Crear Cuenta</button></Link>
            </div>
            <div className="col-md-12 margin-top-10">
              <a className="grey">Se me olvidó mi contraseña</a>
            </div>
          </div>
        </form>
      </div>
      </div>
    ); 
  }
}

export default Login;
