import React, {Component} from 'react';
import {Tracker} from 'meteor/tracker';
import {Link} from 'react-router-dom';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class Navbar extends Component {
  constructor(props) {
    super(props);

    var currUser = Meteor.userId();
    var currUserFN = '';

    if (Meteor.userId()) {
      this.state = {
        button: "Logout",
        path: "/",
        isUserLoggedIn: true,
        text: currUserFN
      };

    } else {
      this.state = {
        button: "Login",
        path: "/login",
        isUserLoggedIn: false,
        text: "Login"
      };
    }

    Tracker.autorun(() => {

      const USER_DATA = Meteor.users.findOne(currUser);

      if (USER_DATA) {
        currUserFN = USER_DATA.profile.firstName;
        this.setState({text:currUserFN});

        console.log(currUserFN);
      }
    });



    this.requireAuth = this.requireAuth.bind(this);
    this.loginToName = this.loginToName.bind(this);

  }

  requireAuth() {
    if (Meteor.userId()) {

      Meteor.logout();

      this.setState({button: "Login", path: "/login", text: "Login",isUserLoggedIn:false});

    } else {
      this.setState({button: "Logout", path: "/"});
    }
  }

  // Renders Name if logged in, renders login if not
  // To do: Meteor.call(findName)
  loginToName() {
    if (Meteor.userId()) {
      Meteor.logout();
      this.setState({text: "Login", path: "/login"});
      console.log(Meteor.userId())
    } else {
      this.setState({text: "Logout", path: "/"});
    }
  }

  // Check to see if user is logged in
  isUserLoggedIn() {
    if (Meteor.userId()) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
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
              <li className="navbarButtons">
                <a href="#">
                  <font color="white">Inicio</font>
                </a>
              </li>
              <li className="navbarButtons">
                <a href="#footer">
                  <font color="white">Sobre Donéalo</font>
                </a>
              </li>
              {
                this.state.isUserLoggedIn ?
                (
                  <DropdownButton title={this.state.text} id="dropdown-settings">
                    <MenuItem eventKey="1" href="profile">Profile</MenuItem>
                    <MenuItem eventKey="2" href="/settings">Settings</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="3">
                      <Link onClick={this.requireAuth} to={this.state.path}>{this.state.button}</Link>
                    </MenuItem>
                  </DropdownButton>
                )
                : (
                  <Link className="loginButton" onClick={this.requireAuth} to={this.state.path}>{this.state.button}</Link>
                )
            }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
