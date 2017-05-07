import React from 'react';

const Navbar = () =>{
	return(
		  <div className="homePage">
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
		            <li ><a href="#" ><font color="white">Inicio</font></a></li>
		            <li><a href="#footer"><font color="white">Sobre Donéalo</font></a></li>
		            <li><button className="button loginButton">Login</button></li>
		          </ul>
		      </div>
		    </div>
		  </nav>
			<div className="mainHeader">
				<h1 className=" homeTitle">Dona por una causa</h1>
				<h3 className=" homeSubtitle">Apoya organizaciones sin fines de lucro de Puerto Rico</h3>
				<a href="#organizaciones">
				<button className="button mainButton">
					Ver Organizaciones
				</button>
				</a>
				</div>
		</div>
      );

}


export default Navbar;
