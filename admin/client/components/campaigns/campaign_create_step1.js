import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AdminNavbar from '../../common/admin_navbar';

class CreateCampaignStep1 extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
        <form>
          <div className="form-group">
            <label>Cantidad</label>
            <input ref="quantity" className="form-control" />
            <label>Título</label>
            <input ref="title" className="form-control" />
            <label>Categoría</label>
            <input ref="category" className="form-control" />
            <label>Fecha y Hora</label>
            <input ref="datetime" className="form-control" />
          </div>
          <div className="text-danger"></div>
          <div className="text-center">
            <Link to="/create/2"><button className="btn btn-primary">Continuar</button></Link>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default CreateCampaignStep1;
