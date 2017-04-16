import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <img className="logo" src="/img/logo-blue.png" alt="" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a className="text-white" href="index.html">Inicio</a></li>
                <li><a className="text-white" href="index.html#campaignBody">Campañas</a></li>
                <li><a className="text-white" href="index.html#organizationBody">Organizaciones</a></li>
              </ul>
              <form className="navbar-form navbar-right">
                <button type="submit" className="btn btn-create-campaign" className="btn donateIcons" src="" alt="">Crear Campaña</button>
              </form>
            </div>
          </div>
        </nav>

      </div>
    );

}

export default Header;
