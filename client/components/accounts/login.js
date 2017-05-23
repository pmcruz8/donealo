import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Settings from './settings';
import Register from './register';

import createHistory from 'history/createBrowserHistory'

const history = createHistory()

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
    
    let email = data["email"]; 
    let password = data["password"]; 

    Meteor.loginWithPassword(email, password, function(error) {
      if (!error) {
        Bert.alert( 'Welcome ' + email, 'success', 'growl-top-right'); 
        history.push('/settings')
      
      } else {
        Bert.alert('There was an error, please try again.', 'danger'); 
        history.push('/login')
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

function requireAuth(nextState, replace) {
  if (!Meteor.userId()) {
    replace({
      pathname: '/register',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export const renderRoutes = () => (
  <Router history={history}>
      <Route path="/settings" component={Settings} onEnter={requireAuth}/>
      <Route path="/register" component={Register} />
  </Router>
);

export default Login;
