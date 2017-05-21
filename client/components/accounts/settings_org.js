import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

const SettingsOrg = () => {
  return (
    <div>
      <div className="col-md-12 margin-top-20">
        <label>Nombre de Organización</label>
        <input className="form-control" placeholder="Nombre de Organización"/>
      </div>
      <div className="col-md-12 margin-top-20">
        <label>Teléfono</label>
        <input className="form-control" placeholder="Teléfono"/>
      </div>
      <div className="col-md-12 margin-top-20">
        <label>Dirección Física</label>
        <input className="form-control" placeholder="Dirección Física"/>
      </div>
      <div className="margin-top-20 pull-right">
        <button className="btn btn-primary">Edit</button>
      </div>
    </div>
  )
}

export default SettingsOrg;
