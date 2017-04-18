import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
      <div>
        <Navbar brand='../../public/img/dona_logo.png' left>
        <Navbar brand='../../public/img/logo-blue.png' left>
          <NavItem><Link to="/path goes here" activeClassName="active">Inicio</Link></NavItem>
          <NavItem><Link to="/path goes here" activeClassName="active">Campañas</Link></NavItem>
          <NavItem><Link to="/path goes here" activeClassName="active">Organizaciones</Link></NavItem>
        </Navbar>
        </Navbar>
      {this.props.children}

        <h1>Campaign Title</h1>
        <ProgressBar />
      </div>
    );

}

export default Header;
