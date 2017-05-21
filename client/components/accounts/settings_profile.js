import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

const SettingsProfile = () => {
  return (
    <div>
      <div className="col-md-12 margin-top-20">
        <label>Sobre Nosotors</label>
        <input className="form-control" placeholder="Sobre Nosotros"/>
      </div>
      <div className="col-md-12 margin-top-20">
        <label>FAQ</label>
        <input className="form-control" placeholder="FAQ"/>
      </div>
      <div className="margin-top-20 pull-right">
        <button className="btn btn-primary">Edit</button>
      </div>
    </div>
  )
}

export default SettingsProfile;
