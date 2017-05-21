import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

const SettingsPersonal = () => {
  return (
    <div>
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

export default SettingsPersonal;
