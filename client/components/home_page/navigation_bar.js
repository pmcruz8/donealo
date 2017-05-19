import React from 'react';
import { Link } from 'react-router-dom';
import AccountsUIWrapper from '../../../imports/AccountsUIWrapper'

const Navbar = () =>{
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
		                <img className="logoDona" src="img/dona_logo.png" alt=""></img>
		              </div>
		              <div className="col-xs-9">
		                <img className="logo" src="img/logo.png" alt=""></img>
		              </div>

		            </div>
		          </a>
		        </div>
		        <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
		          <ul className="nav navbar-nav">
		            <li className="navbarButtons"><a href="#" ><font color="white">Inicio</font></a></li>
		            <li className="navbarButtons"><a href="#footer"><font color="white">Sobre Donéalo</font></a></li>
		            <li><button className="button loginButton"><AccountsUIWrapper /></button></li>
		          </ul>
		      </div>
		    </div>
		  </nav>

      );
}


export default Navbar;
