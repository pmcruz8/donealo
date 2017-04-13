import React, { Component } from 'react';
import {Link} from 'react-router'
import {Navbar, NavItem} from 'react-materialize';

class Header extends Component {
   render(){
    return (
      <div>
        <Navbar brand='dona_logo.png' left>
        <Navbar brand='logo-blue.png' left>
          <NavItem><Link to="/path goes here" activeClassName="active">Inicio</Link></NavItem>
          <NavItem><Link to="/path goes here" activeClassName="active">Campañas</Link></NavItem>
          <NavItem><Link to="/path goes here" activeClassName="active">Organizaciones</Link></NavItem>
        </Navbar>
      {this.props.children}
      </div>
    );
  }
}

export default Header;
