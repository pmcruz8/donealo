import React, { Component } from 'react';

class CreateCampaignStep1 extends Component {
  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
      <form>
        <div className="form-group">
          <label>Cantidad</label>
          <input ref="quantity" className="form-control" />
          <label>Cantidad</label>
          <input ref="quantity" className="form-control" />
          <label>Título</label>
          <input ref="quantity" className="form-control" />
          <label>Categoría</label>
          <input ref="quantity" className="form-control" />
          <label>Fecha</label>
          <input ref="quantity" className="form-control" />
        </div>
        <div className="text-danger"></div>
        <div className="text-center">
          <button className="btn btn-primary">Continuar</button>
        </div>
      </form>
      </div>
    );
  }
}

export default CreateCampaignStep1;
