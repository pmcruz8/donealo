import React from 'react';

const AdminNavbar = () => {
  return (
      <nav className="navbar darker-blue navbar-fixed-top" role="navigation">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html"><img className="side-nav-logo" src="/img/logo.png" /></a>
          </div>
          <ul className="nav navbar-right top-nav">
              <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bell"></i></a>
                  <ul className="dropdown-menu alert-dropdown">
                      <li>
                          <a href="#">Alert Name <span className="label label-default">Alert Badge</span></a>
                      </li>
                      <li>
                          <a href="#">Alert Name <span className="label label-primary">Alert Badge</span></a>
                      </li>
                      <li>
                          <a href="#">Alert Name <span className="label label-success">Alert Badge</span></a>
                      </li>
                      <li>
                          <a href="#">Alert Name <span className="label label-info">Alert Badge</span></a>
                      </li>
                      <li>
                          <a href="#">Alert Name <span className="label label-warning">Alert Badge</span></a>
                      </li>
                      <li>
                          <a href="#">Alert Name <span className="label label-danger">Alert Badge</span></a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a href="#">View All</a>
                      </li>
                  </ul>
              </li>
              <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Grace Hopper <b className="caret"></b></a>
                  <ul className="dropdown-menu">
                      <li>
                          <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
                      </li>
                      <li>
                          <a href="#"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
                      </li>
                      <li>
                          <a href="#"><i className="fa fa-fw fa-gear"></i> Settings</a>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <a href="#"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                      </li>
                  </ul>
              </li>
          </ul>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav side-nav">
                  <li className="active side-nav-items">
                      <a className="text-white" href="#"><i className="fa fa-fw fa-bullhorn"></i> Campañas</a>
                  </li>
                  <li className="side-nav-items">
                      <a className="text-white" href="#"><i className="fa fa-fw fa-heart"></i> Donaciones</a>
                  </li>
                  <li className="side-nav-items">
                      <a className="text-white" href="#"><i className="fa fa-fw fa-users"></i> Voluntarios</a>
                  </li>
                  <li className="side-nav-items">
                      <a className="text-white" href="#"><i className="fa fa-fw fa-cubes"></i> Artículos</a>
                  </li>
              </ul>
          </div>
      </nav>
  );
}

export default AdminNavbar;
