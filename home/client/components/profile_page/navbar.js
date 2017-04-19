import React from 'react';

const navbar = () =>{
	return(
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
                <li><a className="" href="index.html">Inicio</a></li>
                <li><a className="" href="index.html#campaignBody">Campañas</a></li>
                <li><a className="" href="index.html#organizationBody">Organizaciones</a></li>
                <li><a className="" href="index.html#Login">Login</a></li>
              </ul>
              <form className="navbar-form navbar-right">
              </form>
            </div>
          </div>
        </nav>

      </div>
      );

}


export default navbar;
