import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CreateCampaignStep2 extends Component {
  render() {
    return (
      <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
        <form>
          <div className="form-group">
            <label>Descripción</label>
            <textarea rows="6" ref="description" className="form-control" />
            <label>Photo URL</label>
            <input ref="photo" className="form-control" />
          </div>
          <div className="text-danger"></div>
          <div className="col-xs-6">
            <Link to="/create/1" className="pull-left">Volver a editar</Link>
          </div>
          <div className="col-xs-6">
            <Link to="/create/3" className="btn btn-success pull-right">Publicar</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateCampaignStep2;
