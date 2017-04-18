import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import { Link } from 'react-router-dom'
import { Campaigns } from '../../../collections/campaigns'; 

class CreateCampaignStep3 extends Component {
  render() {
    return (
      <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
            <img src="https://placehold.it/400x300" width="100%"/>
          <div className="row">
            <div className="col-xs-6">
              <Link to="/" className="btn btn-primary pull-right">Ver Campaña</Link>
            </div>
          </div>
      </div>
    );
  }
}

export default CreateCampaignStep3;
