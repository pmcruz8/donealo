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
      <div className="col-md-12 margin-top-20">
        <label>Dirección Postal</label>
        <input className="form-control" placeholder="Dirección Postal"/>
      </div>
      <div className="col-md-12 margin-top-20">
        <label>Paypal Email</label>
        <input className="form-control" placeholder="Paypal Email"/>
      </div>
      <div className="col-md-12 margin-top-20">
        <label>Categoría</label>
        <input className="form-control" placeholder="Categoría"/>
      </div>
      <div className="col-md-12 margin-top-20">
        <label>Logo URL</label>
        <input className="form-control" placeholder="Logo URL"/>
      </div>
      <div className="col-md-12 margin-top-20">
        <label>Website URL</label>
        <input className="form-control" placeholder="Website URL"/>
      </div>
      <div className="col-md-12 margin-top-20">
        <label>Facebook URL</label>
        <input className="form-control" placeholder="Facebook URL"/>
      </div>
      <div className="margin-top-20 pull-right">
        <button className="btn btn-primary">Edit</button>
      </div>
    </div>
  )
}

export default SettingsOrg;
