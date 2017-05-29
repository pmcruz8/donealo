import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);

    if (Meteor.userId()) {
      this.state = {
        settings: false, 
        button: "Logout",
        path: "/"
      };

    } else {
      this.state = {
        button: "Login",
        path: "/login"
      };
    }
    
    this.requireAuth = this.requireAuth.bind(this); 
  }

  requireAuth() {      
    if (Meteor.userId()) {
      
      Meteor.logout(); 

      this.setState({
        button: "Login", 
        path: "/login"
      }); 

    } else {
      this.setState({
        button: "Logout", 
        path: "/"
      }); 
    }
  }

  render() {
	  return(
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbarHeader">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <div className="row">
                <div className="col-xs-3">
  								<Link to="/">
  									<img className="logoDona" src="img/dona_logo.png" alt=""></img>
  								</Link>
                </div>
                <div className="col-xs-9">
  								<Link to="/">
                  	<img className="logo" src="img/logo.png" alt=""></img>
  								</Link>
                </div>

              </div>
            </a>
          </div>
          <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="navbarButtons"><a href="#" ><font color="white">Inicio</font></a></li>
              <li className="navbarButtons"><a href="#footer"><font color="white">Sobre Donéalo</font></a></li>
              <Link className="loginButton" onClick={this.requireAuth} to={this.state.path}>{this.state.button}</Link>
              <Link className="loginButton" to="/settings">Settings</Link>
            </ul>
        </div>
      </div>
    </nav>
    );
  }
}


export default Navbar;
