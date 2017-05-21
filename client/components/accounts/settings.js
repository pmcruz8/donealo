import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

const Settings = () => {
  return (
    <div className="container background-settings col-md-6 col-md-offset-3">
      <h3>Settings</h3>
      <ul className="nav nav-tabs">
        <li className="active"><a href="#">Personal</a></li>
        <li><a href="#">Organización</a></li>
      </ul>
      <div className="col-md-12 margin-top-20">
        <label>Nombre</label>
        <input className="form-control" placeholder="Nombre"/>
      </div>
      <div className="col-md-12 margin-top-20">
        <label>Apellido</label>
        <input className="form-control" placeholder="Apellido"/>
      </div>
      <div className="col-md-12 margin-top-20">
        <label>Email</label>
        <input className="form-control" placeholder="Email"/>
      </div>
      <div className="col-md-12 margin-top-20">
        <label>Password</label>
        <input className="form-control" placeholder="Password"/>
      </div>
      <div className="margin-top-20 pull-right">
        <button className="btn btn-primary">Edit</button>
      </div>
    </div>
  )
}

export default Settings;
