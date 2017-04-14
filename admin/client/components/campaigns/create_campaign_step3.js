import React, { Component } from 'react';

class CreateCampaignStep3 extends Component {
  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
            <img src="https://placehold.it/400x300" width="100%"/>
          <div className="row">
            <div className="col-xs-6">
              <a className="pull-left">Volver a editar</a>
            </div>
            <div className="col-xs-6">
              <button className="btn btn-primary pull-right">Ver Campaña</button>
            </div>
          </div>
      </div>
    );
  }
}

export default CreateCampaignStep3;
