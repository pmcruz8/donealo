import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class SettingsNav extends Component {
  // function onNavClick {
  //
  // }

  render() {
    return (
      <div>
          <ul className="nav nav-tabs">
            <li className="active"><a href="#">Personal</a></li>
            <li><a href="#">Organización</a></li>
          </ul>
      </div>
    )
  }

}

export default SettingsNav;
