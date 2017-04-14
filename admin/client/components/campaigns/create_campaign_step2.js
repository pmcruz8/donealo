import React, { Component } from 'react';

class CreateCampaignStep2 extends Component {
  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <form>
          <div className="form-group">
            <label>Descripción</label>
            <textarea rows="6" ref="description" className="form-control" />
            <label>Photo URL</label>
            <input ref="photo" className="form-control" />
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

export default CreateCampaignStep2;
